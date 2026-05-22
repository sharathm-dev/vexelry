import bcrypt from "bcryptjs";

import Admin from "../models/Admin.js";

import generateToken from "../utils/generateToken.js";

export const registerAdmin = async (
  req,
  res
)=>{

  try{

    const {
      name,
      email,
      password
    } = req.body;

    const adminExists = await Admin.findOne({
      email
    });

    if(adminExists){

      return res.status(400).json({
        success:false,
        message:"Admin already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password,10);

    const admin = await Admin.create({
      name,
      email,
      password:hashedPassword
    });

    res.status(201).json({
      success:true,
      token:generateToken(admin._id)
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

export const loginAdmin = async (
  req,
  res
)=>{

  try{

    const {
      email,
      password
    } = req.body;

    const admin = await Admin.findOne({
      email
    });

    if(
      admin &&
      await bcrypt.compare(
        password,
        admin.password
      )
    ){

      res.status(200).json({
        success:true,
        token:generateToken(admin._id)
      });

    }else{

      res.status(401).json({
        success:false,
        message:"Invalid credentials"
      });

    }

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};