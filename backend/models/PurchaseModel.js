import  { Schema } from "mongoose";

const PurchaseModel = new PurchaseSchema({
    user:{
        type : Schema.Types.ObjectId,
        ref : "UserModel",
    },
    course :{
        type: Schema.Types.ObjectId,
        ref : "CourseModel"
    }
})