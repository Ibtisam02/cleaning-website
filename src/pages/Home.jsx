import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottons from '../components/Bottons'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <Header/>
        <div className='transition-all ease-in duration-1000 dark:bg-black dark:text-white h-screen w-screen px-5 flex justify-between overflow-hidden' >
          <div className='text-center flex flex-col items-center justify-evenly'>
            <h2 className='text-8xl font-bold lg:text-7xl md:text-5xl sm:text-4xl xsm:text-2xl'>give your house the look it deserves</h2>
            <p className='text-xl'>Looking for professional and reliable cleaning services? Proudly Serving Professional Cleaning Services in Central Pennsylvania and Surrounding areas. We now have a location in Central Pennsylvania! </p>
            <Link to={"/contact"}><Bottons  text={"Get In Touch With Us"} color={"#dd672a"}/></Link>
          </div>
          
            <img className='scale-125 sm:scale-75 xsm:hidden sm:block' height='100%' src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710758044/cleaning%20website%20donot%20delete/gvflyii0otlp0bq0cge8.png" alt="img" />
           
          
        </div>

        <div className='h-fit bg-[#dd672a] w-screen py-6 flex flex-col items-center'>
            <div className='flex justify-center items-center flex-col'>
              <h1 className=' text-5xl font-bold text-white mb-4'>About Us</h1>
              <div className='flex flex-col justify-between items-center gap-y-6  w-3/4 text-white'>
              <p className='text-center'>Welcome to Central PA Scrub Squad, your trusted partner in residential and commercial cleaning services. With a commitment to excellence and a passion
 for cleanliness, we strive to exceed your expectations with every service we provide.</p>
              <p className='text-center'>Central Pennsylvania's most trusted residential and commercial cleaning company.</p>
              </div>
             </div>
             <Link to={"/about"}><button className={`bg-[#FFFFFF] my-3 w-52 py-4 px-5 text-md font-semibold hover:brightness-110 transition-all ease-in duration-200 rounded-sm`}>Learn More</button></Link>
        </div>
        
        <div className='w-screen h-fit px-6 py-16  dark:bg-black   '>
          <h1 className='text-5xl font-bold dark:text-white mb-4'>Just 3 Steps Away</h1>
          <div className='flex justify-center gap-x-5 items-center'>
          <div className=' flex xsm:flex-col lg:flex-row justify-center items-center w-4/6 my-6 gap-y-14 gap-x-5 h-fit text-white '>
            <div className='bg-[rgb(221,103,42)] hover:scale-105 transition-transform duration-150 ease-in px-3 lg:w-[400px] lg:h-[400px] xsm:w-[300px] xsm:h-[300px] rounded-tr-[30%] rounded-bl-[30%] flex justify-center items-center flex-col'>
              <h1 className='text-center xsm:text-5xl xl:text-5xl lg:text-3xl font-bold text-white mb-4 '>Step 1</h1>
              <h2 className='text-center xsm:text-xl xl:text-xl lg:text-md font-semibold'>GET AN INSTANT QUOTE</h2>
              <p className='text-center py-3'>We don't like to hang around and keep people waiting, we understand how incredibly frustrating it is when companies take several days to get back with a quote. With PA Scrub Squad House Cleaning, you can get an instant quote for any of our services.</p>
            </div>
            <div className='bg-[#dd672a] hover:scale-105 transition-transform duration-150 ease-in px-3 lg:w-[400px] lg:h-[400px] xsm:w-[300px] xsm:h-[300px] rounded-tr-[30%] rounded-bl-[30%] flex justify-center items-center flex-col'>
              <h1 className='text-center xsm:text-5xl xl:text-5xl lg:text-3xl font-bold text-white mb-4 '>Step 2</h1>
              <h2 className='text-center xsm:text-xl xl:text-xl lg:text-md font-semibold'>SET YOUR SCHEDULE</h2>
              <p className='text-center py-3'>At PA Scrub Squad , we'll always work around your schedule to ensure the whole process is as easy-going and convenient for you as possible. Give us a call and our friendly team will be able to set up a one-time cleaning or routine schedule that's best for you.</p>
            </div>
            <div className='bg-[#dd672a] hover:scale-105 transition-transform duration-150 ease-in px-3 lg:w-[400px] lg:h-[400px] xsm:w-[300px] xsm:h-[300px] rounded-tr-[30%] rounded-bl-[30%] flex justify-center items-center flex-col'>
              <h1 className='text-center xsm:text-5xl xl:text-5xl lg:text-3xl font-bold text-white mb-4 '>Step 3</h1>
              <h2 className='text-center xsm:text-xl xl:text-xl lg:text-md font-semibold'>Enjoy A Clean Home</h2>
              <p className='text-center py-3'>With our professional and thorough house cleaning services, you can enjoy a clean home every day without the worry or stress of having to find the time to do the work yourself. Relax, have more time for yourself and your family, and say goodbye to long cleaning lists.</p>
            </div>
          </div>
          <div className='bg-[#dd672a] h-[300px]  w-[300px] overflow-hidden xsm:hidden lg:block rounded-full'>
            <img className='relative top-[10%] scale-150'  src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710859922/cleaning%20website%20donot%20delete/eppmvobk453scpbfz2pr.png" alt="" />
          </div>
          </div>
          <Link to={"/contact"}><button className={`bg-[#dd672a] my-3  py-4 px-5 text-md font-semibold text-white w-fit hover:brightness-110 transition-all ease-in duration-200 rounded-sm `}>GET AN INSTANT QUOTE</button></Link>
        </div>

        <div className='bg-[#dd672a] h-fit w-screen py-7 px-6'>
          <h1 className='sm:text-[50px] xsm:text-[25px] text-center text-white font-extrabold mb-16'>Why Choose Us?</h1>
          <div className='flex sm:flex-row xsm:flex-col justify-center items-center gap-24'>
            <div className='flex w-fit border-r-2 pr-3 flex-col justify-center items-center'>
              <h4 className='text-center text-white md:text-2xl sm:text-xl  font-semibold'>Licensed, Bonded & Insured</h4>
            </div>
            <div className='flex w-fit border-r-2 pr-3 flex-col justify-center items-center'>
              <h4 className='text-white text-center md:text-2xl sm:text-xl  font-semibold'>Trained & Skilled Staff</h4>
            </div>
            <div className='flex w-fit border-r-2 pr-3 flex-col justify-center items-center'>
              <h4 className='text-white text-center md:text-2xl sm:text-xl  font-semibold'>Our Priority is Customer Satisfaction</h4>
            </div>
            <div className='flex w-fit border-r-2 pr-3 flex-col justify-center items-center'>
              <h4 className='text-white text-center md:text-2xl sm:text-xl  font-semibold'>We match every deal!</h4>
            </div>
          </div>
        </div>
        <div className='h-fit w-screen flex flex-col items-center px-6 dark:text-white pb-6 dark:bg-black'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[50px] text-center  font-extrabold mb-10'>Our Services</h1>
            <p className='text-center w-2/3 mb-10'>Explore the array of exceptional cleaning services offered by PA Scrub Squad Cleaning Services. From residential to commercial spaces, our skilled team is dedicated to delivering excellence. We serve Central Pennsylvania and surrounding areas.</p>
          </div>
          <div className='flex xsm:flex-col sm:flex-row justify-center items-center gap-y-4 flex-wrap'>
            <div className='sm:w-1/2 xsm:w-full h-52  overflow-hidden bg-[url("https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710763334/cleaning%20website%20donot%20delete/vupnzocnwj8gvw01phcp.jpg")] bg-cover '>
              <p className='stroke-white relative top-5  text-2xl  left-5 text-left text-white  font-bold'>HOUSE CLEANING</p>
            </div>
            <div className='sm:w-1/2 xsm:w-full h-52 overflow-hidden bg-[url("https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710762104/cleaning%20website%20donot%20delete/uqhetbanxkzp1ksvojai.jpg")] bg-cover'>
              <p className='relative top-5  text-2xl left-5 text-left  text-white font-bold  '>Deep Cleaning</p>
            </div>
            <div  className='sm:w-1/2 xsm:w-full h-52 overflow-hidden bg-opacity-0 bg-[url("https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710846973/cleaning%20website%20donot%20delete/jmya9oipwxtnbfmvep45.jpg")] bg-cover'>
              <p  className='relative top-5 text-2xl left-5 text-left text-white font-bold  '>Commercial Cleaning</p>
            </div>
            <div className='sm:w-1/2 xsm:w-full h-52 overflow-hidden bg-[url("https://res.cloudinary.com/dj0k9z7tr/image/upload/v1710761777/cleaning%20website%20donot%20delete/mom0errbzhk4srpkd827.jpg")] bg-cover'>
              <p className='relative top-5 text-2xl left-5 text-left text-white sha font-bold  '>Move-In/ Move-Out Cleaning </p>
            </div>
          </div>
          <Link to={"/services"}><button className={`bg-[#dd672a] my-3 w-52 py-4 px-5 text-white text-md font-semibold hover:brightness-110 transition-all ease-in duration-200 rounded-sm`}>Learn More</button></Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Home