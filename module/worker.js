const express = require('express');
const app = express();

//app的一些配置，写在外部，作为模块，便于修改
const config = require('../config');

//打开数据库
// const mongoose = require("mongoose");
// const db = mongoose.connect(appConfig.config.mongodb);

//使用自定义的路由模块
const routers = require('../router');

routers(app);

app.use('/', express.static(config.home));

//监听appConfig配置的端口
const server = app.listen(config.port, () => {
  console.log('worker: ' + process.pid + ', start listen: ' + config.port);
});
