import React from "react";

export default function Howitworks3() {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col-reverse md:flex-row p-5 bg-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div
        data-aos="zoom-in-up"
        className="w-[100%] p-1 gap-1 flex justify-center items-center flex-col sm:px-[10%]"
      >
        <div className="flex justify-center items-center text-texting font-extrabold text-3xl underline cursor-pointer">
          Decentralized
        </div>
        <div className="text-texting text-center">
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
            className="sm:w-[90%] h-[170%] sm:h-[90%] "
            src="images/WALLETBLOCKCHAIN.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
