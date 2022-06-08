const exp = require('express')

const userApp = exp.Router()

const bcryptjs = require('bcryptjs')

//immport user model
const User = require('../models/user')


let jwt = require('jsonwebtoken')

const expressAsyncHandler = require('express-async-handler')


userApp.use(exp.json())



//sign up
userApp.post('/createusers',expressAsyncHandler(async(req,res)=>{
    let userObjFromClient = req.body
 
    let userObjFromDb=await User.findOne({username:userObjFromClient.username})

    if(userObjFromDb!==null){
        res.send({message:"user already existed"})
    }
    else{
        let hashedPassword = await bcryptjs.hash(userObjFromClient.password,5)

        userObjFromClient.password=hashedPassword

         let userObj=new User({...userObjFromClient})
        let newUser = await userObj.save()

        //its not req to send payload client may use if its requiredn save method returns newly created user
        res.send({message:"user created"})
    }
}))


//login user
userApp.post("/login",expressAsyncHandler(async(req,res)=>{
    let userCredObj =req.body

    let userFromDb = await User.findOne({username:userCredObj.username}) 

    if(userFromDb==null){
        res.send({message:"invalid user"})
    }
    //if user found compare passwords
    else{
        let status = await bcryptjs.compare(userCredObj.password,userFromDb.password)
        //if password wrong
        if(status==false){
            res.send({message:"invalid password"})
        }
        //if password correct
        else{
            let signedToken = await jwt.sign({username:userFromDb.username},process.env.SECRET_KEY,{expiresIn:5000})
            
            res.status(200).send({message:"login success",token:signedToken,user:userFromDb})
        }
    }
}))




















//error handling
userApp.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err.message})
})
//export userAPP
module.exports = userApp