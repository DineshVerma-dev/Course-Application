import { Router } from "express";
import { UserModel } from "../models/UserModel.js";
const router = Router();

router.post("/signUp",(req,res) => {
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