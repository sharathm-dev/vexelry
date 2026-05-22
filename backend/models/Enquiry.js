import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  phone:{
    type:String
  },

  service:{
    type:String
  },

  message:{
    type:String,
    required:true
  },

  status:{
    type:String,
    default:"Pending"
  }

},{
  timestamps:true
});

const Enquiry = mongoose.model(
  "Enquiry",
  enquirySchema
);

export default Enquiry;