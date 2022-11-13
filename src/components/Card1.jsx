import React from 'react'
import {VscRocket} from 'react-icons/vsc'

function Card1(props) {
  return (
    <div className='shadow-xl grid grid-cols-3 w-64 h-24 m-auto my-3  rounded-lg bg-white  content-center '>
    
    <div className=' col-span-2 mx-auto justify-center '>
        <p > {props.order}</p>
        <h3>{props.id}</h3>
    </div>
    <div className=' grid content-center'>
        <VscRocket size={30} color={'#59C1BD'} />
    </div>

    </div>
  )
}

export default Card1