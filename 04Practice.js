// Question 1: Difference Between MongoDB Server & Node.js Server

// Answer: The MongoDB server is responsible for storing and managing data in the MongoDB database. It
// handles data storage, retrieval, and manipulation operations. On the other hand, a Node.js server is a runtime
// environment that executes JavaScript code. It handles incoming requests from clients, processes them, and
// can interact with databases like MongoDB to retrieve or update data. You would use a MongoDB server to
// store and manage data, while a Node.js server is used to handle application logic and serve client requests.



// Question 2: MongoDB Queries

// a) Write a MongoDB query to create a new document in a collection named "students" with fields "name,"
// "age," and "grade."

// test> use student
// student> db.student.insertOne( { name:"Abhay",age:20,"Grade":'A'})


// b) Write a MongoDB query to update the "age" field of a document in the "employees" collection with the name
// "John" to 30.


//  student> db.student.updateOne( 


//     {

//           name :"Abhay"
//     },
//     {

//         $set ;{ age :29}

//     }



//  )




// Show all documents in collection
// db.student.find()

// c) Write a MongoDB query to delete a document from the "products" collection with the name "Product A."

// use Product
// db.Product.insertOne({"Product":"C"})
// Product> db.Product.deleteOne({"Product":"A"})




// d) Write a MongoDB query to retrieve all documents from the "orders" collection where the total amount is greater than $100

// Product> db.Product.updateOne({Product:"C"},{$set:{ amount :900}})
// Product> db.Product.deleteOne({ amount : {$gt :1000}})