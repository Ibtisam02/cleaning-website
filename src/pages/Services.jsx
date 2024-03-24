import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Services() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return (
    <div className="overflow-hidden ">
      <Header />
      <div className="h-[40%] w-screen px-36 py-10 bg-[#dd672a] flex justify-around sm:justify-evenly gap-x-20 xsm:px-10 xsm:flex-col md:flex-row items-center text-white">
        <div className="w-1/2 flex flex-col justify-between items-center gap-y-10">
          <h1 className=" text-6xl lg:text-4xl md:text-3xl xsm:text-2xl font-bold">Services</h1>
          <h2 className="text-xl  text-center xl:text-xl xsm:text-sm text-yellow-200">
            Working hard to make your life easy.
          </h2>
        </div>
        <div className="md:w-1/2 xsm:w-full ">
          <p className="text-justify">
            Central PA Scrub Squad Cleaning Services is dedicated to providing
            high quality services to the Central Pennsylvania. Take a look below
            to find out what we specialize in, and get in touch with any
            additional questions or to learn more.
          </p>
        </div>
      </div>

      <div className="py-14 dark:bg-black w-screen transition-all ease-in duration-1000">
        <h1 className="md:text-6xl xsm:text-3xl font-bold dark:text-white text-center py-10">Specialized Cleaning Services</h1>
        <div className="transition-all ease-in duration-1000 dark:bg-black flex xsm:px-5  md:px-16  justify-evenly gap-x-16 gap-y-16 py-10 xsm:flex-wrap w-screen">
          <div className=" w-1/4  flex flex-col justify-center items-center ">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto scale-125"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932483/cleaning%20website%20donot%20delete/lhypjwjibrnzvfvckzue.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">Home cleaning</p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932483/cleaning%20website%20donot%20delete/osotaq5bguco7eqo8rqv.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">deep cleaning</p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932484/cleaning%20website%20donot%20delete/yuqgqhblvpkfcrbmjgto.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">
              commercial cleaning
            </p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932484/cleaning%20website%20donot%20delete/uz6gefvrptjnppgij3eu.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">
              move-in/move-out cleaning
            </p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932484/cleaning%20website%20donot%20delete/cpeximcbixjccmj13zwr.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">
              special requests available
            </p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710932484/cleaning%20website%20donot%20delete/nkedoa39boc2ckbz6owe.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">Wall washing</p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710939324/cleaning%20website%20donot%20delete/gttsymgnspqfevlhky80.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">
              Pressure washing
            </p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710939461/cleaning%20website%20donot%20delete/v3pxmj0t0jix7rzjgrli.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">
              Post-renovation cleaning
            </p>
          </div>
          <div className=" w-1/4 flex flex-col justify-center items-center">
            <div className="flex  rounded-full justify-start md:w-[200px] md:h-[200px] xsm:w-[150px] xsm:h-[150px] items-center bg-[#dd672a] overflow-hidden ">
              <img
                className="m-auto scale-150"
                src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710939570/cleaning%20website%20donot%20delete/tce0hxdgkcyuxqrzbkuw.png"
                alt=""
              />
            </div>
            <p className="w-full text-center font-semibold dark:text-white">Gutter cleaning</p>
          </div>
        </div>
      </div>


      <div  className="px-10 flex justify-center gap-y-24 gap-x-16 dark:bg-black items-center py-16 w-screen text-white xsm:flex-col md:flex-row ">
        <div  className="w-[600px] h-[500px] bg-[#dd672a] xsm:w-fit xsm:h-fit  sm:w-full md:w-[300px] md:h-[600px] lg:w-[500px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-3/6 2xl:h-[900px] flex flex-col justify-evenly px-10 rounded-md py-8 gap-y-6">
          <h1 className="text-4xl font-bold">Residential</h1>
          <ul className="list-disc text-md 2xl:text-xl">
            <li>Regular house cleaning (weekly, bi-weekly, monthly)</li>
            <li>Move-in/move-out cleaning (for standard move-ins/move-outs)</li>
            <li>Apartment/condominium cleaning</li>
            <li>Kitchen cleaning (including appliances)</li>
            <li>Bathroom cleaning (including tiles, grout, and fixtures)</li>
            <li>Dusting and polishing furniture</li>
            <li>Floor cleaning (sweeping, mopping, vacuuming)</li>
            <li>Organization and decluttering services</li>
            <li>Laundry and ironing</li>
          </ul>
          <a target="_blank" href="https://cal.com/rkoontz95/"><button className={`bg-white  w-fit py-4 px-5 text-black text-md font-semibold hover:brightness-110 transition-all ease-in duration-200 rounded-sm`}>Book A Meeting</button></a>
        </div>
        <div className=" xsm:h-[350px] xsm:w-[350px]  xsm:overflow-hidden lg:overflow-visible   md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px]      w-5/12 h-[500px] bg-[#dd672a] rounded-full  relative">
          <img id="img-con" className="object-cover z-10 h-full" src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710984073/cleaning%20website%20donot%20delete/xxjrgac3jz5wqgwbqnx7.jpg" alt="" />
          
          <div   className={`  absolute top-[10%] transition-all duration-1000 left-[12%] border-[7px] rounded-full border-solid dark:border-white border-black h-[50px] w-[50px] `}></div>
          <div  className=" ani absolute top-[25%] left-[5%] border-[5px] border-solid dark:border-white border-black h-[50px] w-[50px] "></div>
          <div  className=" ani absolute top-[10%] right-[5%] border-[7px] border-solid dark:border-white border-black h-[50px] w-[50px] rotate-45"></div>
          <div  className="absolute top-[25%] right-[5%] border-[5px] border-solid dark:border-white rounded-full border-black h-[50px] w-[50px] rotate-[60deg]"></div>
          <div  className="absolute top-[35%] right-[12%]  rounded-full bg-black dark:border-white h-[300px] w-[300px] z-[-2] rotate-[60deg]"></div>
          <div  className="ani absolute bottom-0 left-[5%] border-[20px] border-solid dark:border-white border-black h-[150px] w-[150px] "></div>
        </div>
      </div>
      <div  className="px-10 flex justify-center gap-y-24 gap-x-16 dark:bg-black items-center py-16 w-screen text-white xsm:flex-col-reverse md:flex-row ">
       
        <div className=" xsm:h-[350px] xsm:w-[350px]  xsm:overflow-hidden lg:overflow-visible   md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px]      w-5/12 h-[500px] bg-[#dd672a] rounded-full  relative">
          <img id="img-con" className="object-cover z-10 h-full" src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1711018428/cleaning%20website%20donot%20delete/fpcymzgow989oovxzzog.webp" alt="" />
          
          <div   className={`  absolute top-[10%] transition-all duration-1000 left-[12%] border-[7px] rounded-full border-solid dark:border-white border-black h-[50px] w-[50px] `}></div>
          <div  className=" ani absolute top-[25%] left-[5%] border-[5px] border-solid dark:border-white border-black h-[50px] w-[50px] "></div>
          <div  className=" ani absolute top-[10%] right-[5%] border-[7px] border-solid dark:border-white border-black h-[50px] w-[50px] rotate-45"></div>
          <div  className="absolute top-[25%] right-[5%] border-[5px] border-solid dark:border-white rounded-full border-black h-[50px] w-[50px] rotate-[60deg]"></div>
          <div  className="absolute top-[35%] right-[12%]  rounded-full bg-black dark:border-white h-[300px] w-[300px] z-[-2] rotate-[60deg]"></div>
          <div  className="ani absolute bottom-0 left-[5%] border-[20px] border-solid dark:border-white border-black h-[150px] w-[150px] "></div>
        </div>
        <div  className="w-[600px] h-[500px] bg-[#dd672a] xsm:w-fit xsm:h-fit  sm:w-full md:w-[300px] md:h-[600px] lg:w-[500px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-3/6 2xl:h-[900px] flex flex-col justify-evenly px-10 rounded-md py-8 gap-y-6">
          <h1 className="text-4xl font-bold">Commercial</h1>
          <ul className="list-disc text-md 2xl:text-xl">
            <li>Office cleaning</li>
            <li>Retail store cleaning</li>
            <li>Restaurant cleaning</li>
            <li>Hotel/motel cleaning</li>
            <li>School/educational facility cleaning</li>
            <li>Warehouse cleaning</li>
            <li>Gym/fitness center cleaning</li>
            <li>Bank cleaning</li>
            <li>Janitorial services</li>
            <li>Restroom sanitation and restocking</li>
            <li>Breakroom/kitchen cleaning</li>
            <li>Trash removal and recycling</li>
            <li>High-dust cleaning (vents, lights, ceilings)</li>
          </ul>
          <a target="_blank" href="https://cal.com/rkoontz95/"> <button className={`bg-white  w-fit py-4 px-5 text-black text-md font-semibold hover:brightness-110 transition-all ease-in duration-200 rounded-sm`}>Book A Meeting</button></a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Services;
