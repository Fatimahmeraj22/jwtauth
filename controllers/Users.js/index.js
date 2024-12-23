import express, { application } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import {userModel} from "../config/controllers/users.js/index.js"




const router = express.Router();

// Register
router.post("/register",async(req,res)=> {
    try { 
        let userData = req.body
        await userModel.create(userData)
        res.status (200).json("User register successfully!!")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg :error})
    }
})

app.use("api/users",router); 

