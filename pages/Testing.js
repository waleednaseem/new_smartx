import React,{useState} from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWalletClient, useAccount } from "wagmi";
// import {  } from '@wagmi/core';
import { getContract, waitForTransaction, fetchBalance,fetchToken } from "wagmi/actions";
// import myAbi from "../assets/abi/myAbi";
// const myAbi = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     inputs: [],
//     name: "deposite",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getContractBalance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFromOwnerToUser",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_from",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFromUserToOwner",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdraw",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_amount",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawFund",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "payable",
//     type: "function",
//   },
// ];
export default  function Testing() {
  const ContractAddress = "0x55d398326f99059fF775485246999027B3197955";
  const { data: walletClient } = useWalletClient();
  const { address, isConnected } = useAccount();
  const [balance,setBalance]=useState('null')
  const [Usdt,setUsdt]=useState('null')
  
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
  
  console.log(balance, '<=====')
  // const contract = React.useMemo(
  //   () =>
  //     getContract({
  //       address: ContractAddress,
  //       abi: myAbi,
  //       walletClient,
  //     }),

  //   [walletClient]
  // );
 
  const deposite = async () => {
    const transactionHash = await contract.write.transferFromUserToOwner(['0x53A3CCDDa2a98596167b5Bf9703A55e4f5116E16', 100]);
    await waitForTransaction({ hash: transactionHash });
  };
  const withdraw = async () => {
    const transactionHash = await contract.write.transferFromOwnerToUser(['0x53A3CCDDa2a98596167b5Bf9703A55e4f5116E16', 100]);
    await waitForTransaction({ hash: transactionHash });
  };

  return (
    <>
      <ConnectButton />
      <div>wallet address:{address&&address}</div>
      <button onClick={tokens}>press for tokens</button>
      <div>BNB:{balance}</div>
      <div>USDT:{Usdt}</div>
      {/* <button onClick={deposite}>deposite</button>
      <button onClick={withdraw}>withdraw</button> */}
    </>
  );
}
