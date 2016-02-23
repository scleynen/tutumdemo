var http = require('http');
var port = 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Test Process: ' + process.pid.toString());
}).listen(port, function () {
    console.log('server is listening on port %d', port);
});