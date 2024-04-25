import mongoose from "mongoose";

export const ConnectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
    }
}