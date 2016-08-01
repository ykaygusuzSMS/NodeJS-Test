const http = require('http'),
 fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});
});

