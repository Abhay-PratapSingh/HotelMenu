
// var  fs = require('fs');
// var os= require('os');


// (function(){
// console.log("are u there");
// })();

// let callback =()=>console.log("u calling a callback function");

// function  useCallback(a,b,callback){

// console.log(a*b);
// callback();

// }


// useCallback(12,12,callback)

// var user =os.userInfo();
// console.log(user);
// fs.appendFile("greet.txt", `hii  ${user.username} `,()=>{console.log("enjoy");})


//Day 2 Practice   Questions

// Problem 2: Writing Functions
// Write a JavaScript function named calculateCircleArea that takes the radius of a circle
// as a parameter and returns the area of the circle. You can use the formula area = π *
// radius^2. Test the function with a few different radii.


let  calculateCircleArea =(r)=>Math.PI*r*r;

console.log(calculateCircleArea(100));


// Problem 3: Callback Functions
// Create a function named performOperation that takes two numbers and a callback
// function as parameters. The callback function should determine the operation to be performed
// (addition, subtraction, multiplication, or division) on the two numbers. Call the
// performOperation function with different numbers and callback functions for each
// mathematical operation.

let add =(a,b)=>a+b;
let sub =(a,b)=>a-b;
let mul =(a,b)=>a*b;
let div=(a,b)=>a/b;

function performOperation(a,b,callbackfunction){

return callbackfunction(a,b)
console.log("........");

}




console.log(performOperation(2,3,add));
console.log(performOperation(2,3,sub));
console.log(performOperation(2,3,div));
console.log(performOperation(2,3,mul));



// Problem 4: Using the 'fs' Module
// Write a Node.js program that uses the fs module to read the contents of a text file named "notes.txt" and display them in the console.


let fs = require('fs');

fs.readFile("hii.txt", "utf8",(err,data)=>{

    if(err){
        console.log("Error Reading file  present over there",err);
        return ;
    }
    console.log(data);
})



// Problem 5: Using 'os' Module
// Create a Node.js program that uses the os module to display the following system information:
// ●	Total memory available (in bytes)
// ●	Free memory available (in bytes)
// ●	Operating system platform
// ●	Number of CPU cores

let os = require('os');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.platform);
console.log(os.cpus().length);

// Problem 6: 'lodash' Usage
// Use the lodash library to solve the following problem: Given an array of numbers, write a function that returns the sum of all even numbers in the array. Use the _.sumBy function from lodash to achieve this.

let  _ = require('lodash');

function  sumfunc(numbers){

let  evennumbers=_.filter(numbers,numbers=>numbers%2==0)
return _.sumBy(evennumbers)
}



console.log(sumfunc([10,20,30,40,50,60]));