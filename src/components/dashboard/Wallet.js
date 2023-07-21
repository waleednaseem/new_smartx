import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import UpgradeFromWallet from "./UpgradeFromWallet";
import { useSelector } from "react-redux";
import API from "../../API/API";
import { GiTeamUpgrade } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
import { fetchBalance } from "wagmi/actions";
import { useWalletClient, useAccount } from "wagmi";

export default function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wallet, setWallet] = useState(0);
  const { data: walletClient } = useWalletClient();
  const { address, isConnected } = useAccount();
  const [balance,setBalance]=useState('null')
  const [Usdt,setUsdt]=useState('null')

  const data = useSelector((state) => state);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    API.fetchGet("/wallet")
      .then((response) => setWallet(response.data.payment))
      .catch((error) => console.log(error));
  }, []);

  const formatAccountBalance = (balance) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const tokens=async()=>{
    const balances= await fetchBalance({
       address
     })
    const usdt= await fetchBalance({
       address,
       token:'0x55d398326f99059fF775485246999027B3197955'
     })
    
     console.log(usdt)
     setBalance(balances.formatted)
     setUsdt(usdt.formatted)
   }

  return (
    <div className="flex flex-col justify-between min-w-[350px] w-[100%] min-h-[140px] rounded-2xl bg-primary">
      <div className="flex flex-col">
        <div className="flex justify-center ">
          <p className="MyFont sm:text-3xl text-xl text-texting hover:text-white hover:cursor-pointer">
            Smart-X-BlockChain
          </p>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[50%] flex flex-col">
          <div className="flex justify-center sm:text-2xl text-md text-texting hover:text-white hover:cursor-pointer -ml-10 sm:-ml-0 my-2">
            {/* <div>Wallet</div> */}
          <div onClick={tokens} className=""> click here to update token</div>
          </div>
            <div className="mx-2 text-texting items-center flex sm:justify-center my-2">
              <p className="min-w-[45px] sm:text-base text-xs cursor-pointer hover:text-white">BNB</p>
              <img className="h-5 w-5 mx-0.5 cursor-pointer" src="images/BNB.png" alt="" />
              <div className="text-texting sm:text-base text-xs font-bold italic mx-2 cursor-pointer hover:text-white">{balance}</div>
            </div>
            <div className="mx-2 text-texting flex sm:justify-center items-center">
              <p className="min-w-[45px] cursor-pointer sm:text-base text-xs hover:text-white">USDT</p>
              <img className="h-6 w-6 cursor-pointer" src="images/USDT.png" alt="" />
              <div className="text-texting sm:text-base text-xs font-bold italic mx-2 cursor-pointer hover:text-white">{Usdt}</div>
              
            </div>
          </div>



          <div className="w-[50%] flex flex-col">
          <div className="flex justify-center sm:text-2xl text-md text-texting hover:text-white hover:cursor-pointer ml-[38%] sm:ml-0 my-2 ">Team</div>
          
            <div className="flex justify-center items-center my-3 ml-5">
            <GiTeamUpgrade className="text-texting ml-[38%] sm:ml-0" size={25}/>
            <BsArrowRightShort className="text-texting " size={25}/>
            <p className="text-texting font-bold sm:text-base text-lg italic mx-2 cursor-pointer mt- hover:text-white">
              850
            </p>
            </div>
          
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row justify-between px-2">
        <div className="flex">
          <div className="my-2 text-texting uppercase font-bold italic hover:text-white cursor-pointer">
            {data && data.username}
          </div>
        </div>

        <div className="my-2 text-texting font-bold italic hover:text-white cursor-pointer">
          <div>Refferal ID: {data && data.refferalID}</div>
        </div>
        <div className="my-2 text-texting font-bold italic hover:text-white cursor-pointer">
          <div>Total Team: {data && data.refferalID}</div>
        </div>
      </div> */}

      {/* <div className="flex flex-row justify-between px-2">
        <div className="flex items-center text-texting font-bold hover:text-white cursor-pointer">
          Balance:
          <img className="h-8 w-8 mx-1" src="images/USDT.png" alt="" />
          <div className="text-3xl">
            {formatAccountBalance(wallet)}
          </div>
        </div>
      </div> */}
    </div>
  );
}
