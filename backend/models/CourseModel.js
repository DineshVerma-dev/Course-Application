import mongoose, {  Schema } from "mongoose";

const CourseSchema = new Schema({
    title : {
        type :String,
        unique :true,
    },
    description: String,
    price : {
        type : Number,
        min : 50,
        max :100000
    },
    ImageUrl :String,
    creator: {
        type : Schema.Types.ObjectId,
        ref : "AdminModel",
    }
})

const CourseModel = mongoose.model("CourseModel",CourseSchema)

export {CourseModel}