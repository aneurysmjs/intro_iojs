'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router');// it's serving 'index.html'

const port = process.env.PORT || 8080;
const server = http.createServer();

server.on('request', router);// instead a passing 'onRequest', we pass 'router' cuz it already has 'onRequest'
server.on('listening', onListening);
server.listen(port);

// now the server won't need serveIndex and serveApp because 'st' is doing the job for us

function onListening() {
   console.log(`server listening on port ${port}`);
}

