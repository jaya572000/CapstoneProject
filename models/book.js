const mongoose = require('mongoose')


//create UserSchema
const bookSchema = new mongoose.Schema({
    authorName:{type:String},
    bookTitle:{type:String},
    imgUrl:{type:String},
    description:{type:String},
    language:{type:String},
    genre:{type:String}
},{collection:'bookscollection'}) 


//create user model ,it will create a new user collection if u dont mention the existed collection during schema creation by adding s to user
const bookModel = mongoose.model("ict",bookSchema)

//export model
module.exports = bookModel