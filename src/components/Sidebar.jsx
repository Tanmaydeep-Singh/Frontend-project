import React from "react";
import { MdLocalLaundryService } from "react-icons/md";
import {
  AiFillGift,
  AiOutlineMenuUnfold,
  AiFillBook,
  AiFillHome,
} from "react-icons/ai";
import { BsFillPersonFill, BsNutFill, BsFillTagFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
function Sidebar(props) {
  return (
    <div className="w-full h-full">
      <div
        className={
          props.display
            ? " hidden  sm:grid sm:h-90vh sm:w-5/6 sm:bg-white sm:rounded-lg sm:m-auto sm:my-2"
            : " hidden sm:grid sm:h-90vh sm:w-3/6 sm:bg-white sm:rounded-lg sm:m-auto sm:my-2"
        }
      >
        <div></div>

        <div className="flex  mx-2  text-xl my-0 text-center">
          <MdLocalLaundryService size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h1>Laundry</h1> : null}
        </div>

        <div className="flex  mx-2 rounded-md  shadow-xl  text-xl bg-blue-500 my-0 text-center align-middle content-center items-center">
          <AiFillHome size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Dashboard</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <BsFillTagFill size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Pos</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <AiFillGift size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Order</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <AiOutlineMenuUnfold size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Order Status Screen</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <AiFillBook size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Expense</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <BsFillPersonFill size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Services</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <ImStatsBars size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Reports</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <BsNutFill size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Tools</h3> : null}
        </div>

        <div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
          <BiLogOut size={30} color={'#59C1BD'} className=" mx-5" />
          {props.display ? <h3>Logout</h3> : null}
        </div>
      <div></div>
      </div>


      <div
        className={
          props.display
            ? "  hidden"
            : "  md:hidden grid h-screen w-screen bg-white rounded-lg m-auto my-2"
        }
      >

<div className="flex  mx-2  text-xl my-0 text-center">
  <MdLocalLaundryService size={30} color={'#59C1BD'} className=" mx-5" />
   <h1>Laundry</h1> 
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <AiFillHome size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Dashboard</h3> 
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <BsFillTagFill size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Pos</h3>
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <AiFillGift size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Order</h3>
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <AiOutlineMenuUnfold size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Order Status Screen</h3>
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <AiFillBook size={30} color={'#59C1BD'} className=" mx-5" />
  <h3>Expense</h3> 
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <BsFillPersonFill size={30} color={'#59C1BD'} className=" mx-5" />
  <h3>Services</h3>
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <ImStatsBars size={30} color={'#59C1BD'} className=" mx-5" />
  <h3>Reports</h3>
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <BsNutFill size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Tools</h3> 
</div>

<div className="flex  mx-2  text-xl my-0 text-center align-middle content-center items-center">
  <BiLogOut size={30} color={'#59C1BD'} className=" mx-5" />
   <h3>Logout</h3> 
</div>
<div></div>


      </div>
    </div>
  );
}

export default Sidebar;
