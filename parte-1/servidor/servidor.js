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

var usuarios = {}

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
		// ao entrar na página
		req.pipe(concat(function(data){
			var dados = JSON.parse(data.toString())
			ip = pegaIP(req)
			
			if (parse.pathname == '/entrar'){
				if (!usuarios[ip]) usuarios[ip] = {
					senha:Math.random().toString(36).substring(2,8),
					nome:dados.nome,
					loggado:false
				}
				res.writeHead(200, { 'Content-Type': 'application/json' })
				res.end(JSON.stringify({loggado:usuarios[ip].loggado,nome:usuarios[ip].nome}))
			} else if(parse.pathname == '/usuario'){
				usuarios[ip].nome = dados.nome;
				res.writeHead(200, { 'Content-Type': 'application/json' })
				res.end(JSON.stringify({loggado:usuarios[ip].loggado,nome:usuarios[ip].nome}))
			} else if(parse.pathname == '/senha') {
				usuarios[ip].loggado = dados.senha == usuarios[ip].senha;
				res.writeHead(200, { 'Content-Type': 'application/json' })
				res.end(JSON.stringify({loggado:usuarios[ip].loggado,nome:usuarios[ip].nome}))
				if(usuarios[ip].loggado) console.log('sucesso: '+usuarios[ip].nome)
			} else if(parse.pathname == '/mpw'){
				res.writeHead(200, { 'Content-Type': 'application/json' })
				res.end(JSON.stringify({senha:usuarios[ip].senha}))
				console.log(usuarios[ip].nome + ' acaba de solicitar a senha')
			} else {
				res.writeHead(404, { 'Content-Type': 'text/plain' })
				res.end('Arquivo não encontrado')
				console.log('static'+parse.pathname)
			}
		}))
	}

	return
})

var pegaIP = function(req){
	var ip = req.headers['x-forwarded-for'] || 
					 req.connection.remoteAddress || 
					 req.socket.remoteAddress ||
					 req.connection.socket.remoteAddress;

	ip = ip.split(':')[ip.split(':').length-1]
	return ip
}

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