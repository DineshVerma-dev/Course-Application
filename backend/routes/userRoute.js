import { Router } from "express";
import { UserModel } from "../models/UserModel.js";

import z from "zod"
const router = Router();

const SignUpSchema = z.Schema({
   
})

router.post("/signUp",(req,res) => {
    const {name ,email} = req.body;
    
    res.json({
        message : "SignUp endpoints"
    })
})

router.post("/signUp",(req,res) => {
    res.json({
        message : "SignUp endpoints"
    })
})

router.get("/purchase",(req,res) => {
    res.send("hello developers");
})

export default router