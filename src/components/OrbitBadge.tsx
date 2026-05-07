"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function OrbitBadge() {
  return (
    <div className="relative w-40 h-40">

      {/* Rotating Text */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full p-2"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 12,
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 50, 50
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
            "
          />
        </defs>

        <text
          fill="#fafff3"
          fontSize="8"
          letterSpacing="2"
          className="uppercase"
        >
          <textPath href="#circlePath" startOffset="0%">
            Convert • Engage • Accelerate • Orbit •
          </textPath>
        </text>
      </motion.svg>

      {/* Center Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe className="w-16 h-16 text-[#C0F53D] " strokeWidth={1.2} />
      </div>

    </div>
  );
}