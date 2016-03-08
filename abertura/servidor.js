var http = require('http')
var url = require('url')
var path = require('path')
var fs = require('fs')
var concat = require('concat-stream')

var tipo = {
	'.html':'text/html',
	'.jpeg':'image/jpeg',
	'.jpg':	'image/jpeg',
	'.png':	'image/png',
	'.js':	'text/javascript',
	'.css':	'text/css'
}

var porta = process.argv[2] || 8000
var pasta = process.argv[3] || 'static'

// Ativa o servidor
var server = http.createServer(function (req, res) {
	var parse = url.parse(req.url, true)
	
	if(req.method == 'GET'){
		// em caso de termos uma url limpa
		if(path.extname(parse.pathname) == '')
			parse.pathname += 'index.html'

		// carregamento do arquivo
		var file = fs.readFile(pasta+parse.pathname, 'utf8', function(err, data){
			if(data){
				res.writeHead(200, { 'Content-Type': tipo[path.extname(parse.pathname)] })
				res.end(data)
			} else {
				res.writeHead(404, { 'Content-Type': 'text/plain' })
				res.end('Arquivo não encontrado')
				console.log('static'+parse.pathname)
			}
		});
	} else if(req.method == 'POST'){
		console.log(parse.pathname)
		req.pipe(concat(function(data){
			var dados = JSON.parse(data.toString())
			var ip = req.headers['x-forwarded-for'] || 
							 req.connection.remoteAddress || 
							 req.socket.remoteAddress ||
							 req.connection.socket.remoteAddress;

			console.log(dados, ip.split(':')[ip.split(':').length-1])

			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(data.toString())
		}))
	}

	return
})

server.listen(porta)

// descobre o IP da máquina na rede local

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
	var alias = 0;

	ifaces[ifname].forEach(function (iface) {
		if ('IPv4' !== iface.family || iface.internal !== false)
			return;

		if (alias >= 1)
			console.log(ifname + ':' + alias, iface.address+':'+porta);
		else
			console.log(ifname, iface.address+':'+porta);
		
		++alias;
	});
});