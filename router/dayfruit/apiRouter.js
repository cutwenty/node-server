const express = require('express');
const router = express.Router();

const hxhRouter = require('./hxhRouter.js');
const lqRouter = require('./lqRouter.js');
const wjqRouter = require('./wjqRouter.js');
const yhwRouter = require('./yhwRouter.js');
const zwjRouter = require('./zwjRouter.js');

router.use(hxhRouter);
router.use(lqRouter);
router.use(wjqRouter);
router.use(yhwRouter);
router.use(zwjRouter);

module.exports = router;
