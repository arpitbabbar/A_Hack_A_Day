const mongoose = require('mongoose');
const { Schema } = mongoose;

  const DetailsSchema = new Schema({
    number:{
        type:String,
        required:true,
        unique:true
    },
    pname:{
        type:String,
        required:true
    },
    page:{
        type:Number,
        required:true
    },
    hospital:{
        type:String,
        required:true
    },
    doctorName:{
        type:String,
        required:true
    },
    doctorAge:{
        type:Number,
        required:true
    },
    doctorContact:{
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