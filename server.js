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
   let index = path.join(__dirname, 'public', 'index.html');
   // streams are mechanism to read files or sources of binary information that reads in a smarter way.
   // readFile loads the all file in memory, after the file is in memory, executes the callback and the file gets send in the response.
   // so how it works when working with streams?
   // while is reading the file it'll deliver as it goes having data available from the file and delivering it in the response.
   res.setHeader('Content-Type', 'text/html');
   let rs = fs.createReadStream(index);
   // so is reading the file and sending it
   rs.pipe(res);// here we're setting the
   rs.on('error', function(err) {
      rs.end(err.message);
   });
}

function onListening() {
   console.log('server listening on port ' + port);
}



