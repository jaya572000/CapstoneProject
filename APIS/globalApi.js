const exp = require('express')

const globalApp = exp.Router()


//immport user model
const Global = require('../models/global')

const expressAsyncHandler = require('express-async-handler')
const { json } = require('stream/consumers')




globalApp.use(exp.json())


//get recommendations
globalApp.get('/books', expressAsyncHandler(async (req, res) => {
    let recommendations = await Global.find().exec()
    res.send({ message: "recommendations data", payload: recommendations })
}))


//update recomendations
globalApp.put('/addrecommendations', expressAsyncHandler(async (req, res) => {
    let recommendations = req.body
    let result=await Global.find()
    let arr=result[0].recomendations
    let count=0
   for(let v of arr){
       if(v.bookTitle==recommendations.bookTitle){
          count++
          console.log(count);
       }
       else{
           count=count
       }
   }
   if(count==0){
    await Global.updateOne({ $push: { recomendations: recommendations } })
    res.send({ message: "recommendations added", payload: recommendations })
   }
   else{
       console.log("book alrdy existed");
   }
    
  
}))



module.exports = globalApp



