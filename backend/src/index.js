const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const route= require("./Routes/route")
const app = express()


app.use(cors())
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://pareshnaik:W536yetBeRCk0yL8@cluster0.m9yz9.mongodb.net/student",{
    useNewUrlParser:true
})
  .then(()=>console.log("mongoDB is connected"))
  .catch(err=>console.log(err))
     
app.use('/',route)

app.listen(process.env.PORT || 4000,function(){
    console.log("Express app running on port " + (process.env.PORT || 4000))
})
