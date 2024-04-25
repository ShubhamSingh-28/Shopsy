import { ConnectDb } from "@/config/db"
import product from "@/models/product";
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic";


export const POST =async(req)=>{
    try {
       await ConnectDb();
        const { product_name, product_price, product_image, product_detail,category, Stock} = await req.json();
        if (!product_image || !product_name || !product_price || !product_detail || !Stock ||!category) {
            return new NextResponse(
                "Please fill all the fields",
               { status:400
            })
        }

        const newProduct = await product.create({
            product_name,
            product_price,
            product_image,
            product_detail,
            category,
            Stock
        });
             await newProduct.save();
        return  NextResponse.json(
            newProduct,
            {
            status:200,
            message:"Product created successfully"
        })
    } catch (error) {
        return new NextResponse( "Internal server error", {status:500})
}
}
;
export const GET =async(req)=>{
    try {
        await ConnectDb();
        const products = await product.find().sort({createdAt:"desc"});
        return NextResponse.json(products, {
            status:200,
            message:"Products fetched successfully"
        })
    } catch (error) {
        return new NextResponse( "Internal server error", {status:500})
    }
}
