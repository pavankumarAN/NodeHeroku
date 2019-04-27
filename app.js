const http = require('http');
const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

// let server = http.createServer((req, res) => {
//     // res.writeHead(200, { 'content-type': 'text/plain' });
//     console.log("Hai");
//     res.end("Hello World");
// });

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/index.html');
});

app.listen(port, () => {
    console.log("Server is running at port number 3000");

});