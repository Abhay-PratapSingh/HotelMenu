const  express =require('express');
const router = express.Router();

let  menu =require('../models/Menu')

const logrequest = (req,res,next)=>{

    console.log(`${new Date().toLocaleString()} request made to  :${req.originalUrl}`);
    next();
}

router.use(logrequest)

router.post('/', async(req,res)=>{

    try {
        
        let  data= req.body;
        let  newMenu =  new menu(data);
        let  savedData = await newMenu.save();
        res.status(200).send(savedData)
        console.log("!data  saved Successfully !!")

    } catch (err) {
        console.log("while saving changes facing issue right now");
        console.log('erros is !!'+err);

        res.status(500).json({error:err.message})
        
    }


})



router.get('/',async(req,res)=>{

try {
    let fetchedmenu =  await menu.find();
    res.status(200).send(fetchedmenu);
    console.log("!data fetched Successfully !!");
    
} catch (err) {

res.status(500).send({error :err.message});
console.log("!faced error in data fetching")

    
}



})



router.get('/:Menutaste',async(req,res)=>{

try {
 
let  gettaste = req.params.Menutaste;


let  respnose = await menu.find({taste:gettaste});

res.status(200).send(respnose);
console.log("data fetched successfully !!")

    
} catch (err) {

res.status(500).send({error : err.message});
console.log("error Accured Here !!")

}
})

router.put('/:id',async(req,res)=>{

try {
    

    let menuId=req.params.id;
    let updateData =req.body;
    let savedData=  await menu.findByIdAndUpdate(menuId,updateData,{
        new :true,
        runValidators:true,

    });

    if(!savedData){
       
         return res.status(404).send("Menu id not matching")

    }

     res.status(200).send(savedData);


} catch (error) {
    
    res.status(500).send({error:error.message})
}

})






router.delete(
    "/:id",async(req,res)=>{

    try {
        
let menuId = req.params.id;
let deletedData =await  menu.findByIdAndDelete(menuId) ;

if(!deletedData){

    console.log("Menu is not found for  deletion");

  return  res.status(404).send("Menu not found");


}

res.status(200).send(deletedData)


    } catch (err) {

        
console.log("facing error while deleting  Menu");
res.status(500).send({error: err.message});



    }




})






















module.exports= router;