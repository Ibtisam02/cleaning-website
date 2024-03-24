import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='w-screen h-fit bg-[#dd672a] text-white flex xsm:flex-wrap  justify-center gap-10 px-6 py-7'>
      <div className='w-[28%] flex flex-col gap-y-5 xsm:hidden sm:flex'>
        <h3 className='lg:text-4xl text-center text-4xl font-bold xsm:text-2xl'>Our Company</h3>
        <p className='text-justify'>At Central PA Scrub Squad, we understand the importance of a clean and healthy environment, whether it's your home or your place of business. Our team of
 dedicated professionals is highly trained and equipped with the latest tools and techniques to deliver exceptional results every time.</p>
        <Link to={"/contact"} className='bg-white text-black lg:text-2xl md:text-xl text-center hover:bg-white transition-colors duration-300 ease-in hover:text-[#dd672a] py-3 dark:bg-black dark:text-white '>Get In Touch With Us</Link>
      </div>
      <div className='sm:w-[28%] xsm:w-[100%]'>
        <h3 className='text-2xl font-bold mb-6'>Our Office</h3>
        <p><p className='font-semibold text-xl'>Office:</p>449 n biesecker dr Thomasville PA 17364</p>
        
      </div>
      <div className='sm:w-[28%] xsm:w-[100%] text-center'>
        <div>
          <h3 className='text-2xl font-bold mb-6'>Operating Hours</h3>
          <p>Mon - Fri: 7:30 am - 6:30 pm</p>
          <p>​​Saturday: 9:00 am - 4:00 pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className='mt-6'>
          <div>
            <h4 className='text-xl font-semibold'>Request a Free Estimate:</h4>
            <p>717-456-0096</p>
            </div>
          <div>
            <h4 className='md:text-xl text-xl xsm:text-md font-semibold'>Email:</h4>
            <p>sales@pascrubsquad.com</p>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>Customer Service:</h4>
            <p>717-456-0096</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer