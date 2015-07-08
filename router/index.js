// let's create a module that will let us extract all the functionality of the routes
const path = require('path');
const st = require('st');// st is module for serving static files. Does tags, caching, etc.

//create the configuration of the module
const mount = st({
   path: path.join(__dirname, '..', 'public'),// define the static folder
   index: 'index.html'
});

// with this all the 'public' will be mount on the server
function onRequest(req, res) {
   mount(req, res, function(err) {
      if(err) return res.end(err.message);

      res.statuCode = 404;
      res.end(`Not found ${url}`)
   });
}
// this is how we export a function to be called
module.exports = onRequest;