"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
      className="relative overflow-hidden rounded-t-[2rem] bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[80rem] -translate-x-1/2 rounded-full bg-lime-400/40 blur-[140px]" />

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
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-lime-300/40 bg-lime-300 text-black shadow-[0_0_40px_rgba(163,230,53,0.35)]">
            👽
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.7fr_0.7fr]">
          {/* Left */}
          <div className="footer-fade">
            <div className="mb-8 inline-block border border-white/70 px-4 py-2 text-sm tracking-widest">
              ALIEN MARKETING
            </div>

            <h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
              Sign up to harness the power of Adspace.
            </h2>

            {/* Input */}
            <div className="mt-10 flex max-w-md items-center gap-3">
              <div className="flex-1 border border-white/40 bg-white/5 backdrop-blur">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 w-full bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/40"
                />
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-14 w-14 items-center justify-center border border-white/40 bg-white/5 backdrop-blur transition-colors hover:bg-lime-300 hover:text-black"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* Services */}
          <div className="footer-fade">
            <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-white/50">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group inline-flex overflow-hidden text-white/80 transition-colors hover:text-lime-300"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-fade">
            <h3 className="mb-5 text-sm font-medium uppercase tracking-widest text-white/50">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group inline-flex overflow-hidden text-white/80 transition-colors hover:text-lime-300"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-fade mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>©2025 ADSPACE®</p>

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