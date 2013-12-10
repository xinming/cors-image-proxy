var http = require('http'),
    httpProxy = require('http-proxy');
    url = require('url');

httpProxy.createServer(function (req, res, proxy) {
  new_req = url.parse(req.url.slice(1))
  req.url = new_req.path
  req.headers.host = new_req.host


  res.oldWriteHead = res.writeHead;
  res.writeHead = function(statusCode, headers) {
    /* add logic to change headers here */
    // var contentType = res.getHeader('content-type');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)

    // old way: might not work now
    // as headers param is not always provided
    // https://github.com/nodejitsu/node-http-proxy/pull/260/files
    // headers['foo'] = 'bar';       

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