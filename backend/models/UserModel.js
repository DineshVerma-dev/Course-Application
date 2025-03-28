import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    
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

const UserModel = mongoose.model("UserModel",UserSchema)

export { UserModel }