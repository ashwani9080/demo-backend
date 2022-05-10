const { whitelistIps } = require('../config');

const verifyIp = (req, res, next) => {
    const ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    const ipaddress = ip.split(':')[3];
    console.log(`${ipaddress} - ${req.method} - ${req.url}`);
    if (whitelistIps.includes(ipaddress)) {
        next();
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }
}
module.exports = { verifyIp };