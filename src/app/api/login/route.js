
import { ConnectDb } from "@/config/db"
import adminAccounts from "@/models/admin"
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server"


//const jwtSecret = "dufijgvlbljfljui";

export const POST= async(req)=>{
    try {
        await ConnectDb();
        const {email,password}=await req.json();
        const admin=await adminAccounts.findOne({email});
        console.log(admin.password);
        if (!admin) {
            return NextResponse.json({status:404,success:false,message:"Admin not found"})
        }
        if ( !admin.password) {
            return NextResponse.json ( { status: 500, success: false, message: "Invalid admin data" });
          }
          const isMatch = await compare(password, admin.password);
        if (!isMatch) {
            return NextResponse.json({success:false,message:"Invalid credentials"})
        }
        const token=jwt.sign({id:admin._id,email:admin?.email}, "default_secret_key", { expiresIn: '1h' });

        const finalData = {
            token,
            user:{
                email:admin.email,
                name:admin.name,
                id:admin._id
            }
        };
        return  NextResponse.json({ success:true, message:"Admin login successfully", finalData })
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}