import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Api from "../../API/API";
import { useDispatch } from "react-redux";
export default function UpgradeFromWallet({
  isModalOpen,
  onValue,
  setIsModalOpen,
  pkgname,
  value,
}) {
  const [NextPrice, setNextPrice] = useState("");
  const [currentLevel, setcurrentLevel] = useState("");
  const [Current_pkg, setCurrent_pkg] = useState("");
  const [Refresh, setRefresh] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    pkgInfo();
  }, [Refresh]);

  const Upgrade = () => {
    Api.fetchPost(
      {
        pkg: value.pkg_price,
      },
      "/upgrade"
    )
      .then(
        (x) => (
          dispatch({
            type: "setModalmsg",
            payload: x.data,
          }),
          setRefresh(x.data)
          // x.data&& window.location.reload()
        )
      )
      .catch((err) => console.log(err));
  };

  const pkgInfo = () => {
    Api.fetchPost({ pkg: value.pkg_price }, "/Pakage_info")
      .then((x) => {
        setNextPrice(x.data.NextPackage, "<== next pkg price");
        setcurrentLevel(x.data.findUpdate.level, "<== current level");
        setCurrent_pkg(x.data.findUpdate.pkg_price, "<== current pakage price");
        setRefresh(x.data.NextPackage);
        // console.log(x.data,'<===')
      })
      .catch((err) => console.log(err));
  };

  // console.log(onValue,"<==")
  const pkg_name = ["Basic", "Standard", "Pro", "Royal", "Gold", "King"];
  return (
    <div className="rounded-4xl">
      <div className="flex rounded-3xl bg-primary items-center">
        <div className="w-[100%]  mx-5 py-4">
          <div className="flex justify-between text-texting">
            {/* <button onClick={pkgInfo}>pkg info</button> */}
            <p>Your Current Package is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer px-2 transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center">
              {Current_pkg || pkg_name[onValue]}
            </div>
          </div>
          <div className="flex justify-between text-texting my-2 ">
            <p>Your Package Upgrade Level is</p>
            <div className="border-2 rounded-lg text-texting min-w-[100px] font-bold cursor-pointer transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 flex justify-center items-center ">
              Level-{currentLevel || value.level}
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex items-center text-texting"
          onClick={() => setIsModalOpen(false)}
        >
          <AiOutlineClose size={25} />
        </div>
      </div>

      <div className="w-[100%] justify-between h-[400px]  bg-slate-100 my-2 rounded-4xl shadow-lg shadow-primary flex flex-col">
        <div className="text-center text-primary sm:text-xl text-sm my-2">
          Upgrade your package to the Next level
        </div>
        <div className="w-[100%] flex">
          <div className="w-[50%] flex justify-center">
            <div className="flex flex-col gap-0.5">
              <p className="bg-primary text-texting text-sm sm:text-base p-1 rounded-md flex justify-center cursor-pointer">
                Levels
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                1
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                2
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                3
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                4
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                5
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                6
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                7
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                8
              </p>
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="flex flex-col gap-0.5">
              <p className="bg-primary text-texting text-sm sm:text-base p-1 rounded-md flex justify-center cursor-pointer">
                Amount
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                100
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                200
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                300
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                400
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                500
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                600
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                700
              </p>
              <p className="flex justify-center border border-primary text-primary rounded-md cursor-pointer px-2 min-w-[100px]">
                800
              </p>
            </div>
          </div>
        </div>

        {currentLevel != 8 ? (
          <div className="flex justify-center items-center">
            <button
              onClick={() => Upgrade()}
              className="bg-primary text-texting p-2 rounded-2xl transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 my-5 py-4"
            >
              Upgrade to Level-
              {currentLevel < 8 ? currentLevel + 1 : currentLevel} <br /> (
              {NextPrice} USDT)
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button className="bg-primary text-texting p-2 rounded-2xl transform hover:scale-110 hover:bg-opacity-50 transition ease-in duration-300 my-5 py-4">
              Upgrade Complete !
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
