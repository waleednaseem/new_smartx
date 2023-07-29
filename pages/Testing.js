import React, { useEffect, useState } from "react";

export default function Testing() {

  const tokens = async () => {
    const balances = await fetchBalance({
      address
    })
    const usdt = await fetchBalance({
      address,
      token: '0x6175a8471C2122f778445e7E07A164250a19E661'
    })

    console.log(usdt)
    setBalance(balances.formatted)
    setUsdt(usdt.formatted)
  }

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: ContractAddress,
    abi: erc20ABI,
    walletClient,
    functionName: 'transfer',
    args: ["0x2B3D638E8113308279210F81ab3221BE432d8ca2", 1000000000000000000]
  })
  
  useEffect(() => {
    console.log({ data, isSuccess, isLoading })
  }, [data, isSuccess, isLoading])

  const deposite = async () => {
    await write();
  };
  const withdraw = async () => {
    const transactionHash = await contract.write.transferFromOwnerToUser(['0x53A3CCDDa2a98596167b5Bf9703A55e4f5116E16', 100]);
    await waitForTransaction({ hash: transactionHash });
  };

  return (
    <>
      <ConnectButton />
      {/* <p>wallet address:{address && address}</p> */}
      <button onClick={tokens}>press for tokens</button>
      <div>BNB:{balance}</div>
      <div>USDT:{Usdt}</div>
      <button onClick={deposite}>deposite</button>
    </>
  );
}
