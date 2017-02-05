var fs = require('fs');
var url = require('url');
var path = require('path');

function getFile (file) {
  let dataFile = path.resolve(__dirname, '../../data/api/dayfruit' + file);
  return dataFile;
}

module.exports = function(req,res,next){
  var urlObj = url.parse(req.url,true);

  switch(urlObj.pathname){
  case '/index/listData':
    res.setHeader('Content-Type','application/json');
    fs.readFile(getFile('/index.json'),function(err,data){
      res.end(data);
    });
    return;

  case '/index/bannerList':
    res.setHeader('Content-Type','application/json');
    fs.readFile(getFile('/index-banner.json'),function(err,data){
      res.end(data);
    });
    return;
  case '/index/freshList':
    res.setHeader('Content-Type','application/json');
    fs.readFile(getFile('/index-fresh.json'),function(err,data){
      res.end(data);
    });
    return;
  case '/index/loadedList':
    res.setHeader('Content-Type','application/json');
    fs.readFile(getFile('/index-loaded.json'),function(err,data){
      res.end(data);
    });
    return;
  case '/other/otherData':
    res.setHeader('Content-Type','application/json');
    fs.readFile(getFile('/other.json'),function(err,data){
      res.end(data);
    });
    return;
  }
  next();
}
