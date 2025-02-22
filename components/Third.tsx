import React from "react";
import MediumFeed from "./MediumFeed";
import Marquee from "react-fast-marquee";
import RotatingImage from "./Star"; // Updated import name

const Third = () => {
  return (
    <>
      <div className="bg-black font-f1 text-6xl pt-16">
        <div className="flex mb-16 items-center justify-center landscape:items-start">
          <RotatingImage
            src="/star.png"
            className="w-28 invert brightness-0 landscape:justify-center text-center md:w-32"
          />
        </div>
        <div className="h-20 font-f2">
          <Marquee className="h-24 text-white">
            I Write Also ↓ I Write Also ↓ I Write Also ↓ I Write Also ↓ I Write
            Also ↓ I Write Also ↓ I Write Also ↓ I Write Also ↓ I Write Also ↓ I
            Write Also ↓ I Write Also ↓ I Write Also ↓ 
          </Marquee>
        </div>
        <MediumFeed />
      </div>
    </>
  );
};

export default Third;