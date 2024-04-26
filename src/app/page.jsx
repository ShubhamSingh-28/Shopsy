"use client"
/*
import {  useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "./redux/productSlice";
import ProductCard from "./components/ProductCard";

import { ArrowLeft, ArrowRight } from "lucide-react";
//import { fetchcatagory } from "./redux/categorySlice";

export default function Home() {
  const [data, setData] = useState([]);
 // const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts())
      .then((result) => {
        setData(result.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  

 
  if (data.length < 1) {
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
        <path fillRule="evenodd" clipRule="evenodd"
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
    
      <div className="">
        <Navbar />
        <Banner />
        <h2 className="px-20 py-6 text-3xl font-bold">All Products</h2>
        <div className="my-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-3 mx-8 lg:mx-24 gap-y-6">
            { data.slice(page * 12 -12, page*12).map((product, index) => (
            <ProductCard key={index} items={[product]} />
          ))  }
        </div>
        <div className="flex justify-center gap-5">
        {page <= 1 ? (
  <div  className="inline-flex items-center cursor-pointer border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
    <ArrowLeft />
    <span className="ml-1 font-bold text-lg">Back</span>
  </div>
):(<div  onClick={() => setPage(page - 1)} className="inline-flex items-center cursor-pointer border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
    <ArrowLeft />
    <span className="ml-1 font-bold text-lg">Back</span>
  </div>)}

          <div onClick={()=>setPage(page + 1)}  className="inline-flex cursor-pointer items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
            <span className="mr-1 font-bold text-lg">Next</span>
            <ArrowRight/>
          </div>
        </div>
        <Footer />
      </div>
    );
  
}

