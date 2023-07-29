import React, { useEffect, useRef, useState } from "react";
  import { ConnectButton } from "@rainbow-me/rainbowkit";
  import { useWalletClient, useAccount, usePublicClient, erc20ABI, usePrepareContractWrite, useContractWrite } from "wagmi";
  import { getContract, waitForTransaction, fetchBalance, fetchToken, PrepareWriteContractConfig } from "wagmi/actions";
import { useRouter } from "next/router";

export default function Testing() {
  const ContractAddress = "0x85c3E7C1F0dD6793dC216676C4F1041DeF443CdC";
  const { data: walletClient } = useWalletClient();
  const [balance, setBalance] = useState('null')
  const [Usdt, setUsdt] = useState('null')
  const [_amount, set_amount] = useState(0)
  const { address, isConnected } = useAccount();

  const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAdrress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "USDT_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "changeTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositUSDT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawUSDT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const router = useRouter();
  const { ref } = router.query;

  const inputRef = useRef(null);

  const handleCopyClick = () => {
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputRef.current.value);
    showTooltip();
  };

  const showTooltip = () => {
    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = `Copied: ${inputRef.current.value}`;
  };

  const resetTooltip = () => {
    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copy to clipboard';
  };

  const tokens = async () => {
    const balances = await fetchBalance({
      address
    })
    const usdt = await fetchBalance({
      address,
      token: '0x55d398326f99059fF775485246999027B3197955'
    })

    console.log(usdt)
    setBalance(balances.formatted)
    setUsdt(usdt.formatted)
  }

  const { data: data_Deposite, isLoading: isLoading_Deposite, isSuccess: isSuccess_deposite, write: Deposite } = useContractWrite({
    address: ContractAddress,
    abi: ABI,
    walletClient,
    functionName: 'depositUSDT',
    args: [
      address,
      _amount
    ]
  })
  const { data: withdraw_data, isLoading: isLoading_withdraw, isSuccess: isSuccess_withdraw, write: Withdraw } = useContractWrite({
    address: ContractAddress,
    abi:ABI ,
    walletClient,
    functionName: '',
    args: [
      address,
      _amount
    ]
  })

  const { data: approve_data, isLoading: isLoading_approve, isSuccess: isSuccess_approve, write: Approve } = useContractWrite({
    address: "0x55d398326f99059fF775485246999027B3197955",
    abi: erc20ABI,
    walletClient,
    functionName: 'approve',
    args: [
      "0x85c3E7C1F0dD6793dC216676C4F1041DeF443CdC", //spender contract address
      _amount //amount of tokens to approve
    ]
  })

  // useEffect(() => {
  //   console.log({ withdraw_data, isLoading_withdraw, isSuccess_withdraw,data_Deposite })
  // }, [withdraw_data, isLoading_withdraw, isSuccess_withdraw])

  const deposite = async () => {
    await Deposite();
  };
  const withdraw = async () => {
    await Withdraw();
  };
  const Approves = async () => {
    await Approve();
  };

  return (
    <>
      <ConnectButton />
      {/* <p>wallet address:{address && address}</p> */}
      <button onClick={tokens}>press for tokens</button>
      <div>BNB:{balance}</div>
      <div>refferal:{ref}</div>
      <div>USDT:{Usdt}</div>
      <div><button onClick={deposite}>deposite</button></div>
      <div><button onClick={Approves}>Approves</button></div>
      <button onClick={withdraw}>withdraw</button>
      <input type="text" onChange={(e)=>set_amount(e.target.value)} placeholder="Amount"/>

      <input type="text"  id="myInput" ref={inputRef} />

      <div className="tooltip">
        <button onClick={handleCopyClick} onMouseOut={resetTooltip}>
          <span className="tooltiptext" id="myTooltip">
            Copy to clipboard
          </span>
          Copy text
        </button>
        </div>
    </>
  );
}