const http = require('http');

let server = http.createServer((req, res) => {
    // res.writeHead(200, { 'content-type': 'text/plain' });
    console.log("Hai");
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running at port number 3000");

});