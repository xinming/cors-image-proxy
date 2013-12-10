var http = require('http'),
    httpProxy = require('http-proxy');
    url = require('url');

httpProxy.createServer(function (req, res, proxy) {
  new_req = url.parse(req.url.slice(1))
  req.url = new_req.path
  req.headers.host = new_req.host


  res.oldWriteHead = res.writeHead;
  res.writeHead = function(statusCode, headers) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.oldWriteHead(statusCode, headers);
  }
  try{
    proxy.proxyRequest(req, res, {
      host: new_req.host,
      port: 80
    });
  }catch(err){
    console.log(err);
  }

}).listen(8000);