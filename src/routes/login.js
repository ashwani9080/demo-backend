const Router = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/users');
const { generateJWTToken } = require('../helpers/token/jwt-token');
const login = Router();

login.get('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        const payload = { email };

        const user = await User.findOne(payload);
        const token = await generateJWTToken(payload);
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                message: 'Users found',
                user,
                token,
            });
        } else {
            res.status(404).json({
                message: 'No users found'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error getting users',
            error: err
        });
    }
}
);

module.exports = { login };

