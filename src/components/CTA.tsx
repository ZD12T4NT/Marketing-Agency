"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import OrbitBadge from "./OrbitBadge";
import { inter } from "@/lib/fonts";

type CTAProps = {
  eyebrow?: string;
  title: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
};

export default function CTA({
  eyebrow = "LET'S ORBIT",
  title,
  buttonText = "Contact Us",
  onClick,
}: CTAProps) {
  return (
    <section className="w-full h-[70vh] ">

      {/* MAIN CTA */}
      <div className="h-full relative bg-[#C0F53D] py-20 px-6 text-center">

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center">
                <OrbitBadge />
            </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto mt-10">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest mb-4 font-medium text-[#1a2209]"
          >
            {eyebrow}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`${inter.className} text-3xl md:text-5xl font-medium leading-tight text-[#1a2209]`}
          >
            {title}
          </motion.h2>

          {/* CTA */}
          <Button variant="default" className="mt-10">Contact Us</Button>

        </div>
      </div>
    </section>
  );
}