import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function About() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return (
    <div>
      <Header />
      <div className="h-fit flex flex-col">
        <div className="w-screen flex xsm:flex-col md:flex-row justify-center items-center bg-[#dd672a] md:px-6  lg:px-16 gap-10 text-justify h-fit py-7">
          <div className="md:w-1/3 xsm:w-full xsm:px-5 h-full flex flex-col gap-y-5">
            <h1 className="text-6xl lg:text-4xl md:text-3xl xsm:text-2xl font-bold text-white">
              About us
            </h1>
            <p className="text-yellow-300">
              Learn more about PA Scrub Squad Services, your trusted provider of
              high-quality cleaning services in Central Pennsylvania. Our experienced team is
              committed to delivering exceptional results with every cleaning
              project.
            </p>
            <p className="text-yellow-300">
            Central Pennsylvania's most trusted residential and commercial cleaning company
            </p>
          </div>
          <div className="md:w-1/3 xsm:w-full xsm:px-5 flex flex-col gap-y-6 h-full text-white">
            <p>
              At Central PA Scrub Squad, we understand the importance of a clean and healthy environment, whether it's your home or your place of business. Our team of dedicated professionals is highly trained and equipped with the latest tools and techniques to deliver exceptional results every time.
            </p>
            <p>
            For residential cleaning, we offer a comprehensive range of services tailored to meet your specific needs. From regular maintenance cleaning to deep 
cleaning projects, we handle it all with precision and care. We treat your home with the same level of attention to detail that we would our own, ensuring
 that every corner is left spotless and sanitized.
            </p>
            <p>
            For commercial clients, we know that maintaining a clean workspace is essential for productivity and professionalism. That's why we offer flexible cleaning
 schedules and customizable plans to fit your business requirements. Whether you need daily, weekly, or monthly cleaning services, we're here to keep your 
workspace looking its best.
            </p>
          </div>
        </div>
        <div className="h-[100vh] w-screen relative dark:bg-black">
          <div className="md:h-1/2 xsm:h-1/3 flex justify-center items-baseline  bg-[#dd672a]">
            <img
              src="https://res.cloudinary.com/dj0k9z7tr/image/upload/v1711026220/cleaning%20website%20donot%20delete/yvsuotaqh54nifrf4eez.png"
              alt=""
              
            />
          </div>
        
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
