var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var htmlFile = "index.html";

//var prnt = fs.readFileSync('index.html').toString("utf-8");

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlFile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
