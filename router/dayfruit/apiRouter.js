const express = require('express');
const router = express.Router();

router.get('/banner', (req, res, next) => {
  next();
});

module.exports = router;
