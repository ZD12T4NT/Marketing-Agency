"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import SectionIntro from "./SectionIntro";

const items = [
  {
    title: "Marketing Strategy",
    description: "Holistic digital marketing expertise...",
    image: "/hoverImageOne.jpg",
  },
  {
    title: "Digital Advertising",
    description: "Full funnel paid media campaigns...",
    image: "/hoverImageTwo.jpg",
  },
  {
    title: "Content & Creative",
    description: "Creative assets that convert...",
    image: "/hoverImageThree.jpg",
  },
];

export default function HoverParallaxList() {
  const [active, setActive] = useState(0);

  // 1. raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. smooth them
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  // 3. optional scaling AFTER spring
  const moveX = useTransform(springX, (v) => v * 30);
  const moveY = useTransform(springY, (v) => v * 30);

  return (
  <div className="bg-gradient-to-bl from-[#C0F53D] to-[#FAFFF3] py-20 px-6">
    
    <div className="bg-[#FAfff3] p-6 py-20 rounded-xl flex flex-col gap-10">
      
      {/* TOP TITLE */}
      <SectionIntro
      textColor="#1a2209"
        title={
          <>
            What we do <br />
            <span className="italic font-serif font-light">best.</span>
          </>
        }
      />

      {/* BOTTOM CONTENT */}
      <div className="flex gap-12 flex-1">

        <div className="w-full">
          {items.map((item, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  const px = (e.clientX - rect.left) / rect.width - 0.5;
                  const py = (e.clientY - rect.top) / rect.height - 0.5;

                  x.set(px);
                  y.set(py);
                }}
                className="py-6 pb-20 md:pb-36  border-t border-[#1a2209] cursor-pointer group relative"
              >
                <div className="flex justify-between items-start">

                  <div className="flex ">
                    <div className="text-xl text-[#1a2209] mb-1 mr-4 group-hover:text-[#C0F53D]">
                      0{i + 1}
                    </div>
                    <div className="text-3xl font-medium group-hover:text-[#C0F53D] transition">
                      {item.title}
                    </div>
                  </div>

                  <div className="text-md text-[#1a2209] max-w-[300px] text-right">
                    {item.description}
                  </div>

                  {isActive && (
                    <motion.div style={{
                          x: moveX,
                          y: moveY,
                        }} className="absolute right-1/2 left-1/2 top-0 -translate-y-1/2 w-64 h-40 overflow-hidden bg-[#1a2209]">
                      <motion.img
                        src={item.image}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  </div>
);
}