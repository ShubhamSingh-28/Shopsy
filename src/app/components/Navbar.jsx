"use client"
import { Search } from "lucide-react";

import { UserButton, SignedOut  } from "@clerk/nextjs";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

 
  return (
    <div className="navbar md:px-8  border-gray-200 cursor-pointer py-4 ">
  <div className=" navbar-start flex-1">
    <a className="btn btn-ghost text-3xl font-bold bg-orange-600 rounded-2xl">Shopsy</a>
  </div>
  <div className=" hidden lg:flex relative left-48 border-[1px] border-gray-600 rounded-full">
  <input className="rounded-l-full text-center  font-semibold bg-white border w-72 border-gray-200 py-3 " type="text"  placeholder="Search...." />
          <div className=" text-white py-[13px] px-6 bg-red-600 hover:opacity-50 rounded-r-full">
          <Search/>
          </div>
  </div>
  <div className="navbar-end gap-4 items-center">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cartTotalQuantity}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 text-white shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cartTotalQuantity} Items</span>
          <Link href={"/cart"} className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </Link>
        </div>
      </div>
    </div>
     <UserButton/>
    
     
  </div>
</div>

    
  )
}
