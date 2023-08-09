const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

const User = require("../models/user")

exports.signup = async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(req.body)
        console.log("Error here");
        return;
        
    } 
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password; 
    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const userDetials = {
            name: name,
            email: email,
            password: hashedPassword
        }
        await User.save(userDetials);
        res.status(201).json({ message:'User registered!'})
    }
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500; 
        }
    }
    next(err);
}