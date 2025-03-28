import { model ,Schema } from "mongoose";

const Purchaseschema = new Schema({
    user:{
        type : Schema.Types.ObjectId,
        ref : "UserModel",
    },
    course :{
        type: Schema.Types.ObjectId,
        ref : "CourseModel"
    }
})

const PurchaseModel = model("PurchaseModel",Purchaseschema)
export default  PurchaseModel