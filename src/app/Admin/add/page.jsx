"use client"
import axios from "axios";
import { useState } from "react";


function Add() {

  const[productData, setProductData] = useState({
    product_name:'',
    product_price: '',
    product_image: '',
    product_detail:'',
    category:'',
    Stock:' ',
    brand:'',
    rating:''
      })
      const handleChange  = (e) =>{
        const { name, value} = e.target;
        setProductData((prevValue) => ({...prevValue, [name]:value}))
      }
     // let router = useRouter();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.post('/api/product',productData)
           const data =response.data;
           console.log(data);
           if (data.success) {
            alert("producct created")
           }
           // Reset the form after successful registration
          
        } catch (error) {
           console.error(error);
        }
        setProductData({
            product_name:'',
            product_price: '',
            product_image: '',
            product_detail:'',
            category:'',
            Stock:' ',
            brand:'',
            rating:''
       });
     };
     
    
    
    
      return (
     <div className=" bg-slate-500 h-screen text-center md:py-10 flex justify-center  ">
      <form onSubmit={handleSubmit} className=" md:w-[40%]  bg-white py-6 px-8 ">
        <div >
        <input type="text" name="product_name" value={productData.product_name} onChange={handleChange}  placeholder="ProductName" className=" bg-white rounded-full py-2 my-2 px-20 border-2 border-black" />
        </div>
        <div>
            <input type="text" name="product_price" value={productData.product_price} onChange={handleChange} placeholder="Product Prize" className=" bg-white rounded-full my-2 py-2 px-20 border-2 border-black" />
        </div>
        <div>
        <input type="text" name="product_image" value={productData.product_image} onChange={handleChange} placeholder="Product ImageUrl" className="rounded-full py-2 px-20 my-2 border-2 border-black bg-white" />
        </div>
        <div>
        <input type="text" name="product_detail" value={productData.product_detail} onChange={handleChange} placeholder="Product Detail" className="rounded-full py-2 px-20 my-2 border-2 border-black bg-white" />
        </div>
        <div>
        <input type="text" name="category" value={productData.category} onChange={handleChange} placeholder=" Product Category" className=" rounded-full py-2 px-20 border-2 my-2 border-black bg-white" />
        </div>
        <div>
        <input type="text" name="brand" value={productData.brand} onChange={handleChange} placeholder="Product Brand" className=" rounded-full py-2 px-20 border-2 my-2 border-black bg-white" />
        </div>
       <div>
        <input type="text" name="Stock" value={productData.Stock} onChange={handleChange} placeholder="Product Stock" className=" rounded-full py-2 px-20 border-2 my-2 border-black bg-white" />
       </div>
       <div>
        <input type="text" name="rating" value={productData.rating} onChange={handleChange} placeholder=" Product rating" className=" rounded-full py-2 px-20 border-2 my-2 border-black bg-white" />
       </div>
       <div className=" bg-blue-900 rounded-full py-2 ">

        <button  type="submit">Create product</button>
       </div>
      </form>
     </div>
    
  )
}

export default Add
