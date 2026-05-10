let  express =require('express');
const bodyParser= require('body-parser');

let  db =require('./db');
let  menuRoutes =require('./routes/Menuroutes')

let app =express();
app.use(bodyParser.json());


app.use('/menu',menuRoutes)



app.listen(3000,()=>{

console.log("Server is active on Port 3000 !!");

})