var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(24);

//buf.write(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send('Test');
//response.send(fs.readFileSync('index.html').toString("utf-8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
