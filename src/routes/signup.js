const Router = require('express');
const { User } = require('../models/users');
const bcrypt = require('bcrypt');
const signup = Router();

// create user
signup.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({...req.body, password:hashedPassword});
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error creating user',
            error: err
        });
    }
})


module.exports = { signup };
