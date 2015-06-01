console.log('hi app.js');
// if we run the server, the page will load without problems.
// but in the console with appear "SyntaxError: expected expression, got '<'"
// if we look the source code of the page, it loaded everything in the correct order
// if we click our app.js, it'll open the index.html
// and that's because the main route of the server it serving just the index.html
// no matter what we pass to the route, it'll always serve index.html
// so we need to specify routes in order to see what kind of resources are loading