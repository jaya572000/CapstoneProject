const mongoose = require('mongoose')

//create schema

const favoriteSchema = new mongoose.Schema({
    userName:{type:String},
    property:{type:Array,required:[true,"property is required"]}
},{collection:'favorites'})

//create a model 
const favoriteModel = mongoose.model("favorite",favoriteSchema)

//export model
module.exports = favoriteModel