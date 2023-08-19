import React from "react";


export default function Howitworks1() {

  return (
    <div className="w-[100%] flex flex-col py-5 md:flex-row-reverse justify-center items-center text-center my-5 bg-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div data-aos="zoom-in-left" className="w-[30%] flex flex-col justify-center items-center">
        <div className="flex justify-start sm:justify-center items-center ">
          <img className="sm:w-[90%] h-[170%] sm:h-[90%] " src="images/BLOCKCHAIN1.png" alt="" />
        </div>
      </div>
      <div data-aos="zoom-in-up" className="w-[100%] p-1 gap-1 flex justify-center items-center flex-col">
        <div className="flex justify-center items-center text-texting font-extrabold text-3xl underline cursor-pointer">
          How It Works
        </div>
        <div className="sm:p-5 text-texting text-center">
          Join by signing up, purchasing a package, and waiting as 2 individuals join under you – one on your left, and one on your right. Once they're in, you'll receive 50% + 50% from their investment, fully recovering yours. After, their commissions come to you (and also you will get 75% from placement & 25% from Refferal of each upgrade in Upgrade income) Upgrade to unlock deeper levels, adding 2 more below each, growing your team and ongoing commissions till level 8.
        </div>
      </div>
    </div>
  );
}
