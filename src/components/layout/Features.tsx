import React from "react";
import FeatList from "./features/FeatList";
import FeatVideoBanner from "./features/FeatVideoBanner";
import FeatPet from "./features/FeatPet";
import FeatFallDetection from "./features/FeatFallDetection";
import FeatExtra from "./features/FeatExtra";
import FeatGPS from "./features/FeatGPS";
import FeatMore from "./features/FeatMore";


const Features: React.FC = () => {
  return (
    <>
      <FeatList />
      <FeatVideoBanner />
      <FeatGPS />
      <FeatPet />
      <FeatFallDetection />
      <FeatExtra />
      <FeatMore/>
    </>
  );
};

export default Features;
