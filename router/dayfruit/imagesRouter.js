const express = require('express');
const router = express.Router();

let images = '/home/hxhgta/app/dayfruit/images';

router.use('/', express.static(images));

module.exports = router;
