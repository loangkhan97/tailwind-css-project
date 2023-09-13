import React from 'react'

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-1 text-white text-center h-20'>
        <div className="col-1  bg-gray-700">This is Header</div> 
       
    </div>

    <div className=" grid grid-rows-3  gap-4 text-center ">
        <div className="row-span-6 row-start-1 row-end-6 bg-slate-500 w-60">Navbar</div>
    </div>

    </>
  );
}
