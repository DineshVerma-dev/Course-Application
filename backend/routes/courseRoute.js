import { Router } from "express";

const router = Router();

router.get("/course/purchase",(req,res) => {
    res.send("hello developers");
})

router.get("/courses",(req,res) => {
    res.send("hello developers");
})


export default router