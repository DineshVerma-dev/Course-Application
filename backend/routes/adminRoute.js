import { Router} from "express";


const Router = Router();

Router.get("/admin",function(req,res)  {
    console.log("addmin router")
})

export default Router