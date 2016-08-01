var express = require('express');
var app = express();    

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(process.env.PORT||8080, function () {
  console.log('Example app listening on port '+process.env.PORT||8080+'!');
  console.log('process port is '+process.env.PORT);
});

// views is directory for all template files
