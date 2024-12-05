import React from "react";
import heroBannerImg from "../../../assets/Home/Banner/heroBannerImg.png";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src={heroBannerImg}
        alt="Hero Banner"
        className="w-full h-[90vh] object-cover"
          />
          <div className="absolute top-2/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 h-[443px] w-[643px] bg-[#FFF3E3]">
              <div className="px-[40px] py-[60px]">
                  <div className="text-[#333333] text-[16px] font-semibold leading-auto">New Arival</div>
                  <div className="text-[#B88E2F] text-[52px] font-bold leading-[65px] mt-[4px]">Discover Our New Collection</div>
                  <div className="text-[#333333] text-[18px] font-medium leading-[24px] mt-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
                      <div className="bg-[#B88E2F] text-[#fff] px-[72px] py-[25px] inline-block mt-[48px] cursor-pointer">BUY NOW</div>
            </div>
          </div>
    </div>
  );
};

export default HeroBanner;
