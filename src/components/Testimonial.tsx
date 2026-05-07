"use client";

import { motion } from "framer-motion";

type TestimonialProps = {
  heading: string;
  highlight?: string; // italic word (e.g. "saying.")
  company: string;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

export default function Testimonial({
  heading,
  highlight,
  company,
  quote,
  name,
  role,
  avatar,
}: TestimonialProps) {
  return (
    <section className="relative w-ful h-[100vh] py-24 mb-16 px-6 bg-[#0a0d04] text-[#fafff3] overflow-hidden">
      

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-medium tracking-tight mb-32"
        >
          {heading}{" "}
          {highlight && (
            <span className="italic font-serif font-light">
              {highlight}
            </span>
          )}
        </motion.h2>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-sm tracking-widest text-[#fafff3]/70"
        >
          {company}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-2xl font-serif italic leading-relaxed text-[#fafff3]/90"
        >
          “{quote}”
        </motion.p>

        {/* Avatar + Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col items-center"
        >
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full mb-3 object-cover"
            />
          )}

          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-[#fafff3]/60">{role}</div>
        </motion.div>

      </div>
    </section>
  );
}