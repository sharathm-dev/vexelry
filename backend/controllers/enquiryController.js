import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (
  req,
  res
)=>{

  try{

    const {
      name,
      email,
      phone,
      service,
      message
    } = req.body;

    if(
      !name ||
      !email ||
      !message
    ){

      return res.status(400).json({
        success:false,
        message:"Please fill required fields"
      });

    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      service,
      message
    });

    res.status(201).json({
      success:true,
      message:"Enquiry submitted successfully",
      enquiry
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

export const getEnquiries = async (
  req,
  res
)=>{

  try{

    const enquiries = await Enquiry.find()
    .sort({createdAt:-1});

    res.status(200).json({
      success:true,
      enquiries
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

export const deleteEnquiry = async (
  req,
  res
)=>{

  try{

    const enquiry = await Enquiry.findById(
      req.params.id
    );

    if(!enquiry){

      return res.status(404).json({
        success:false,
        message:"Enquiry not found"
      });

    }

    await enquiry.deleteOne();

    res.status(200).json({
      success:true,
      message:"Enquiry deleted"
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

export const updateEnquiryStatus = async (
  req,
  res
)=>{

  try{

    const enquiry = await Enquiry.findById(
      req.params.id
    );

    if(!enquiry){

      return res.status(404).json({
        success:false,
        message:"Enquiry not found"
      });

    }

    enquiry.status = req.body.status;

    await enquiry.save();

    res.status(200).json({
      success:true,
      message:"Status updated",
      enquiry
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};