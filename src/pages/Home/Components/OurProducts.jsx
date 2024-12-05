import React from "react";
import ProductCard from "../../../components/ProductCart";
import product1 from "../../../assets/Home/products/product1.png";
import product2 from "../../../assets/Home/products/product2.png";
import product3 from "../../../assets/Home/products/product3.png";
import product4 from "../../../assets/Home/products/product4.png";
import product5 from "../../../assets/Home/products/product5.png";
import product6 from "../../../assets/Home/products/product6.png";
import product7 from "../../../assets/Home/products/product7.png";
import product8 from "../../../assets/Home/products/product8.png";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      image: product1,
      isNew: true,
      discount: 20,
      title: "Product 1",
      description: "Description of Product 1",
      price: 45,
      oldPrice: 60,
    },
    {
      id: 2,
      image: product2,
      isNew: false,
      discount: 10,
      title: "Product 2",
      description: "Description of Product 2",
      price: 90,
      oldPrice: 100,
    },
    {
      id: 3,
      image: product3,
      isNew: false,
      discount: 30,
      title: "Product 3",
      description: "Description of Product 3",
      price: 70,
      oldPrice: 100,
    },
    {
      id: 4,
      image: product4,
      isNew: true,
      discount: 15,
      title: "Product 4",
      description: "Description of Product 4",
      price: 85,
      oldPrice: 100,
    },
    {
      id: 5,
      image: product5,
      isNew: false,
      discount: 25,
      title: "Product 5",
      description: "Description of Product 5",
      price: 75,
      oldPrice: 100,
    },
    {
      id: 6,
      image: product6,
      isNew: true,
      discount: 50,
      title: "Product 6",
      description: "Description of Product 6",
      price: 50,
      oldPrice: 100,
      },
    {
      id: 6,
      image: product7,
      isNew: true,
      discount: 50,
      title: "Product 6",
      description: "Description of Product 6",
      price: 50,
      oldPrice: 100,
    },
    {
      id: 6,
      image: product8,
      isNew: true,
      discount: 50,
      title: "Product 6",
      description: "Description of Product 6",
      price: 50,
      oldPrice: 100,
    },
  ];

  return (
    <div className="p-4">
      <div className="text-[40px] font-bold mb-6 text-center text-[#3A3A3A] mt-[56px]">Our Products</div>
          <div className="flex justify-center mt-[32px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            isNew={product.isNew}
            discount={product.discount}
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
          </div>
          <div className="flex justify-center ">
              <div className="text-[16px] font-semibold text-[#B88E2F] border border-[#B88E2F] px-[78px] py-[12px] mt-[32px] inline-block cursor-pointer">Show More</div>
          </div>
    </div>
  );
};

export default OurProducts;
