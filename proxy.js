var http = require('http'),
    httpProxy = require('http-proxy');
    url = require('url');

httpProxy.createServer(function (req, res, proxy) {
  new_req = url.parse(req.url.slice(1))
  req.url = new_req.path
  req.headers.host = new_req.host

  proxy.proxyRequest(req, res, {
    host: new_req.host,
    port: 80
  });
}).listen(8000);