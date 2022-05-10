const Router = require('express');
const { verifyTokenMiddleWare } = require('../middlewares/verifyToken');

const router = Router();
const { users } = require('./users');
const { login } = require('./login');
const { products } = require('./product');
const { signup } = require('./signup');


router.use((req, res, next) => {
    next();
});

router.use('/login', login);
router.use('/signup', signup);

router.use('/users', verifyTokenMiddleWare, users);
router.use('/products', verifyTokenMiddleWare, products )

module.exports = { router };
