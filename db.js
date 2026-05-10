
let  mongoose = require("mongoose");

let mongoDBURL ="mongodb://127.0.0.1:27017/practicedb";

 mongoose.connect(mongoDBURL);

 let db = mongoose.connection;

 db.on("connected",()=>{

console.log("!DB connceted successfully!");

 })

 db.on("error",()=>{

console.log("!!!there is issue while connecting  with DB!!!");

 })


 db.on("disconnected",()=>{

console.log("!!may be Database got disconnceted!!");

 })

module.exports = db;

    










































// const mongoose =require('mongoose');


// //define  the MongoDB conncetion  url
// const mongoURL= 'mongodb://localhost:27017/practicedb';

// //Set up mongodb connetion


// mongoose.connect(mongoURL)

// //Get Default connection

// const  db =mongoose.connection;

// db.on('connected',()=>{

// console.log("connceted  to mongodb ");


// })


// db.on('error',()=>{

//     console.log("MongoDB connection error is there ");
// })


// db.on('disconnected ',()=>{

//     console.log("Disconnected to mongoDB");
// })

// module.exports= db;