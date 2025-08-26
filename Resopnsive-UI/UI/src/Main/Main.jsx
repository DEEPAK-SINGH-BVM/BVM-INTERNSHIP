import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Box from "../Components/Box-Model/Box";
import DesignBox from "../Components/Design/Design";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DesignBox />
      <Box />
    </div>
  );
};

export default Main;
