import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Chart from "./components/Chart";
import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlusCircle, AiFillTag } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState("false");

  const control = () => {
    console.log(show);
    setShow(!show);
  };

  return (
    <div className="bpo">
      <div
        className={
          show ? "grid grid-cols-5 m-auto " : "grid grid-cols-10 m-auto "
        }
      >
        <div className="col-span-1"></div>
        <div
          className={
            show
              ? "col-span-5 mx-2 md:col-span-4"
              : "col-span-10 mx-2 md:col-span-9"
          }
        >
          <div className="grid grid-cols-3 h-12  content-around  justify-items-start items-start">
            <div className="m-auto  md:mx-5">
              <GiHamburgerMenu
                onClick={control}
                className="m-1"
                size={20}
                color={"#ffffff"}
              />
            </div>

            <div className=" flex col-span-2 w-full md:w-4/5 sm:w-4/5  m-auto justify-end  ">
              <AiOutlinePlusCircle
                className="m-1"
                size={20}
                color={"#ffffff"}
              />
              <AiFillTag className="m-1" size={20} color={"#ffffff"} />
              <BsFillPersonPlusFill
                className="m-1"
                size={20}
                color={"#ffffff"}
              />
              <div className=" ">
                <select className=" p-1 rounded-xl text-gray-500 bg-white border shadow-sm">
                  <option>All Options</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          show
            ? " bg-transparent h-90vh grid grid-cols-5"
            : " bg-transparent h-90vh grid grid-cols-10"
        }
      >
        <div className=" h-full  w-full  ">
          <Sidebar display={show} />
        </div>

        <div
          className={
            show
              ? " col-span-5 md:col-span-4 h-full"
              : " col-span-10 md:col-span-9 h-full"
          }
        >
          <div className="grid grid-cols-1 h-auto md:h-2/6  m-auto justify-center content-center xl:grid-cols-4  md:grid-cols-2 md:right-0  sm:grid-cols-2">
            <Card1 order="Pending Order" id="90" />
            <Card1 order="Processing Order" id="99" />
            <Card1 order="Ready To Delevered" id="263" />
            <Card1 order="Delevered Order" id="373" />
          </div>

          <div className="grid w-11/12 h-auto md:h-4/6 m-auto grid-cols-1 md:gap-5 md:grid-cols-4  ">
            <div className=" col-span-3 h-auto bg-white rounded-lg">
              <div>
                <Navbar2 />
              </div>

              <div className="grid grid-cols-1  m-auto justify-center xl:grid-cols-3  lg:grid-cols-2 md:right-0  sm:grid-cols-2">
                <Card2 orderName="23455" orderId="abcd" />
                <Card2 orderName="12456" orderId="efgh" />
                <Card2 orderName="13457" orderId="ijkl" />
                <Card2 orderName="12358" orderId="mnop" />
              </div>
            </div>

            <div className=" col-span-1 h-auto md:h-11/12 bg-white rounded-lg">
              <Chart />
            </div>
          </div>
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
