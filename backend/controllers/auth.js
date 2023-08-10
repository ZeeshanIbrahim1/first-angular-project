const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');

const User = require("../models/user")
const jwt = require('jsonwebtoken')

exports.signup = async (req,res,next) =>{
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        console.log(req.body)
        console.log("Error here");
        res.json('email already exists');
        return 0;
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
        console.log("coming in catch");
        next(err);
    }
}

exports.login = async(req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        console.log("Login Email:", email)
        const user = await User.find(email)
        if(user[0].length !== 1){
            console.log("STORED USER INFO : ", storedUser)
            const error = new Error('User with this email is not found');
            error.statusCode = 401;
            throw error;
        }
        const storedUser = user[0][0];
        console.log("STORED USER INFO : ", storedUser)

        const isEqual = await bcrypt.compare(password,storedUser.password);
        console.log(" Checking PW : " , isEqual);
        if(!isEqual){
            const error = new Error('Wrong Password!')
            error.statusCode = 401;
            throw error;
        }
        console.log("Pass 1!")

        const token = jwt.sign(
            {
                email: storedUser.email,
                userId: storedUser.id
            },
            'secretfortoken',
            { expiresIn: "1h" }
        );

        console.log("token : ", token)

        res.status(200).json({ token: token, userId: storedUser.id })
    }
    catch (err){
        if(!err.statusCode){
            err.statusCode = 500; 
        }
        console.log("coming in catch LOGIN CONTROLLER AUTH");
        next(err);
    }

}