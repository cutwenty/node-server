const express = require('express');
const router = express.Router();

//获取静态页面
router.use('/', express.static('~/download'));

module.exports = router;
