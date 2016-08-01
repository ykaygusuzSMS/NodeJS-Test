var express = require('express');
var app = express();
var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }     

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.write(html);
});

app.listen(process.env.PORT||8080, function () {
  console.log('Example app listening on port '+process.env.PORT||8080+'!');
  console.log('process port is '+process.env.PORT);
});
});