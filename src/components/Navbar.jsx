import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlinePlusCircle,AiFillTag} from 'react-icons/ai'
import {BsFillPersonPlusFill} from 'react-icons/bs'

function Navbar() {
  
    
  return (
  <div className='grid grid-cols-3 h-12  content-around  justify-items-start items-start'>
   
   <div className='m-auto  md:mx-5'>
     <GiHamburgerMenu  className='m-1' size={20} color={'#ffffff'} />
    </div>
  
    <div className=' flex col-span-2 w-full md:w-4/5 sm:w-4/5  m-auto justify-end  '>
<AiOutlinePlusCircle className='m-1' size={20} color={'#ffffff'} /> 
<AiFillTag  className='m-1' size={20} color={'#ffffff'} />
<BsFillPersonPlusFill  className='m-1' size={20} color={'#ffffff'} />
<button className='text-white'> Dropdown</button>
    </div>


    </div>
  )
}

export default Navbar