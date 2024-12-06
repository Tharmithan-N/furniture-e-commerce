import React from "react";
import HeroBanner from "./Components/HeroBanner";
import BrowseTheRange from "./Components/BrowseTheRange";
import OurProducts from "./Components/OurProducts";
import ShareYourSetUp from "./Components/ShareYourSetUp";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <BrowseTheRange />
      <OurProducts />
      <ShareYourSetUp />
    </div>
  );
};

export default Home;
