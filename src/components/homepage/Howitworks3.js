import React from "react";

export default function Howitworks3() {
  return (
    <div className="w-[100%] flex py-10">
      <div
        data-aos="zoom-in-up"
        className="w-[70%] p-1 gap-1 flex justify-center items-center flex-col"
      >
        <div className=" rounded-lg sm:min-w-[350px] p-1 flex justify-center items-center text-primary font-extrabold text-3xl underline cursor-pointer">
          Decentralized
        </div>
        <div className=" rounded-lg shadow-xl shadow-bgprimary sm:w-[350px] p-5 text-primary text-justify">
          Welcome to our cutting-edge Networking platform, where the world of
          BlockChain Technology and Decentralized Governance converge. Join us
          to connect, collaborate, and stay ahead in the rapidly evolving
          landscape of BlockChain innovation. Together, we're shaping the future
          of Decentralized possibilities!
        </div>
      </div>

      <div
        data-aos="zoom-in-left"
        className="w-[30%] flex flex-col justify-center items-center"
      >
        <div className="flex justify-start sm:justify-center items-center ">
          <img
            className="w-[90%] h-[130%] sm:h-[90%] "
            src="images/WALLET1.png"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
