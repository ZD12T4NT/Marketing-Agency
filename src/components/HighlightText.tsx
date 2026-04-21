"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

type HighlightTextProps = {
  text: string;
  className?: string;
};

export default function HighlightText({ text, className = "" }: HighlightTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true }); // trigger animation when text enters view
  const words = text.split(" ");

  // Smooth opacity transition
  const opacitySpring = useSpring(inView ? 1 : 0, { stiffness: 50, damping: 20 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className={`md:w-[70%] inline-block px-4 py-10 md:py-16 md:px-2 leading-[0] md:leading-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ opacity: opacitySpring }}
          className="inline-block text-black text-xl md:text-6xl mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
