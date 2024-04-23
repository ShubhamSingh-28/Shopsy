/*"use client"
import {  useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
*/
import Cart from '@/app/components/Cart'
import React from 'react'

export default function page() {
  /*const router= useRouter()
  const{isSignedIn} =useSession()
  if (!isSignedIn) {
    router.replace("/sign-in")
  }
  */
  return (
    <div>
        <Cart/>
    </div>
  )
}
