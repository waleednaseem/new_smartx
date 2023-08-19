import React from "react";

export default function Wallets() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div className="rounded-lg  p-1 flex justify-center items-center text-texting font-extrabold text-3xl underline cursor-pointer">
        Wallets
      </div>
      <div data-aos="zoom-in-up" className="w-[100%] px-5  p-2 gap-1 flex justify-center items-center flex-col ">
        <div className=" rounded-lg sm:p-5 text-texting text-center">
          Discover seamless blockchain wallet management! Easily connect and interact with multiple wallets like Trust Wallet, Binance Wallet, and more, all in one place.Your gateway to efficient crypto management.
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-5 py-5 sm:px-0 px-1">
        <div className="flex flex-row justify-around ">
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20  cursor-pointer"
                src="images/WALLET2.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-texting cursor-pointer ">
              Trust Wallet
            </div>
          </div>
        </div>



        <div className="flex flex-row justify-around ">
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET3.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-texting cursor-pointer ">
              Binance Wallet
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
