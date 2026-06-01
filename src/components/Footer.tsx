"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { instrumentSerif, inter } from "@/lib/fonts";
import AlienHead from "./AlienHead";

gsap.registerPlugin(useGSAP);

const services = [
  "Paid Advertising",
  "Content & Creative",
  "Conversion",
];

const company = ["Services", "Work", "About", "News", "Careers"];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-fade", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden rounded-t-[2rem] bg-black text-[#fafff3]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[80rem] -translate-x-1/2 rounded-full bg-[#C0F53D]/40 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.08),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10">
        {/* Top Icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="footer-fade mb-16 flex justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C0F53D]">
            <AlienHead className="w-8 h-8" />
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
          {/* Left */}
          <div className="footer-fade">
            <Link href="/" className="mb-8 inline-block text-2xl md:text-2xl text-[#fafff3] font-bold p-2 border border-1 hover:bg-[#fafff3] hover:text-black transition-all">
              ALIEN MARKETING&#x2122;
            </Link>

            <h2 className={`${inter.className} max-w-xl text-3xl font-light leading-tight tracking-tight text-[#fafff3] md:text-4xl`}>
              <span className={`${instrumentSerif.className} italic font-light`}>
                Sign up
              </span>{" "}
              to harness the power of Alien Marketing.
            </h2>

            {/* Input */}
            <div className="mt-10 flex max-w-md items-center gap-3">
              <div className="flex-1 border border-[#fafff3]/40 bg-[#fafff3]/5 backdrop-blur">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 w-full bg-transparent px-5 text-sm text-[#fafff3] outline-none placeholder:text-[#fafff3]/40"
                />
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center border border-[#fafff3]/40 bg-[#fafff3]/5 backdrop-blur transition-colors hover:bg-[#C0F53D] hover:text-black"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* Services */}
          <div className="footer-fade">
            <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-[#fafff3]/50">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group inline-flex overflow-hidden text-[#fafff3]/80 transition-colors hover:text-[#C0F53D]"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C0F53D] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-fade">
            <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-[#fafff3]/50">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group inline-flex overflow-hidden text-[#fafff3]/80 transition-colors hover:text-[#C0F53D]"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C0F53D] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-fade mt-24 flex flex-col items-center justify-center gap-6 border-t border-[#fafff3]/10 pt-8 text-sm text-[#fafff3]/40">
          <p>©2025 ALIEN MARKETING&#x2122;</p>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-3xl"
          >
            ◎
          </motion.div>
        </div>
      </div>
    </footer>
  );
}