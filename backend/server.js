const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const server = express();

const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    databse: "firstproject",
})

// db.connect( (error)=>{
//     if(error){
//         console.log("DB is not Connected (Error) :", error)
//     }
//     else{
//         console.log("Database successfully connected")
//     }
// })

server.listen(4040, (error)=>{
    if(error){
console.log(`Error in "server.listen :" `, error)
    }
    else{
        console.log("server is running!")
    }
})