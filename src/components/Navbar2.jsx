import React from 'react'

function Navbar2() {
  return (
    <div className='grid grid-cols-3 h-12 content-around align-middle justify-items-center'>
   
     <div>
       <h1 className=' lg:text-3xl md:text-xl'>Today's Delivery</h1>
      </div>
    
      <div className=' flex col-span-2 w-full md:w-3/5 sm:w-4/5  m-auto justify-end  '>
            <input type="search" className="borded text-sm rounded-lg block w-full border  bg-white p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black mx-2" placeholder="search" />
     
     
            <select className=" p-1 rounded-xl text-gray-500 bg-white border shadow-sm">
                <option>All Options</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
      </div>

    </div>
  )
}

export default Navbar2





