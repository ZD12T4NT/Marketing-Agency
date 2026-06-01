import { motion } from "framer-motion";
import { instrumentSerif, inter } from "@/lib/fonts";
import Button from "./Button";
import Marquee from "./Marquee";

export default function ShowCase() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0b0f05]">

  
      {/* LEFT CARD */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -30 }}
        animate={{ opacity: 1, x: 0, rotate: -15 }}
        transition={{ duration: 0.8 }}
        className="z-10 absolute left-[-5%] md:-left-[10%] top-1/3 -translate-y-1/2 
        aspect-square w-[300px] md:w-[500px] h-[300px] md:h-[500px]
        rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src="/brandUNIQLO.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 30 }}
        animate={{ opacity: 1, x: 0, rotate: 15 }}
        transition={{ duration: 0.8 }}
        className="z-10 absolute right-[-5%] md:-right-[10%] top-1/3 -translate-y-1/2 
        aspect-square w-[300px] md:w-[500px] h-[300px] md:h-[500px]
        rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src="/stoic.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center text-[#fafff3] px-6 translate-y-44">
        
        <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4">
          To Infinity and Beyond
        </p>

        <h1 className={`${inter.className} mb-9 text-4xl md:text-8xl font-normal leading-none tracking-tighter`}>
          Next Level
          <br />
          <span className={`font-serif md:text-8xl italic tracking-normal ${instrumentSerif.className}`}>Results</span>
        </h1>

        {/* CTA */}
        <Button variant="gradient">View Cases</Button>
       

        {/* Logos */}
       <Marquee
        items={[
            "koala",
            "black coffee",
            "daily stoic",
            "bettinardi",
            "stag",
        ]}
        />
      </div>
    </section>
  );
}