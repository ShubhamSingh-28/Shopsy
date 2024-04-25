import { ConnectDb } from "@/config/db"
import adminAccountsModel from "../../../../models/admin";
import { NextResponse } from "next/server"
import { hash } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await ConnectDb();
        const { name, email, password } = await req.json();
        const isUserAlreadyExists = await adminAccountsModel.findOne({ email });

    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "User is already exists. Please try with different email.",
      });
    } else {
      const hashPassword = await hash(password, 12);

      const newlyCreatedUser = await adminAccountsModel.create({
        name,
        email,
        password: hashPassword,
        
      });

      if (newlyCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account created successfully.",
        });
      }
    }
  } catch (error) {
    console.log("Error while new user registration. Please try again");

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}