import React from "react";
import dining from "../../../assets/Home/BrowseTheRange/dining.png";
import living from "../../../assets/Home/BrowseTheRange/living.png";
import bedroom from "../../../assets/Home/BrowseTheRange/bedroom.png";

const BrowseTheRange = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[56px]">
        <div className="text-[#333333] text-[32px] font-bold">Browse The Range</div>
        <div className="text-[#666666] text-[20px] font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      <div className="flex  mt-[62px] gap-[20px] justify-center">
        <div className="flex flex-col items-center">
          <div className="h-[480px] w-[381px]">
            <img src={dining} alt="dining" className="rounded-[15px]"/>
          </div>
          <div className="text-[#333333] text-[24px] font-semibold mt-[30px]">Dining</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[480px] w-[381px]">
            <img src={living} alt="dining" className="rounded-[15px]"/>
          </div>
          <div className="text-[#333333] text-[24px] font-semibold mt-[30px]">Living</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-[480px] w-[381px]">
            <img src={bedroom} alt="dining" className="rounded-[15px]"/>
          </div>
          <div className="text-[#333333] text-[24px] font-semibold mt-[30px]">Bedroom</div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;
