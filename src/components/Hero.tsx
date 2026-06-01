"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { instrumentSerif, inter } from "@/lib/fonts";

type HeroProps = {
  title?: string;
};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-screen z-10 w-full overflow-hidden">

      {/* Grid */}
        <div
        className="absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow  */}
        <motion.div
        className="absolute bottom-[-280px] -translate-x-1/2 pointer-events-none"
        style={{
          width: "1000px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(192,245,61,0.45) 0%, rgba(192,245,61,0.15) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
            animate={{ scale: [1.3, 1.4, 1.3] }}
          transition={{ duration: 4, repeat: Infinity }}
      />

     

      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#fafff3] rounded-full opacity-4 0" />
        
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
            className="text-[#fafff3] tracking-tight mb-7"
          >
            <div className={`${inter.className}text-5xl md:text-7xl lg:text-8xl font-medium `}>
              Reach
            </div>

            <div className={`${instrumentSerif.className} relative text-5xl md:text-7xl lg:text-8xl italic font-serif font-light `}>
              New

            </div>

            <div className={`${inter.className}text-5xl md:text-7xl lg:text-8xl font-medium `}>
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