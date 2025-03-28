import { Router} from "express";
import { AdminModel } from "../models/AdminModel.js";

const router = Router();

router.get("/admin",function(req,res)  {
    console.log("addmin router")
})

export default router