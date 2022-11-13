import React from "react";
import {VscRocket} from 'react-icons/vsc'


function Card2(props) {
  return (
    <div className=" shadow-xl grid  w-64 h-20 m-auto my-3 rounded-md bg-slate-100 content-center  border-l-4 border-indigo-500">
      <div className="mx-auto  w-4/5 flex justify-between ">
        <p> {props.orderName} </p>
        <p>{props.orderId}  </p>
      </div>
      <div className=" mx-auto my-2 w-4/5 flex justify-start">
      <VscRocket size={30} color={'#59C1BD'} />
      </div>
    </div>
  );
}

export default Card2;
