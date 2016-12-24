module.exports = function (req, res, next) {
  console.log(new Date().toString() + ': ' + req.originalUrl);
  next();
};
