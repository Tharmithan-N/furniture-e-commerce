import React from "react";
import { Badge } from "antd";
import { HeartOutlined, ShareAltOutlined, SyncOutlined } from "@ant-design/icons";

const ProductCard = ({ image, isNew, discount, title, description, price, oldPrice }) => {
  return (
    <div className="group relative w-[285px] border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white h-[446px]">
      {/* Image with Badge */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[301px] object-cover rounded-t-lg"
        />
        <Badge
          count={isNew ? "New" : `${discount}% Off`}
          style={{ backgroundColor: isNew ? "#52c41a" : "#fa541c" }}
          className="absolute top-2 right-2"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Description */}
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        {/* Price Section */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-semibold text-green-600">
            ${price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${oldPrice}
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          {/* Add to Cart */}
          <div className="text-[#B88E2F] text-[16px] font-semibold py-[12px] px-[55px] bg-[#fff] cursor-pointer">Add to cart</div>

          {/* Icons */}
          <div className="flex justify-around w-3/4 text-gray-600 mt-[24px]">
            <div className="flex items-center gap-1 cursor-pointer text-white">
              <ShareAltOutlined />
              <span className="text-sm">Share</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer text-white">
              <SyncOutlined />
              <span className="text-sm">Compare</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer text-white">
              <HeartOutlined />
              <span className="text-sm">Like</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
