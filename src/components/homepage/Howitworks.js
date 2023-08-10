import {React, useEffect} from "react";


export default function Howitworks() {
   
  return (
    <div date-aos="fade-up" className="w-[100%] flex py-10 bg-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div className="w-[50%] p-1 gap-1 flex justify-center items-center flex-col">
        <div className=" rounded-lg sm:min-w-[350px] p-1 flex justify-center items-center text-texting font-extrabold text-3xl underline cursor-pointer">
          How It Works
        </div>
        <div className=" rounded-lg shadow-xl shadow-bgprimary sm:w-[350px] p-5 text-texting text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti explicabo magni quidem? Nisi ipsum, magnam odio odit vitae, nihil fugit culpa explicabo eligendi libero vero labore eius nesciunt voluptatem.
        </div>
      </div>

      <div className="w-[50%] flex flex-col">
        <div className="flex justify-center items-center ">
        <img className="w-[60%] h-[80%]" src="images/HOW IT WORKS.png" alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
