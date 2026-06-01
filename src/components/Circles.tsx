import { instrumentSerif, inter } from "@/lib/fonts";
import { motion } from "framer-motion";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Product-Market Fit",
  "Site Experience",
  "Acquisition",
  "Lifecycle & Retention",
  "Reporting & Analytics",
];



export default function Circles() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: .8,
        y: 90,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div className="relative w-full my-24" ref={containerRef}>
      
      <div ref={textRef} className="relative z-10 px-6 pt-32 pb-24 mx-auto text-center max-w-5xl">
        <h2 className={`${inter.className} mb-8 text-2xl md:text-5xl font-normal text-[#fafff3]`}>Custom data-driven, perfomance-focused <span className={`${instrumentSerif.className} italic`}>growth</span> marketing solutions</h2>

        <p className="text-[#fafff3] max-w-2xl mx-auto text-xl">Our Custom data-driven, perfomance-focused growth marketing solutions have helped companies of all shapes and sizes to grow faster, regardless of size, industry or revenue model.</p>
      </div>

 
    <div className="relative mx-auto w-full max-w-[700px] aspect-square -translate-y-48">

       {/* Glow */}
        <motion.div
          className="absolute inset-0 z-0 scale-[1] rounded-full 
            bg-[#C0F53D]/40 blur-[80px]"
          animate={{ scale: [1.3, 1.4, 1.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

      <motion.div
        initial={{ opacity: 0, rotateX: 10 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full bg-black rounded-full z-10 flex items-center justify-center"
        style={{ perspective: 800 }}
      >

       <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {items.map((_, i) => {
          const angle = (i / items.length) * Math.PI * 2;

          const r = 25; 

          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;

          return (
    
              <line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="rgba(192,245,61,0.3)"
              strokeWidth="0.2"
              className="relative -z-10"
            />

          );
        })}
      </svg>

        {/* Subtle particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#c0f53d] rounded-full opacity-60" />
          
          <div className="absolute top-72 right-1/3 w-2 h-2 bg-[#c0f53d] rounded-full opacity-40" />

          <div className="absolute bottom-1/2 left-40 w-3 h-3 bg-[#c0f53d] rounded-full opacity-40" />
        </div>
        
        {/* Circles */}
        {[1, 0.75, 0.5].map((scale, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `scale(${scale}) translateZ(${i * 20}px)` }}
          >

            <svg className="w-full h-full p-20">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
                style={{filter: "drop-shadow(0 0 6px rgba(192, 245, 61, 1))",}}
              />
            </svg>
          </motion.div>
        ))}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center w-fit max-w-[10rem] mx-auto ">
          <span className="text-[#c0f53d] text-center font-medium text-2xl relative z-30">The 5 Pillars of Growth</span>
          <div className="absolute bg-[radial-gradient(circle_at_center,_rgba(0,0,0,1),_rgba(0,0,0,.3),_rgba(0,0,0,.2))] w-32 h-32 rounded-full z-20"></div>
        </div>

        {/* Items around circle */}
        {items.map((text, i) => {
          const angle = (i / items.length) * Math.PI * 2;
          const radius = 180;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute text-[#c0f53d] text-sm"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{text}</span>
              </div>
            </motion.div>
          );
        })}

        
      </motion.div>

      
    </div>
    </div>
  );
}