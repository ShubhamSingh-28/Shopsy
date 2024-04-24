import mongoose from "mongoose";

export const ConnectDb = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://Auth:qwerty2801@next-auth.p0ecaww.mongodb.net/Ecomm`);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
    }
}