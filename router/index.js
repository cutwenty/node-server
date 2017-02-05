const fs = require('fs');

module.exports = function (app) {
  fs.readdir('./router', (err, files) => {
    if (err) { throw err; }
    for(let file of files) {
      if (file === 'index.js') {
        continue;
      }
      let router = require('./' + file);
      app.use('/' + file, router);
    }
  });
};
