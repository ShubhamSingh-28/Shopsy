"use client"

import Link from 'next/link';
//import { useParams } from 'next/navigation'
import React from 'react'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsById } from '@/app/redux/productSlice';
export default function page({params}) {
    const {id} = params
    //console.log(id);

    const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsById({id}))
      .then((result) => {
        setData(result.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
//console.log(data);
  if (data.length < 0) {
    return(
      <>
      <div className="flex min-h-screen flex-col justify-center bg-gray-900 py-12 px-4">
  <div className="relative bg-white p-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg">
    <div className="m-2 max-w-sm animate-pulse">
      <div className="flex items-center justify-center h-48 w-full bg-gray-300 dark:bg-gray-700 sm:w-96">
        <svg className="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" aria-hidden="true"
          fill="currentColor" aria-label="Loading Icon">
          <path
            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <div className="h-8 w-48 mb-4 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 max-w-[360px] mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-6 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-6 max-w-[330px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-7 max-w-[50px] rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <div className="flex items-center">
      <svg className="h-16 w-16 mr-1 animate-pulse text-gray-200 dark:text-gray-700" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="User Icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
      </svg>
      <div className="flex flex-col gap-2 animate-pulse">
        <div className="h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 w-46 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  </div>
</div>
      </>

    )
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" width={60} height={60} src={data.product_image} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <Link href={"/cart"} className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </Link>
                    <Link href={'/'} className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Go to Shopphing Page</button>
                    </Link>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <h2 className=' font-bold text-xl'>{data.product_name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {data.category}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">$ {data.product_price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                    
                </div>
                <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Stock: {"  "}</span>
                        <span className="text-gray-600 dark:text-gray-300">{data.Stock}</span>
                    </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {data.product_detail
}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
