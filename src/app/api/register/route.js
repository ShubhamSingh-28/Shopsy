
import { ConnectDb } from "@/config/db"
import adminAccounts from "@/models/admin"
import { hash } from "bcryptjs";

import { NextResponse } from "next/server"


export const POST= async(req)=>{
    try {
        await ConnectDb();
        const {name,email,password}= await req.json();
        const admin=await adminAccounts.findOne({email});
        if(admin){
            return NextResponse.json({status:404,success:false,message:"Admin already exists"})
        }
        const hashPassword = await hash(password, 10);
        const newAdmin=await adminAccounts.create({
            name,
            email,
            password:hashPassword
        })
        return NextResponse.json({success:true,message:"Admin created successfully"})
    } catch (error) {
        return NextResponse.json({status:500,success:false,message:error.message})
    }
}