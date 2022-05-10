const { verifyTokenMiddleWare } = require('./verifyToken');
const { verifyIp } = require('./verifyIps');

module.exports = { verifyIp, verifyTokenMiddleWare }