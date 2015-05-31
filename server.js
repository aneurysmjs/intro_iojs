'use strict';
//define http
const http = require('http');
//with io.js we can obtain the environment variables of the operative system
const port = process.env.PORT || 8080;
//create our http server
const server = http.createServer();
