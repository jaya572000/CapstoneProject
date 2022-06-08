const mongoose = require('mongoose')


//create UserSchema
const userSchema = new mongoose.Schema({
    username:{type:String,required:[true,"username is required"]},
    password:{type:String,required:[true,"password required"]},
    email:{type:String,required:[true,"email is required"]},
    age:{type:Number,required:[true,"city is requird"]}
},{collection:'user'}) 


//create user model ,it will create a new user collection if u dont mention the existed collection during schema creation by adding s to user
const userModel = mongoose.model("user",userSchema)

//export model
module.exports = userModel