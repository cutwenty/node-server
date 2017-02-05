var fs = require('fs');
var url = require('url');
var path = require('path');


function getFile (file) {
  let dataFile = path.resolve(__dirname, '../../data/api/dayfruit' + file);
  return dataFile;
}
module.exports = function(req, res, next) {
  var urlObj = url.parse(req.url, true);
  switch (urlObj.pathname) {
  case '/user':
    res.setHeader('Content-Type', 'application/json');
    fs.readFile(getFile('/user.json'), function(err, data) {
      res.end(data);
    });
    //...
    return;
  case '/reg':
    res.setHeader('Content-Type', 'application/json');
    fs.appendFile(getFile('/user.json'), "012345", function(err, data) {
      res.end(data);
    });
    //...
    return;
  }
  next();
}
