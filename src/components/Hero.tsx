"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";


type HeroProps = {
  title?: string;
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-screen z-10 w-full overflow-hidden">

      {/* Grid */}
        <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow  */}
      {/* <div className="absolute z-15 inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_50%_60%,rgba(163,255,0,0.25),transparent_60%)]"
      /> */}

      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#fafff3] rounded-full opacity-60" />
        
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#fafff3] rounded-full opacity-40" />

        <div className="absolute bottom-1/3 left-5 w-1 h-1 bg-[#fafff3] rounded-full opacity-40" />

        <div className="absolute top-3/4 right-7 w-1 h-1 bg-[#fafff3] rounded-full opacity-40" />

      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-6 md:px-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[#fafff3] leading-[0.9] tracking-tight mb-7"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-medium">
              Reach
            </div>

            <div className="relative text-5xl md:text-7xl lg:text-8xl italic font-serif font-light ">
              New

            </div>

            <div className="text-5xl md:text-7xl lg:text-8xl font-medium">
              Horizons
            </div>
          </motion.div>

          {/* CTA */}
         <Button variant="gradient">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;