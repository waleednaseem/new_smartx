import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UpgradeFromWallet from "./UpgradeFromWallet";

export default function Upgrades({ isModalOpen, setIsModalOpen, onValue, value, setBIGRefresh, BIGRefresh }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
      <UpgradeFromWallet setIsModalOpen={setIsModalOpen} onValue={onValue} value={value} BIGRefresh={BIGRefresh}
        setBIGRefresh={setBIGRefresh} />
    </div>
  );
}
