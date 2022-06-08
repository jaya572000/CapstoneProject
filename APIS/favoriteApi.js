const exp = require('express')

const favoriteApp = exp.Router()

//import appartment model
const Favorite = require('../models/favorite')

favoriteApp.use(exp.json())

//import error handler
const expressAsyncHandler = require('express-async-handler')



//add to favorites
favoriteApp.post("/:username/addfavorites",expressAsyncHandler(async(req,res)=>{

      if(req.params.username=="nouser"){
        res.send({message:"user not existed.. login to access cart"})
      }
      else{
        let username=req.params.username
        // console.log("req.body",req.body)
        let favadd=req.body
        let existedpost=await Favorite.findOne({userName:req.params.username}).exec()

        if(existedpost==null){
          favObj=new Favorite({...favadd})
          // cartObj.username=username  
          await favObj.save()
          res.send({message:"added to cart"})
        }
        else{
          let v = req.body.property
          let required = existedpost.property
         
         
         let arr = []
         for(let x of required){
             if(JSON.stringify(x)==JSON.stringify(v)){
                  arr.push(x)
             }
         }
    
         if(arr.length>0){
             res.send({message:"add already existed in cart"})
         }
         else{
              required.push(v)
              await Favorite.updateOne({userName:username},{$set:{property:required}})
              res.send({message:"next add is added to cart",payload:existedpost})
         }
        }
      }
  }))



//get 
  favoriteApp.get("/:username/viewfavorites",expressAsyncHandler(async(req,res)=>{
    let data=await Favorite.findOne({userName:req.params.username}).exec()
    res.send({message:"my favorites",payload:data})
  }))








//error handling
favoriteApp.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})

//export appartment app
module.exports = favoriteApp