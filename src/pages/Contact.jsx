import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
function Contact() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])

 
  return (
    <div>
      <Header />
      <div className="bg-[#dd672a] flex flex-col gap-10 py-16 px-10">
      <div className="flex sm:flex-row gap-y-6 xsm:flex-col justify-around items-center  ">
        <h1 className="md:text-5xl text-white sm:text-4xl xsm:text-2xl font-bold text-center">Set A Meeting With Us</h1>
        <a target="_blank" href="https://cal.com/rkoontz95/"><button className="bg-white px-4 py-3 text-black rounded-md">Set Meeting Now</button></a>
      </div>
      <p className="text-white text-center">Experience the difference with Central PA Scrub Squad. Contact us today to schedule your cleaning service and discover why we're the preferred choice for residential and commercial cleaning in Central Pennsylvania.</p>
      </div>
      <div className=" w-screen flex flex-col gap-y-10 py-16 justify-center items-center px-10 dark:bg-black">
        <h2 className="md:text-5xl sm:text-4xl xsm:text-2xl  font-bold mb-4 dark:text-white text-center">GET AN INSTANT QUOTE</h2>
        <form  action="https://formspree.io/f/xzbnawdg" method="POST" className="space-y-4 w-3/4">
          <div>
            <label htmlFor="name" className="block mb-1 dark:text-white">
              Name: 
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 dark:text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 dark:text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#dd672a] text-white py-2 px-4 rounded-md hover:brightness-90 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div>
        <iframe className="w-[70vw] h-[70vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.0667036893105!2d-76.8596724!3d39.939897599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8f4ee102d1d29%3A0x5bb8a00f02d4b00d!2s449%20N%20Biesecker%20Rd%2C%20Thomasville%2C%20PA%2017364%2C%20USA!5e0!3m2!1sen!2s!4v1711090116913!5m2!1sen!2s"   loading="lazy" ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
