const fs = require('fs');

module.exports = function (app) {
  fs.readdir('./middleware', (err, files) => {
    if (err) { throw err; }
    for(let file of files) {
      if (file === 'index.js') {
        continue;
      }
      let middleware = require('./' + file);
      app.use(middleware);
    }
  });
};
