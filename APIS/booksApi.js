const exp = require('express')

const bookApp = exp.Router()


//immport user model
const Book = require('../models/book')

const expressAsyncHandler = require('express-async-handler')



bookApp.use(exp.json())


//get books
bookApp.get("/allbooks",expressAsyncHandler(async(req,res)=>{
    let result = await Book.find().exec()
    res.send({message:"all books",Books:result})
}))












//error handling
bookApp.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})
//export userAPP
module.exports = bookApp