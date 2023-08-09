const express = require('express');
const { body } = require('express-validator');
const router = express.Router()
const User = require('../models/user');
const authController = require('../controllers/auth')

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty()
        .custom((body)=>{
            console.log("in auth.js",body)
        }),
        body('email').isEmail().withMessage('Please Enter a Valid Email.')
        .normalizeEmail()
        .custom( async (email) =>{
            const user = await User.find(email);
            if(user){
                // res.end("Email address already exist!");
                return Promise.reject('Email address already exist!');
                // return('Email address already exist!');
            }
        }),
        body('password').trim().isLength({ min: 7})
    ], authController.signup
)

module.exports = router;