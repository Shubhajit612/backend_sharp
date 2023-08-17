const http = require('http');

const routes = require('./routes');


let server = http.createServer(routes.handler);

console.log(routes.someText);
server.listen(4000);