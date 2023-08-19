import React from "react";


export default function Info() {

  return (
    <div className="w-[100%] flex flex-col my-20 md:py-8 sm:my-0 justify-center items-center">

      <div className="flex flex-col items-center justify-center px-8 md:px-2">
        <p className="text-primary capitalize text-center flex justify-center items-center font-extrabold text-3xl">
          the world best networking project
        </p>
        <p className="text-primary font-extrabold text-md">
          make your future and earn million dollar
        </p>
      </div>
      <div data-aos="fade-right">
        <div className=" flex justify-center ">
          <img className="sm:w-[30%] w-[40%] sm:h-[30%] " src="images/World.png" alt="image" />
        </div>
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
