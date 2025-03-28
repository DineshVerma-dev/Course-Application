import { Router } from "express";
import { CourseModel } from "../models/CourseModel.js";
const router = Router();

router.get("/course/purchase",(req,res) => {
    res.send("hello developers");
})

router.get("/courses",(req,res) => {
    res.send("hello developers");
})


export default router