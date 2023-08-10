const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ports = process.env.PORT || 3000;
const app = express();

const errorController = require("./controllers/error")

const authRoutes = require('./routes/auth');

app.use(bodyParser.json());
app.use( (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELTE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/auth', authRoutes);
console.log("erorrrrrrrrr")
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, (error)=>{
    if(error){
console.log(`Error in "server.listen :" `, error)
    }
    else{
        console.log(`server is running on ${ports}`)
    }
})