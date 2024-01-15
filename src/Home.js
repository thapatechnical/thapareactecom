import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = { name: "BANG BANG Store" };
  return (
    <div>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />;
    </div>
  );
};

export default Home;
