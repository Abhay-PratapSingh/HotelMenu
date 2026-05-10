// Problem 1: Conditional Statements (if-else)
// You run a movie theater, and you want to offer discounts based on a person's age. Write a
// JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"


// var prompt =require("prompt-sync")();
// let age=  prompt("Please Enter Your Age");

// if(age<18){
//     console.log("You get a 20% discount!");
// }else if(age>=18 && age<=65){

//     console.log("Normal ticket price applies.");
// }
// else{

//     console.log("You get a 30% senior discount!");
// }

// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length
// and width of the rectangle and store them in variables. Calculate and display the area using
// the formula: `area = length * width`.

// let  area;
// let  length= prompt("Please Enter length of Rectangle");
// let  width=prompt("Please Enter length of Rectangle");

// let recArea= (a,b)=>a*b;

// recArea(length,width)
// console.log(recArea(length,width));


// You're creating an online store. Define a JavaScript object named "product" with the following
// properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object template and display their details using
// console.log






// let Product1={

//     name:"Laptop",
//     price :"$9000",
//     inStock:true
// }


// let Product2={

//     name:"i-Phone 16 Pro Max with 1 TB",
//     price :"$2000",
//     inStock:true
// }


// let Product3={

//     name:"Bike",
//     price :"$18000",
//     inStock:false,
// }

// let  prodList= [Product1,Product2,Product3]

// for(let i=0;i<3;i++){

//     console.log(prodList[i]);
// }


// You're organizing a party and want to keep track of the guest list. Create an array called
// "guestList" and add the names of at least five guests. Then, write a program that checks if a
// given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
// otherwise, display "Sorry, you're not on the guest list."


let guestList =["Vaibhav","Jalaj","Ujwal","Gagan","trilokh","Som","daruBaj Pandit","Abhshek"];


function checkGuest(guest){

    if(guestList.includes(guest)){
        return `Welcome to the party, ${guest}  !`
    }
    else{

return  `Sorry, you're not on the guest list.`


    }

}


console.log(checkGuest("Jalaj"));


// Problem 5: JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for
// a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
// Display the information using console.log.
// Remember to encourage your students to experiment and think creatively while solving these
// problems. They can use the concepts you've taught them to come up with their own solutions.
// This will not only help solidify their understanding but also foster their problem-solving skills in
// JavaScript.



let weather =`{

"date":"26-04-2026",
"temperature":"57 C",
"conditions":"Extreme Hot",
"Humidity":"10%"



}`

console.log(typeof(weather));
console.log(weather);