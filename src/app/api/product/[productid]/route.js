import { ConnectDb } from "@/config/db";
import { NextResponse } from "next/server";
import product from "@/models/product";

export const dynamic = "force-dynamic";


export const GET=async(req,{params})=>{
    try {
        const param = params;
        ConnectDb();
        const products = await product.findById(param.productid);
        if (!products) {
            return new NextResponse(JSON.stringify({message: "product not found"}),{status:400})
        }
        return NextResponse.json(products, {status:200})
    } catch (error) {
        return new NextResponse("Internal server error" ,{status:500} )
    }
}



export const DELETE=async(req,{params})=>{
    try {
        const param = params;
        ConnectDb();
        const products = await product.findById(param.productid);
        if (!products) {
            return new NextResponse( "product not found" ,{status:400})
        }
         await product.findByIdAndDelete(param.productid);
         return NextResponse.json({message:"product deleted"}, {status:200})
    } catch (error) {
        return new NextResponse( "Internal server error" , {status:500} )
        }

}

export const PUT=async(req,{params})=>{
    try {
        const param = params;
        ConnectDb();
        const { product_name, product_price, product_image, product_detail,category,Stock,brand,rating} = await req.json();
        const products = await product.findById(param.productid);
        if (!products) {
            return new NextResponse(JSON.stringify({message: "product not found"}),{status:400})
        }

        const updateProduct = await product.findByIdAndUpdate(param.productid, {
            product_name,
            product_price,
            brand,
            rating,
            product_image,
            product_detail,
            Stock,
            category
        })
        await updateProduct.save()
        
        return NextResponse.json(updateProduct,{status:200, message:"product updated"})
    } catch (error) {
        return new NextResponse( "Internal server error", {status:500})
    }
}

