// 使用子路由，命名规则要加上Router
const subRouters = [
  // apiRouter.js
  'api',
  'images'
];
const home = '/home/hxhgta/app/dayfruit';

const express = require('express');
const router = express.Router();

//获取静态页面
router.use('/', express.static(home));

for(let name of subRouters) {
  let subRouter = require('./' + name + 'Router');
  router.use('/' + name, subRouter);
}

module.exports = router;
