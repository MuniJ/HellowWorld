// var http = require('http');
// function handle_incoming_request(req, res) {
// console.log("INCOMING REQUEST: " + req.method + " " + req.url);
// res.writeHead(200, { "Content-Type" : "application/json" });
// res.end(JSON.stringify( { error: null }) + "\n");
// }
// var s = http.createServer(handle_incoming_request);
// s.listen(8080);


// 815962
// 953281

var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html', function(err, data){
        response.send(data.toString());
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});