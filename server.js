'use strict';
// define http
const http = require('http');
// with io.js we can obtain the environment variables of the operative system
const port = process.env.PORT || 8080;
/*
 if we want maintainable code, the recommendation is that all of our callbacks(anonymous/asynchronous) functions
 need to be defined/declared functions
 */
const server = http.createServer(onRequest);

server.listen(port, onListening);

function onRequest(req, res) {
   res.end('hi ioj.s');
}

function onListening() {
   console.log('server listening on port ' + port);
}



