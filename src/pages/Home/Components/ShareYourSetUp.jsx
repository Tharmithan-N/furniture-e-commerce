import React from "react";
import gridimg1 from "../../../assets/Home/ShareYourSetUp/gridimg1.png";
import gridimg2 from "../../../assets/Home/ShareYourSetUp/gridimg2.png";
import gridimg3 from "../../../assets/Home/ShareYourSetUp/gridimg3.png";
import gridimg4 from "../../../assets/Home/ShareYourSetUp/gridimg4.png";
import gridimg5 from "../../../assets/Home/ShareYourSetUp/gridimg5.png";
import gridimg6 from "../../../assets/Home/ShareYourSetUp/gridimg6.png";
import gridimg7 from "../../../assets/Home/ShareYourSetUp/gridimg7.png";
import gridimg8 from "../../../assets/Home/ShareYourSetUp/gridimg8.png";
import gridimg9 from "../../../assets/Home/ShareYourSetUp/gridimg9.png";

const ShareYourSetUp = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[67px]">
        <div className="text-[#616161] font-semibold text-[20px]">
          Share your setup with
        </div>
        <div className="text-[#3A3A3A] font-bold text-[40px]">
          #FuniroFurniture
        </div>
      </div>
      <div>
        <div className="grid grid-cols-10 grid-rows-8">
          <div className="row-span-4"><img src={gridimg1} alt="gridimg1" /></div>
          <div className="col-span-3 row-span-3 col-start-2 row-start-2"><img src={gridimg2} alt="gridimg2" /></div>
          <div className="col-span-2 row-span-3 col-start-5 row-start-3"><img src={gridimg3} alt="gridimg3" /></div>
          <div className="col-span-2 row-span-3 col-start-7 row-start-2"><img src={gridimg4} alt="gridimg4" /></div>
          <div className="col-span-2 row-span-4 col-start-9 row-start-1"><img src={gridimg5} alt="gridimg5" /></div>
          <div className="col-span-2 row-span-4 row-start-5"><img src={gridimg6} alt="gridimg6" /></div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-5"><img src={gridimg7} alt="gridimg7" /></div>
          <div className="row-span-2 col-start-7 row-start-5"><img src={gridimg8} alt="gridimg8" /></div>
          <div className="col-span-2 row-span-2 col-start-8 row-start-5"><img src={gridimg9} alt="gridimg8" /></div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourSetUp;
