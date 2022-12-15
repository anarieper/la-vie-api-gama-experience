module.exports = function requestLogs(req, res, next) {
    console.log(`🚨 - Request ${req.method}: ${req.url}`);
    next();
  };