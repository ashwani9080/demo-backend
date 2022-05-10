const Router = require('express');
const { verifyTokenMiddleWare, verifyIp } = require('../middlewares');
const router = Router();
const { users } = require('./users');
const { login } = require('./login');
const { products } = require('./product');
const { signup } = require('./signup');

//check api calls are from whitelisted ips
router.use(verifyIp);

router.use('/login', login);
router.use('/signup', signup);

router.use('/users', verifyTokenMiddleWare, users);
router.use('/products', verifyTokenMiddleWare, products)

module.exports = { router };
