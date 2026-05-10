// let  data = require('./data.js');
// let _ =require('lodash');
// let  arr= [11,21,21,34,45,"abhay","pratap","singh",23,45,11,11,11,34,34,34,45,45,"abhay","abhay"]

// console.log(data.age);
// console.log(data.name);
// console.log(data.mul(11,11));
// console.log(_.uniq(arr));





// Problem 1: Understanding Servers and Express.js
// Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on how to create a basic server using Express.js







let express =require("express");
let app =express();

app.get('/',(req,res)=>{

    res.send("Hellow Word")
})

app.get('/mains',(req,res)=>{
 
     res.status(200).send("u entered main URL of this Server !!!!!")
 
})




// Problem 2: JSON Manipulation
// a) Define JSON and explain its importance in web development.
// b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading", "painting"]}, explain how you would extract the value of the "age" key. 
// c) How would you convert the following object into a JSON data string? {"title": "Book", "pages": 200}




let obj1 ={"title": "Book", "pages": 200}

let json= '{"name":"Alice","age":29,"hobbies":["reading","painting"]}';
let obj =JSON.parse(json)
console.log(obj.age);




console.log(JSON.stringify(obj1));















// Problem 5: JSON Parsing and Object Conversion
// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would parse it into a JavaScript object.
//  b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?


let js='{"product": "Laptop", "price": 999.99}';
console.log(JSON.parse(js));
console.log(typeof(JSON.parse(js)));

// b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?



 let object=
  { "name": "Bob", "age": 30 }

  console.log(JSON.stringify(object))
console.log(typeof(JSON.stringify(object)));







// Problem 6: Building a Basic API
// Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather. Create an Express.js route that responds with a JSON object containing the current temperature, conditions, and city.


let json_obj ='{"temperature":"45 C","City":"Delhi","conditions":"Sunny"}'




app.get('/currentWeather',(req,res)=>{

res.send(JSON.parse(json_obj));



});




app.listen(3000,()=>{

    console.log("Server is Up and Running Properly");
})

































































// const   express= require('express');
// const  app = express();
// const db= require('./db')


// app.get('/', (req,res)=>{
    
//     res.send("Hitting  home API  Only ");
// })


// app.get('/veg', (req,res)=>{

//   res.send("This is Only Veg resturand .Jain shree naam");

// })

// app.get('/menu', (req,res)=>{



//   let menu={
    
//     food: "Big Thali Food",
//     Sweet:["rasgulla","emarti" ,"kaaju" ],
//     Drink :["Coca", "Old monk", "Vine "]
 



//   }
//     res.send(menu);

// })








// app.listen(3000, ()=>{
//        console.log("this port 3000 is able to here   your   request ");
// })