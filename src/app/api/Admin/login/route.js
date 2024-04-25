import { ConnectDb } from "@/config/db"
import adminAccountsModel from "../../../../models/admin";
import { NextResponse } from "next/server"
import { compare } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
      await ConnectDb();
      const {  email, password } = await req.json();
      const checkUser  = await adminAccountsModel.findOne({ email });
      console.log(checkUser);
        
        if (!checkUser) {
          return NextResponse.json({
            success: false,
            message: "Account not found with this email",
          });
        }
        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
          return NextResponse.json({
            success: false,
            message: "Incorrect password. Please try again !",
          });
        }
       
    
        const finalData = {
          user: {
            email: checkUser.email,
            name: checkUser.name,
            _id: checkUser._id,
          },
        };
    
        return NextResponse.json({
          token,
          success: true,
          message: "Login successfull!",
          finalData
        });
      } 
     catch (error) {
        console.log("Error while logging In. Please try again");
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong ! Please try again later",
        });
    }    
  }