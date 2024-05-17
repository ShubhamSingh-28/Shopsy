import Link from "next/link";


export default function Main() {

  return (
    <div className="flex justify-center items-center gap-3 my-8">
      <h1>
      Seller Dashboard
      </h1>
      <div className="flex justify-center gap-7 rounded-full">  
      <Link href={"/Admin/add"} className="rounded-full py-2 px-4 bg-blue-600">
      <button>Add Product</button>
      </Link>
      <Link href={""} className="rounded-full py-2 px-4 bg-red-700">
      <button> Delete Product</button>
      </Link>
      <Link href={""} className="rounded-full py-2 px-4 bg-green-600">
      <button>Update Product</button>
      </Link>
      </div>
      </div>
  )
}
