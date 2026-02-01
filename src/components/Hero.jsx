import React, { Suspense } from "react";
import HeroText from "../subComponents/HeroText";
import ParallaxBackground from "../subComponents/ParallaxBackground";



const Hero = () => {
  
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />

      
    </section>
  );
};



export default Hero;
