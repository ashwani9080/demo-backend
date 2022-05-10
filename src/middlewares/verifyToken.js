const { verifyToken } = require('../helpers/token/jwt-token');


const verifyTokenMiddleWare = (req, res, next) => {
    verifyToken(req, res, next);
}

module.exports = { verifyTokenMiddleWare }