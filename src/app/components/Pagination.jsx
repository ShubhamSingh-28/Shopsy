import Link from "next/link";
import { useState } from "react";


export default function Pagination() {
  const [page, setpage] = useState(1)
  const handleNext = () => {
    setpage(page + 1)
  }
  const handleBack = () => {
    setpage(page - 1)

  }
  //console.log(page);
  return (
    <div className="flex justify-center gap-5">
    <Link onClick={handleBack} href="/"
        className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
            </path>
        </svg>
        <span className="ml-1 font-bold text-lg">Back</span>
    </Link>
    <Link onClick={handleNext} href="#"
        className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
        <span className="mr-1 font-bold text-lg">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
            </path>
        </svg>
    </Link>
</div>
  )
}
