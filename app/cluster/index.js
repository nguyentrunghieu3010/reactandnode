var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    console.log("Master " + process.pid + " is running");
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log("worker " + worker.process.pid + " died");
    });
}
else {
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('Hello world');
    }).listen(8000);
    console.log("Worker " + process.pid + " started");
}