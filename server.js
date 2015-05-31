'use strict';
// define http
const http = require('http');
const fs = require('fs');
// with io.js we can obtain the environment variables of the operative system
const port = process.env.PORT || 8080;
// event emitter is node.js/io.js mechanism that lets you emit events and listen for those events
// 'server' besides taking a callback, it's also an event emitter
const server = http.createServer();
//when is a 'request' is going to execute the function onRequest
server.on('request', onRequest);
server.on('listening', onListening);
server.listen(port);

function onRequest(req, res) {
   // instead of responding a 'message', respond with a file
   // synchronous method
   let file = fs.readFileSync('public/index.html');// readFileSync takes a path to a file and responds with that file
   /*
    * is not recommended using it synchronously because it'll block the main execution threat of io.js
    * while it loads the all file from the system, when it finish loading the file, it'll block all of
    * the request that's coming to the server and then sends the file.
    */
   res.end(file);
}

function onListening() {
   console.log('server listening on port ' + port);
}



