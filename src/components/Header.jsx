import React, { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import logo from "../assets/logo.png";
import { IoIosSunny } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  let { black, orange, white, state,setState } = useContext(MyContext);
  let [check,setCheck]=useState(false)
  let toggle=()=>{
    setCheck(prv=>!prv)
  }
  let toggleTheme=()=>{
    setState((prv)=>!prv)
  }
  useEffect(()=>{
    if (state) {
        document.documentElement.classList.add("dark")
    }
    else{
        document.documentElement.classList.remove("dark")

    }
  },[state])
  return (
    <div className={`w-screen h-fit dark:text-white bg-white relative dark:bg-black `}>
      <div className="flex items-center justify-around ">
        <div className="w-fit h-fit my-3 bg-white">
        <Link to={"/"}><img src={logo} className="h-32 transition-all ease-in duration-1000" alt="Logo" /></Link>
        </div>
       <GiHamburgerMenu onClick={toggle} className={`md:hidden absolute top-5 left-7 text-4xl text-[#dd672a] transition-all ease-in duration-1000`}/>
       <ul className={`flex  ${check?"xsm:hidden":"xsm:flex-col"} transition-transform ease-in duration-1000  md:flex-row justify-center items-center gap-10 text-[25px]`}>
        <NavLink  to={'/'} className={({isActive})=>`${isActive?"text-[#dd672a]":null}`}>Home</NavLink>
        <NavLink to={'/services'} className={({isActive})=>`${isActive?"text-[#dd672a]":null}`}>Services</NavLink>
        <NavLink to={'/about'} className={({isActive})=>`${isActive?"text-[#dd672a]":null}`}>About</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`${isActive?"text-[#dd672a]":null}`}>Contact</NavLink>
       </ul>
        <div onClick={toggleTheme} className="transition ease-in delay-500   relative w-10 h-5 rounded-xl bg-[#fff2e9]">
          <div  className={`absolute flex justify-center items-center w-1/2 h-full ${state?"right-0 bg-white":"left-0 bg-black"}  rounded-full`}>{state?<IoIosSunny className="text-black" />:<IoIosSunny className="text-white"/>}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
