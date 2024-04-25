import { ConnectDb } from "@/config/db"
import product from "@/models/product";
import { NextResponse } from "next/server"


export const GET=async(req)=>{
    try {
        ConnectDb();
        const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
        const getData = await product.find({product_name:query});
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
    } catch (error) {
        return new NextResponse("Internal server error" ,{status:500} )
    }
}