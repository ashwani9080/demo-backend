const dotenv = require('dotenv');
dotenv.config();
const whitelistIps = ['127.0.0.1', '172.17.0.1'];
module.exports = { whitelistIps };