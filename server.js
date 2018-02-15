var http = require('http');

var server = http.createServer
(
	(request, response) => 
	{
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hii, Onii - chan :D');
	}
);

server.listen(3000, "localhost", () => {console.log("ya me encendiste onii - chan")});