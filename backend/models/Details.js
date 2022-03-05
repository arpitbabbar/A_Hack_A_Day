const mongoose = require('mongoose');
const { Schema } = mongoose;

  const DetailsSchema = new Schema({
    number:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    hospital:{
        type:String,
        required:true
    },
    doctorName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

    
    
  });
  
const Details = mongoose.model('details', DetailsSchema);
module.exports = Details;