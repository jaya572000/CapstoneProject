const exp = require('express')
const app = exp()
const path=require("path")
require('dotenv').config()


//import global app
const globalApp=require('./APIS/globalApi')
app.use('/global',globalApp)

//import user api
const userApp = require("./APIS/userAPI")
app.use("/user",userApp)

//import favorie api
const favoriteApp = require("./APIS/favoriteApi")
app.use('/favorite',favoriteApp)

//import book
const bookApp = require("./APIS/booksApi")
app.use("/books",bookApp)

//import mongoose and create mongoose obj
const mongoose = require('mongoose')

//dburl
const dataBaseConnectionUrl = process.env.DATABASE_URL

app.use(exp.static(path.join(__dirname,'./dist/back')))

//connect to db 
mongoose.connect(dataBaseConnectionUrl)
    .then(()=>{console.log("data base connection suceess")})
    .catch(err=>{console.log("error",err)})








app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/back/index.html'))
    })

const PORT = process.env.PORT
app.listen(PORT,()=>{console.log(`server listening on ${PORT}`)})