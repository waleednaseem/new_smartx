import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Upgrades from "./Upgrades";
import API from "../../API/API";
import { useSelector } from "react-redux";
import { AiFillLock } from 'react-icons/ai';
import { parseEther } from "viem";
import abi from '../../Data/Abis.json'
// import { useContractEvent } from 'wagmi'

import { useWalletClient, useAccount, usePublicClient, erc20ABI, usePrepareContractWrite, useContractEvent, useContractWrite, useTransaction, useWaitForTransaction } from "wagmi";
import { getContract, waitForTransaction, fetchBalance, fetchToken, PrepareWriteContractConfig } from "wagmi/actions";

export default function Plans() {
  const selectorData = useSelector(x => x)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [NextStep, setNextStep] = useState(0);
  const [NextStep_okay, setNextStep_okay] = useState(false);

  let START = false

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpen2(false);

  };
  // useEffect(() => {
  //   API.fetchPost({ pkg: value.pkg_price }, "/user_on_purchase")
  //     .then(x => console.log(x, '<== Purchase price'))
  // }, [isModalOpen2])



  const [onValue, setOnValue] = useState("");
  const [value, setValue] = useState("");
  const [pakages, setpakages] = useState([]);
  const [msg, setmsg] = useState("");
  const [refresh, setRefresh] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [Transaction_done, setTransaction_done] = useState("");
  const [PLACEMENT, setPLACEMENT] = useState("");
  const [REFFERAL, setREFFERAL] = useState("");
  const [BIGRefresh, setBIGRefresh] = useState(false);

  useEffect(() => {
    API.fetchGet('/finduserpakage')
      .then(x => setpakages(x.data.packages))
      .catch(err => console.log(err))
    setIsModalOpen(false);
  }, [msg, refresh, selectorData.setModalmsg])
  // const [_amount, set_amount] = useState(value?.pkg_price);

  const test = async (e) => {
    // e.preventDefault()
    console.log(value.pkg_price, 'hit purchase')
    await API.fetchPost({ pkg: value.pkg_price }, '/user_on_purchase')
      .then(x => (
        console.log(x, '<== Purchase price'),
        setPLACEMENT(x.data.placement),
        setREFFERAL(x.data.Direct_reff)
      ))
      .catch(x => console.log(x, '<== Purchase price'))
  }
  useEffect((e) => {
    test()
  }, [value.pkg_price])

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
  const PackagePurchase = () => {
    console.log("PackagePurchase", "<====")
    setLoading(true)
    API.fetchPost({ pkg: value.pkg_price }, '/purchase_package')
      .then(x => {
        console.log("/purchase_package", "<==API==")
        setmsg(x.data.msg), setIsModalOpen2(false), x.data.msg &&
          API.fetchGet('/finduserpakage')
            .then(x => setpakages(x.data.packages))
            .catch(err => console.log(err))
        setIsModalOpen(false);
      })
  }
  const { data: walletClient } = useWalletClient();

  // const Eth_value = value.pkg_price 
  const Eth_value = value.pkg_price + "000000000000000000"

  const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: placement, status } = useContractWrite({

    address: "0x25eF9e24639976BE7F94c4A605a9D3095b172Ad8",
    abi,
    walletClient,
    functionName: 'placement',
    args: [
      // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //direct
      // "0x556499eda344C4E27c793f7249339f3FAf12Bc2C", //placement
      REFFERAL, //direct
      PLACEMENT, //placement
      Eth_value
    ],
    onSuccess: PackagePurchase
  })

  const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    address: "0x55d398326f99059fF775485246999027B3197955",
    abi: erc20ABI,
    walletClient,
    functionName: 'approve',
    args: [
      "0x25eF9e24639976BE7F94c4A605a9D3095b172Ad8", //spender contract address
      Eth_value
    ]
  })


  // let start

  // const { data: data_Purchase, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: placement, status } = useContractWrite({

  //   address: "0x389DC006D55bd6bf1e5e4a4e5F0E6885d126EAfe",
  //   abi,
  //   walletClient,
  //   functionName: 'placement',
  //   args: [
  //     "0x752D9E59909D5B2dD13c1639A0FE795580AEcdc2", //direct
  //     "0x752D9E59909D5B2dD13c1639A0FE795580AEcdc2", //placement
  //     Eth_value + "000000"
  //   ],
  //   onSuccess: PackagePurchase
  // })


  // const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
  //   address: "0x3B6467B7C935272Ff304C4692E12cd157d0E641D",
  //   abi: erc20ABI,
  //   walletClient,
  //   functionName: 'approve',
  //   args: [
  //     "0x389DC006D55bd6bf1e5e4a4e5F0E6885d126EAfe", //spender contract address
  //     Eth_value + "000000"
  //   ]
  // })

  const transactionHash_to_purchase = data_Purchase?.hash
  const transactionHash = approve_data?.hash

  const place_ = async () => await placement()

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: transactionHash,
  });
  const { isLoading: load, isSuccess: Transact_purchase } = useWaitForTransaction({
    hash: transactionHash_to_purchase,
  });



  useEffect(() => {
    // place_()
    setTimeout(() => {
      setLoading(false)
    }, 2000); // 2000 milliseconds = 2 seconds
  }, [Transact_purchase])

  useEffect(() => {
    // place_()
    setTimeout(() => {
      place_()
    }, 2000); // 2000 milliseconds = 2 seconds
  }, [isSuccess])



  // console.log({ isLoading, isSuccess })



  // let checkng 
  // if(start && data_Purchase?.hash){
  //   checkng=1
  // }
  const Approves = async () => {
    await test();
    await Approve()
  };

  // useEffect(()=>{
  //   PackagePurchase()
  // },[checkng])


  useContractEvent({
    address: '0x389DC006D55bd6bf1e5e4a4e5F0E6885d126EAfe',
    abi,
    eventName: 'placementDetaill',
    listener(log) {
      console.log(log, '<==== this is event !!')
    },
  })

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
          BIGRefresh={BIGRefresh}
          setBIGRefresh={setBIGRefresh}
        />
      </Modal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 my-2 px-2">
        {/* <button onClick={()=>setRefresh(refresh+1)}> data</button> */}
        {Loading  ? <>its loading</> : pakages.map((x, i) => (

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
                onClick={() => setIsModalOpen2(true)}
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
              {isLoading_Deposite || isLoading_approve ?
                "Loading please wait" :
                (
                  <div>
                    <button className="bg-green-800 text-white px-8 py-2 rounded-3xl" onClick={Approves}>Purchase</button>
                    {/* <button className="bg-green-800 text-white px-8 py-2 rounded-3xl" onClick={place_}>purchase</button> */}
                  </div>
                )
              }
              {/* <button className="bg-green-800 text-white px-8 py-2 rounded-3xl" onClick={test}>test</button> */}
            </div>
          </div>
        </Modal>
      </div >
    </div >
  );
}
