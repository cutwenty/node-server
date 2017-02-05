const home = '/home/hxhgta/app/vancl';
const lib = '/home/hxhgta/server/node/data/lib/vancl';
const image = '/home/hxhgta/server/node/data/image/vancl';
const api = '/home/hxhgta/server/node/data/api/vancl';

const express = require('express');
const router = express.Router();

//获取静态页面
router.use('/', express.static(home));
router.use('/lib', express.static(lib));
router.use('/image', express.static(image));
router.use('/api', express.static(api));

module.exports = router;
