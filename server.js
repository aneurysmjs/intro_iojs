'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;
const server = http.createServer();

server.on('request', onRequest);
server.on('listening', onListening);
server.listen(port);

function onRequest(req, res) {
   let url = req.url;// get the URL
   if(url.startsWith('/index') || url === '/') {
      return serveIndex(res);
   }
   if(url === '/app.js') {
      return serveApp(res);
   }

   res.statuCode = 404;
   res.end(`Not found ${url}`)
}

function serveIndex(res) {
   let index = path.join(__dirname, 'public', 'index.html');
   let rs = fs.createReadStream(index);

   res.setHeader('Content-Type', 'text/html');
   rs.pipe(res);

   rs.on('error', function(err) {
      res.setHeader('Content-Type', 'text/html');
      rs.end(err.message);
   });
}

function serveApp(res) {
   let app = path.join(__dirname, 'public', 'app.js');
   let rs = fs.createReadStream(app);

   res.setHeader('Content-Type', 'text/javascript');
   rs.pipe(res);

   rs.on('error', function(err) {
      res.setHeader('Content-Type', 'text/html');
      rs.end(err.message);
   });
}

function onListening() {
   console.log(`server listening on port ${port}`);
}



