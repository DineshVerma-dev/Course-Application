import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    
    firstname :{
       type : String,
       required :true,
    },
    lastname :{
        type:String,
    },
    email : {
        type :String,
        required :true,
        unique: true
    },
    password :{
        type :String,
        required :true, 
    }
})

const AdminModel = mongoose.model("AdminModel",AdminSchema)

export { AdminModel }