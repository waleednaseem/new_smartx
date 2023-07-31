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
  // console.log(value.upgrade,"<==========")

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

  const pkg_Upgrade = [
    {
      pkg_price: 10,
      upgrades: [
        { level: 12.5 },
        { level: 28.125 },
        { level: 63.281 },
        { level: 142.383 },
        { level: 320.361 },
        { level: 720.813 },
        { level: 1621.829 },
        { level: 3649.116 },
      ]
    },
    {
      pkg_price: 20,
      upgrades: [
        { level: 25 },
        { level: 56.25 },
        { level: 126.563 },
        { level: 284.766 },
        { level: 640.723 },
        { level: 1441.626 },
        { level: 3243.658 },
        { level: 7298.232 },
      ]
    },
    {
      pkg_price: 50,
      upgrades: [
        { level: 62.5 },
        { level: 140.625 },
        { level: 316.406 },
        { level: 711.914 },
        { level: 1601.807 },
        { level: 3604.065 },
        { level: 8109.146 },
        { level: 18245.579 },
      ]
    },
    {
      pkg_price: 100,
      upgrades: [
        { level: 125 },
        { level: 281.250 },
        { level: 632.813 },
        { level: 1423.828 },
        { level: 3203.613 },
        { level: 7208.130 },
        { level: 16218.292 },
        { level: 36491.158 },
      ]
    },
    {
      pkg_price: 200,
      upgrades: [
        { level: 250 },
        { level: 562.5 },
        { level: 1265.625 },
        { level: 2847.656 },
        { level: 6407.227 },
        { level: 14416.260 },
        { level: 32436.584 },
        { level: 72982.315 },
      ]
    },
    {
      pkg_price: 350,
      upgrades: [
        { level: 437.5 },
        { level: 984.375 },
        { level: 2214.844 },
        { level: 4983.398 },
        { level: 11212.646 },
        { level: 25228.455 },
        { level: 56764.023 },
        { level: 127719.051 },
      ]
    },
  ]
  const levels = [1, 2, 3, 4, 5, 6, 7, 8]
  let upgrade_array
  upgrade_array = pkg_Upgrade?.find(x => x.pkg_price == value.pkg_price)?.upgrades

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
              {
                levels.map((x,i) => (
                  <p key={i} className={`flex ${x==value.level?'bg-primary text-texting':'text-primary'}  justify-center border border-primary  rounded-md cursor-pointer px-2 min-w-[100px]`}>
                    {x}
                  </p>
                ))
              }
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="flex flex-col gap-0.5">
              <p className="bg-primary text-texting text-sm sm:text-base p-1 rounded-md flex justify-center cursor-pointer">
                Amount
              </p>
              {
                upgrade_array?.map((x,i)=> (
                  <p key={i} onClick={()=>console.log(x)} className={`flex ${x.level==value.upgrade?'bg-primary text-texting':'text-primary'} justify-center border border-primary rounded-md cursor-pointer px-2 min-w-[100px]`}>
                    {x.level}
                  </p>
                ))
              }

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
