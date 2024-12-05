import React from "react";
import furniroLogo from "../assets/layouts/furniroLogo.png";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const TopNavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[5px] ml-[54px] items-center cursor-pointer">
        <div><img src={furniroLogo} alt="furniroLogo" /></div>
        <div className="text-[34px] font-bold">Furniro</div>
          </div>
          <div className="flex items-center gap-[75px]">
        {["Home", "Shop", "About", "Contact"].map((item) => (
          <div
            key={item}
            className="font-medium text-[16px] cursor-pointer relative group"
          >
            {item}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
          <div className="flex items-center mr-[100px] gap-[45px]">
              <div className="text-[18px] cursor-pointer"><CiUser style={{ strokeWidth: 0.8 }}/></div>
              <div className="text-[18px] cursor-pointer"><CiSearch style={{ strokeWidth: 0.8 }}/></div>
              <div className="text-[18px] cursor-pointer"><CiHeart style={{ strokeWidth: 0.8 }}/></div>
              <div className="text-[18px] cursor-pointer"><CiShoppingCart style={{ strokeWidth: 0.8 }}/></div>
          </div>
    </div>
  );
};

export default TopNavBar;