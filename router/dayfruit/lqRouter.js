var fs = require('fs');
var url = require('url');
var path = require('path');

module.exports = function(req,res,next){
  var urlObj = url.parse(req.url,true);
    switch (urlObj.pathname) {
      case　'/allGoods/liqi':
          res.setHeader('Content-Type',"application/json");
          let dataFile = path.resolve(__dirname, '../../data/api/dayfruit/allGoods.json');
          fs.readFile(dataFile,function(err,data){
              res.end(data);
          });
          return;
    }
    next();
}
