const mongoose = require('mongoose')

//create schema

const globalSchema = new mongoose.Schema({
    recomendations:{type:Array}
},{collection:'recomendations'})

//create a model 
const globalModel = mongoose.model("recomendations",globalSchema)

//export model
module.exports = globalModel