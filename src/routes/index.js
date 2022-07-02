const Router = require('express');
const { verifyTokenMiddleWare, verifyIp } = require('../middlewares');
const router = Router();
const { users } = require('./users');
const { login } = require('./login');
const { products } = require('./product');
const { signup } = require('./signup');
const { salons } = require('./salons');

//check api calls are from whitelisted ips
router.use('/',(res,er,next)=>{next()});

router.use('/login', login);
router.use('/signup', signup);

router.use('/users', users);
router.use('/products', products)
router.use('/salons', salons)


module.exports = { router };
