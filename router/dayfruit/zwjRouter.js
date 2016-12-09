var fs = require('fs');
var url = require('url');
var path = require('path');

function getFile (file) {
  let dataFile = path.resolve(__dirname, '../../data/api/dayfruit' + file);
  return dataFile;
}
module.exports = function(req,res,next){
  var urlObj = url.parse(req.url,true);
  switch (urlObj.pathname) {
    case　'/city':
    res.setHeader('Content-Type',"application/json");
    fs.readFile(getFile('/city1.json'),function(err,data){
      res.end(data);
    });
    return;
    case　'/city2':
    res.setHeader('Content-Type',"application/json");
    fs.readFile(getFile('/city_list.json'),function(err,data){
      res.end(data);
    });
    return;
    case　'/place':
    res.setHeader('Content-Type',"application/json");
    fs.readFile(getFile('/place.json'),function(err,data){
      res.end(data);
    });
    return;
  }
  next();
}
