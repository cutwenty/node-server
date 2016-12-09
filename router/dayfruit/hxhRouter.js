var fs = require('fs');
var url = require('url');
var path = require('path');

module.exports = function(req, res, next) {
  var urlObj = url.parse(req.url,true);
  console.log(req.url);
  switch (urlObj.pathname) {
  case '/goodDetails': getGoodDetails(urlObj, res, next); break;
  case '/detailEnval': getDetailEnval(urlObj, res, next); break;
  case '/userCart': getUserCart(urlObj, res, next); break;
  default: next(); break;
  }
  return;
};

function getFile(dataFile, res, next) {
  dataFile = path.resolve(__dirname, dataFile);
  res.setHeader('Content-Type','application/json');
  fs.readFile(dataFile, function (err, data) {
    if (err) {
      throw err;
    }
    res.end(data);
    next();
  });

}
function getGoodDetails(url, res, next) {
  var dataFile = '../../data/api/dayfruit/good-details/'+url.query.id+'.json';
  getFile(dataFile, res, next);
}
function getDetailEnval(url, res, next) {
  var dataFile = '../../data/api/dayfruit/good-details/'+url.query.id+'.enval.json';
  getFile(dataFile, res, next);
}
function getUserCart(url, res, next) {
  var dataFile = '../../data/api/dayfruit/user-cart/'+url.query.id+'.json';
  getFile(dataFile, res, next);
}
