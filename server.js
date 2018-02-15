//requerimos de la libreria de http para crear un server
var http = require('http');

//creamos el server y lo guardamos en una variable
var server = http.createServer
(
	(request, response) => 
	{
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hii, Onii - chan :D');
	}
);

//iniciamos el server con un puerto
server.listen(3000, "localhost", 
() => 
{
	console.log("ya me encendiste onii - chan")
});