import { ConnectDb } from "@/config/db"
import product from "@/models/product";
import { NextResponse } from "next/server"


export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    
    await ConnectDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
   // console.log(id);
    const getData = await product.find({category:id});
   // console.log(getData);
    if (getData.length > 0) {
      return NextResponse.json({
        success: true,
        data: getData,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Products found !",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}