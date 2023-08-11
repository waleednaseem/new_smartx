import React from "react";


export default function Howitworks1() {
   
  return (
    <div className="w-[100%] flex py-10 bg-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div data-aos="zoom-in-up" className="w-[70%] p-1 gap-1 flex justify-center items-center flex-col">
        <div className=" rounded-lg sm:min-w-[350px] p-1 flex justify-center items-center text-texting font-extrabold text-3xl underline cursor-pointer">
          How It Works
        </div>
        <div className=" rounded-lg shadow-xl shadow-bgprimary sm:w-[350px] p-5 text-texting text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti explicabo magni quidem? Nisi ipsum, magnam odio odit vitae, nihil fugit culpa explicabo eligendi libero vero labore eius nesciunt voluptatem.
        </div>
      </div>

      <div data-aos="zoom-in-left" className="w-[30%] flex flex-col justify-center items-center">
        <div className="flex justify-start sm:justify-center items-center ">
        <img className="w-[90%] h-[130%] sm:h-[90%] " src="images/BLOCKCHAIN1.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
