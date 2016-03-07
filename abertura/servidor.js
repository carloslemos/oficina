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
		// var str = ''
		// req.on('data', function (chunk) {
		// 	str += chunk
		// })

		req.pipe(concat(function(data){
			var dados = JSON.parse(data.toString())
			console.log(dados)

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
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}

		if (alias >= 1) {
			// this single interface has multiple ipv4 addresses
			console.log(ifname + ':' + alias, iface.address+':'+porta);
		} else {
			// this interface has only one ipv4 adress
			console.log(ifname, iface.address+':'+porta);
		}
		++alias;
	});
});