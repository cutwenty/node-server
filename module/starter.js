const cluster = require('cluster');
const os = require('os');
let cpuNums = os.cpus().length;

//options: {
//  exec: fork打开的文件,
//  args: 参数，命令行打开文件的参数:node app.js arg arg arg...,
//  silent: 是否把输出，输出到master的stdio中
//  };
exports.start = function(options) {
  let defaultOptions = {
    exec: process.argv[1],
    args: process.argv.slice(2),
    silent: false
  };
  options = Object.assign({}, defaultOptions, options);

  cluster.setupMaster({
    exec: options.exec,
    args: options.args,
    silent: options.silent
  });

  console.log('master: ' + process.pid + ', fork ' + cpuNums + ' worker' + (cpuNums > 1? 's': ''));
  for(var i = 0; i < cpuNums; i++){
    cluster.fork();
  }
};
