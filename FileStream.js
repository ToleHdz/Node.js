var http = require('http')				//para el servidor
var FileStream = require('fs')			//para leer archivos


//si nosotros agregamos el FileStream como respuesta del servidor, cada vez que nosotros hacemos una peticion, la pagina html se volvera a cargar con o sin cambios
var server = http.createServer
(
	(request, response) => 
	{
		FileStream.readFile('./html/MiPagina.html',
		(error, data) => 					//data es un objeto el cual contiene nuestra pagina web
		{
			response.write(data)			//escribe la pagina web
			response.end() 				//evita que el navegador siga cargando
		});
	}
);

server.listen(3000)
