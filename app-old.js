const http = require('http');

http.createServer((req, res) => {

    // console.log(req);
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // const persona = {
    //     id: 1,
    //     nombre: 'Elkin'
    // }
    //res.write(JSON.stringify(persona));
    //res.write(JSON.stringify(persona));
    res.write("hola Mundo");
    res.end();
}).listen(8080);

console.log('Escuchando en el puerto 8080');