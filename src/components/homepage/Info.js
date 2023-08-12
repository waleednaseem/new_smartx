import React from "react";


export default function Info() {
   
  return (
    <div className="w-[100%] flex flex-col my-20 sm:my-0">


<div data-aos="fade-right">
        <div className=" flex justify-center ">
        <img className="sm:w-[30%] w-[40%] sm:h-[30%] " src="images/BLOCKCHAIN2.png" alt="" />
        </div>
        <div></div>
      </div>
      <div data-aos="fade-up" className="p-1 gap-1 flex justify-center items-center flex-col">
        <div className=" rounded-lg sm:min-w-[1500px] p-1 flex justify-center items-center text-primary font-extrabold text-3xl underline cursor-pointer">
          Smart X BlockChain
        </div>
        <div className=" sm:px-[30%] text-primary text-justify">
        Join our dynamic networking community: sign up, build your team,
upgrade packages, and unlock boundless earning potential.
Embrace a future where connections empower success!
        </div>
      </div>

      
    </div>
  );
}
