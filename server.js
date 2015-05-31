'use strict';
// define http
const http = require('http');
// with io.js we can obtain the environment variables of the operative system
const port = process.env.PORT || 8080;
// 'callbacks' are functions that are executed after an asynchronous method has finished executing
// createServer() takes a function to be run whenever receives an http request
const server = http.createServer(function(req, res) {
   res.end('hi ioj.s');
});

server.listen(port, function(){
   console.log('server listening on port ' + port);
});

