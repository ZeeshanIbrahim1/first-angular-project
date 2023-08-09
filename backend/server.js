const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const ports = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use( (req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELTE')
    res.setHeadere('Access -Control-Alloe-Headers', 'Content-Type, Authorization')
    next();
})



// db.connect( (error)=>{
//     if(error){
//         console.log("DB is not Connected (Error) :", error)
//     }
//     else{
//         console.log("Database successfully connected")
//     }
// })

app.listen(ports, (error)=>{
    if(error){
console.log(`Error in "server.listen :" `, error)
    }
    else{
        console.log(`server is running on ${ports}`)
    }
})