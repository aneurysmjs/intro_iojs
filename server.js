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
   let fileName = path.join(__dirname, 'public', 'index.html');
   // join lets you concatenate routes and directories
   // __dirname is the current location where the application is running
   // instead of using it synchronously, we're going to make it asynchronously.
   // here is the first pattern of callback by default for node which is used in all the API's and libraries.
   // that pattern is: the 'error' as a first argument.
   fs.readFile(fileName, function(err, file) { // the last argument of an asynchronous function is a callback that's going to take a file after loaded.
      if(err) {
         res.end(err.message);
      }
      res.end(file);
   });
}

function onListening() {
   console.log('server listening on port ' + port);
}



