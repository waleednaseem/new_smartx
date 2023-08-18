import React from "react";

export default function Wallets() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-20">
      <div className="rounded-lg  p-1 flex justify-center items-center text-primary font-extrabold text-3xl underline cursor-pointer">
        Wallets
      </div>
      <div data-aos="zoom-in-up" className="w-[100%] px-5  p-2 gap-1 flex justify-center items-center flex-col ">
        <div className=" rounded-lg sm:p-5 text-primary text-justify">
          Discover seamless blockchain wallet management! Easily connect and interact with multiple wallets like Metamask, Trust Wallet, Binance Wallet, and more, all in one place. Your gateway to efficient crypto management.
        </div>
      </div>
      <div className="flex w-[100%] sm:flex-row flex-col gap-5 sm:gap-0 sm:px-0 px-1">
        <div className="flex flex-row justify-around sm:w-[25%]">
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET1.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer">
              MetaMask
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET2.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Trust Wallet
            </div>
          </div>
        </div>



        <div className="flex flex-row justify-around sm:w-[25%]">
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
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Binance Wallet
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET4.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Rainbow
            </div>
          </div>
        </div>



        <div className="flex flex-row justify-around sm:w-[25%]">
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET5.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              CoinBase
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET6.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              WalletConnect
            </div>
          </div>
        </div>



        <div className="flex flex-row justify-around sm:w-[25%]">
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET7.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Ledger Live
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col border border-primary justify-between rounded-lg shadow-primary shadow-md min-w-[135px] sm:min-w-fit sm:px-2"
          >
            <div className="flex justify-center items-center">
              <img
                className="w-20 h-20 cursor-pointer"
                src="images/WALLET8.png"
                alt=""
              />
            </div>
            <div className="font-bold flex justify-center items-center text-primary cursor-pointer ">
              Argent
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
