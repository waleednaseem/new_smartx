import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Upgrades from "./Upgrades";
import API from "../../API/API";
import { useSelector } from "react-redux";
import { AiFillLock } from 'react-icons/ai';
import { parseEther } from "viem";
import abi from '../../Data/Abis.json'

import { useWalletClient, useAccount, usePublicClient, erc20ABI, usePrepareContractWrite, useContractWrite, useTransaction } from "wagmi";
import { getContract, waitForTransaction, fetchBalance, fetchToken, PrepareWriteContractConfig } from "wagmi/actions";

export default function Plans() {
  const selectorData = useSelector(x => x)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpen2(false);

  };

  const [onValue, setOnValue] = useState("");
  const [value, setValue] = useState("");
  const [pakages, setpakages] = useState([]);
  const [msg, setmsg] = useState("");
  const [refresh, setRefresh] = useState(1);
  const [Transaction_done, setTransaction_done] = useState("");

  useEffect(() => {
    API.fetchGet('/finduserpakage')
      .then(x => setpakages(x.data.packages))
      .catch(err => console.log(err))
    setIsModalOpen(false);
  }, [msg, refresh, selectorData.setModalmsg])
  // const [_amount, set_amount] = useState(value?.pkg_price);

  const pkg_name = ["Basic", "Standard", "Pro", "Royal", "Gold", "King"]
  const customStyles = {
    content: {
      width: '50%',
      height: '50%',
      margin: 'auto',
      borderRadius: "33px",
      backgroundColor: "#7a494933",
      // padding: "-20px",
    },
  };
  const PackagePurchase = (pkg) => {
    API.fetchPost({ pkg }, '/purchase_package')
      .then(x => {
        setmsg(x.data.msg), setIsModalOpen2(false), x.data.msg && API.fetchGet('/finduserpakage')
          .then(x => setpakages(x.data.packages))
          .catch(err => console.log(err))
        setIsModalOpen(false);
      })
  }
  const { data: walletClient } = useWalletClient();

  const Eth_value = value.pkg_price + "000000000000000000"

  const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    address: "0x60576DCD29C7b9Fc430e52CA4e96f81F0e4eAa22",
    abi: erc20ABI,
    walletClient,
    functionName: 'approve',
    args: [
      "0x437c691137bBf6393e967eD711a3C31726b49CC8", //spender contract address
      Eth_value
    ]
  })

  // const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: palcement, status } = useContractWrite({

  //   address: "0x437c691137bBf6393e967eD711a3C31726b49CC8",
  //   abi: abi,
  //   walletClient,
  //   functionName: 'palcement',
  //   args: [
  //     "0x6cE7bEB02ba0cCebaB4d50832e49b2116e31b4A8", //direct
  //     "0x914fed022fE426Fdb82C5D4F445eb4aAC3795c8A", //placement
  //     Eth_value
  //   ]

  // }
  // )

  // const { data:transac } = useTransaction({
  //   hash: 0x437c691137bBf6393e967eD711a3C31726b49CC8,
  //  })

  // console.log("====>", data_Purchase)
  const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: palcement, status } = useContractWrite({

    address: "0x437c691137bBf6393e967eD711a3C31726b49CC8",
    abi: abi,
    walletClient,
    functionName: 'palcement',
    args: [
      "0x6cE7bEB02ba0cCebaB4d50832e49b2116e31b4A8", //direct
      "0x914fed022fE426Fdb82C5D4F445eb4aAC3795c8A", //placement
      Eth_value
    ]
  })
  useEffect(()=>{
   console.log('Hitting!',data_Purchase)
   PackagePurchase(value.pkg_price)
  },[data_Purchase])
  const placements = async () => {
    
    await palcement();
  };

  const Approves = async () => {
    await Approve();
  };
  return (
    <div className="w-[100%]  cursor-pointer">
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className={" sm:w-[50%] w-[80%] h-[300px] fixed top-[5%] left-[10%] sm:left-[25%] rounded-2xl "}
      >
        <Upgrades
          onValue={onValue}
          value={value}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 my-2 px-2">
        {/* <button onClick={()=>setRefresh(refresh+1)}> data</button> */}
        {pakages.map((x, i) => (

          x.package == true ?
            <div key={i} onClick={() => { setOnValue(i), setValue(x) }} className={`my-2`}>

              <div
                // onClick={() => setIsModalOpen(true)}
                className="flex-col sm:rounded-t-lg rounded-t-2xl py-2 bg-primary text-texting flex justify-center items-center text-sm lg:text-base hover:text-white"
              >
                <p className="-my-1">Upgrades Your package</p>
              </div>
              <div
                onClick={() => setIsModalOpen(true)}
                className={`  bg-slate-50 rounded-b-3xl py-2  h-[75%] flex flex-col justify-center items-center`}
              >
                <p className="text-sm lg:text-lg">{pkg_name[i]}</p>
                <div className="w-[60%]">
                  <div className="text-sm lg:text-lg flex items-center justify-center">
                    {x.pkg_price}
                    <img
                      className="h-5 w-5 "
                      src="images/USDT.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            :
            <div key={i} onClick={() => { setIsModalOpen2(true), setValue(x) }} className={`my-2`}>
              <div
                // onClick={() => setIsModalOpen(true)}
                className="flex-col sm:rounded-t-lg rounded-t-2xl py-2 bg-primary text-texting flex justify-center items-center text-sm lg:text-base hover:text-white"
              >
                <p className="-my-1">Purchase package</p>
              </div>
              <div
                onClick={() => setIsModalOpen(true)}
                className={`  bg-slate-50 rounded-b-3xl py-2  h-[75%] flex flex-col justify-center items-center`}
              >
                <p className="text-sm text-primary font-extrabold lg:text-lg">{pkg_name[i]}</p>
                <div className="w-[60%]">
                  <div className="text-sm lg:text-lg flex items-center justify-center">
                    {x.pkg_price}
                    <img
                      className="h-5 w-5 "
                      src="images/USDT.png"
                      alt=""
                    />
                    <AiFillLock />
                  </div>
                </div>
              </div>
            </div>
        ))}
        <Modal
          isOpen={isModalOpen2}
          ariaHideApp={true}
          onRequestClose={closeModal}
          className={" md:w-[30%] md:h-[30%] w-[80%] h-[30%] fixed md:top-[35%] md:left-[35%] top-[30%] left-[10%] rounded-2xl bg-gray-100 border-2 border-primary"}
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div>Are You sure you want to purchase</div>
            <div>this package of {value.pkg_price} USDT</div>
            <div className="flex w-[70%] my-2 justify-evenly items-center">
              <button className="bg-green-800 text-white px-8 py-2 rounded-3xl" onClick={Approves}>Approves</button>
              <button
                onClick={placements}
                className="bg-green-800 text-white px-8 py-2 rounded-3xl">Purchase</button>
              {/* <button onClick={() => setIsModalOpen2(false)} className="bg-red-600 text-white px-8 py-2 rounded-3xl">no</button> */}
            </div>
          </div>
        </Modal>
      </div >
    </div >
  );
}
