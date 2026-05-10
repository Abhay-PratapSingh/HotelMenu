const  mongoose = require('mongoose');


let menuSchema = new mongoose.Schema({


name : {

type:String,
required:true,


},


price :{


    type:Number,
    required:true,
},

is_drink:{

type:Boolean,
default:false,


},

taste :{

type:String,
enum :["sweet","sour","spicy"],
required:true,


}


})

let menuItems = mongoose.model('MenuItem',menuSchema);
module.exports =menuItems;