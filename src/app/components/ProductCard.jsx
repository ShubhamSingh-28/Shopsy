import Link from "next/link";


export default function ProductCard({ items }) {
  //console.log(items);
  if (!items || items.length === 0) {
    return (<div><div className="flex flex-col gap-4 w-52">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div></div>
    )
  }

  //console.log(items);

  return (
    <div>
      
        <div  className="w-80 bg-white shadow rounded-xl">
          <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${items?.[0].thumbnail})`}}>
          </div>
          <div className="p-4 flex flex-col items-center">
            <p className="text-gray-400 font-light text-xs text-center">{items?.[0].brand}</p>
            <h1 className="text-gray-800 text-center mt-1">{items?.[0].name}</h1>
            <p className="text-center text-gray-800 mt-1">rs{items?.[0].price}</p>
           
            <Link href={`/products/${items?.[0].id}`}>
              <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                Add to order
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

    </div>
  );
}
