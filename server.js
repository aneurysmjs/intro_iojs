'use strict';
// define http
const http = require('http');
// with io.js we can obtain the environment variables of the operative system
const port = process.env.PORT || 8080;
// event emitter is node.js/io.js mechanism that lets you emit events and listen for those events
// 'server' besides taking a callback, it's also an event emitter
const server = http.createServer();
//when is a 'request' is going to execute the function onRequest
server.on('request', onRequest());
server.on('listening', onListening());
server.listen(port);

function onRequest(req, res) {
   res.end('hi ioj.s');
}

function onListening() {
   console.log('server listening on port ' + port);
}



