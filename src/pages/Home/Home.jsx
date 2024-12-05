import React from "react";
import HeroBanner from "./Components/HeroBanner";
import BrowseTheRange from "./Components/BrowseTheRange";
import OurProducts from "./Components/OurProducts";

const Home = () => {
  return (
    <div>
      <HeroBanner />
          <BrowseTheRange />
          <OurProducts/>
    </div>
  );
};

export default Home;
