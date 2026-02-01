import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 50 });


  const mountain3Y = useTransform(smooth, [0, 0.5], [0, 350]);
  const planetsX = useTransform(smooth, [0, 0.5], [0, -200]);
  const mountain2Y = useTransform(smooth, [0, 0.5], [0, 180]);
  const mountain1Y = useTransform(smooth, [0, 0.5], [0, 0]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        {/* Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

     
        <motion.div
          className="absolute right-60 bottom-50 w-[50vw] h-[50vh] -z-10"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            translateY: mountain3Y,
          }}
        />

        {/* Mountain 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
