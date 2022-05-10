const Router = require('express');
const { User } = require('../models/users');
const users = Router();

// get user detail
users.get('/detail/:email',
    async (req, res) => {
        const user = await User.find({email: req.params.email.trim()});
        if (!user?.length) {
            res.status(404).json({
                message: 'User not found'
            });
        } else {
            res.status(200).json({
                message: 'User found',
                user
            });
        }

    })

//get all users
users.get('/', async (req,res) => {
    try{
        const allUsers = await User.find();
        if(allUsers.length){
            res.status(200).json({
                message: 'Users found',
                allUsers
            });
        }else{
            res.status(404).json({
                message: 'No users found'
            });
        }
    }catch(err){
        console.log('err: ', err);
        res.status(500).json({
            message: 'Error getting users',
            error: err
        });
    }
   
})

module.exports = { users };
