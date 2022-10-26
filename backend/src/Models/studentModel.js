const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    
    {
     fname:{
        type:String,
        trim:true
     },
     lname:{
        type:String,
        trim:true
     },
     email:{
        type:String,
        trim:true
     },
     password:{
        type:String,
        trim:true
     },
     isDeleted:{
        type:Boolean,
        default:false
     },
     deletedAt: {
        type: Date
  },

    },{timestamps:true}
)

module.exports  = new mongoose.model('Student',studentSchema) 