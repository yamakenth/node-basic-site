const http = require('http');
const fs = require('fs');

function getSuccess(res, fname) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(fname);
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    getSuccess(res, 'index.html');
  } else if (req.url === '/about') {
    getSuccess(res, 'about.html');
  } else if (req.url === '/contact-me') {
    getSuccess(res, 'contact-me.html');
  } else {
    getSuccess(res, '404.html');
  }
});

server.listen(8080, () => {
  console.log(`Server running at http://localhost:8080/`);
})