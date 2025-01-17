import { response } from "express";
import User from "../model/user.model.js";

import bcrypt from "bcryptjs";

  
// signup



export const signup= async(req,res)=>{

    try {
        const {fullname,email,password}=req.body;
        const user =await User.findOne({email});
          
        if(user){
            return res.status(400).json({message:"User Already Exists"});
        }

        const hashPassword = await bcrypt.hash(password,10);

        const createdUser =  new User({
            fullname,
            email,
            password: hashPassword,
        });

       await createdUser.save()
        res.status(201).json({message:"User Created Successfully"})


    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

        // login



export const login= async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        const user =await User.findOne({email});
          
        const isMatch =await bcrypt.compare(password,user.password);

        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Username or Password"});

        }else{
           res.status(200).json({
            message:"Login Successfully",
            user:{
             _id:user._id,
              fullname:user.fullname,
              email:user.email,
           }})
        }


            
    } catch (error) {
       console.log("Error : " +error.message);
        res.status(500).json({message:"Internal server error"});
    }
}