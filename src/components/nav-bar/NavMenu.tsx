"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CTAFormToggle from "./CTAFormToggle";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const NavMenu = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 50
          ? "backdrop-blur-2xl shadow-md bg-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 py-6 flex items-center justify-between relative">

        {/* LEFT: Logo */}
        <Link
          href="/"
          className="text-2xl md:text-2xl text-[#fafff3] font-bold p-2 border border-white/20 hover:bg-[#fafff3] hover:text-black transition-all"
        >
          ALIEN MARKETING&#x2122;
        </Link>

        {/* CENTER: Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group inline-flex overflow-hidden text-[#fafff3]/80 transition-colors hover:text-[#C0F53D]"
            >
              <span className="relative">
                {link.label}

                <span
                  className="
                    absolute bottom-0 left-0 
                    h-px w-0 bg-[#C0F53D] 
                    transition-all duration-300 
                    group-hover:w-full
                  "
                />
              </span>
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA */}
        <CTAFormToggle />
      </div>
    </div>
  );
};

export default NavMenu;