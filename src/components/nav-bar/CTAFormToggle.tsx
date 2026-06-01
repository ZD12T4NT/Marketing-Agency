"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Button from "../Button";

export default function CTAFormToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* BUTTON / PANEL CONTAINER */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="relative"
      >
        {/* CLOSED STATE */}
        {!isOpen && (
          <Button variant="gradient" onClick={() => setIsOpen(true)}>
            Get Started
          </Button>
        )}

        {/* OPEN STATE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-0 w-[320px] rounded-2xl 
              bg-[#C0F53D] text-black p-5 shadow-xl"
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:pr-24">Get Started</h3>
              <p className="text-sm mb-4">
                Get your free marketing plan.
              </p>

              {/* Form */}
              <form className="space-y-5 ">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded-md bg-black/10 placeholder-black/60 outline-none"
                />
                </div>
               <div>
                 <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded-md bg-black/10 placeholder-black/60 outline-none"
                />
               </div>

               <div>
                <label htmlFor="company">Company Name</label>
                 <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-3 py-2 rounded-md bg-black/10 placeholder-black/60 outline-none"
                />
               </div>
               <div>
                <label htmlFor="budget">Marketing Budget</label>
                 <input
                  type="text"
                  placeholder="Marketing Budget"
                  className="w-full px-3 py-2 rounded-md bg-black/10 placeholder-black/60 outline-none"
                />
               </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-2 rounded-full border border-black 
                  hover:bg-black hover:text-[#C0F53D] transition"
                >
                  Submit →
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}