import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://Dineshverma:0FExE4AqiiU7cXFt@cluster0.38iopxh.mongodb.net/courseMaking-app`);
        console.log(`\nMongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in connecting mongoDB URL" ,error)
    }
        
}

export default connectDB

