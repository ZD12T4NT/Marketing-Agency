"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type Box = {
  media: string;
  smallText: string;
  title: string;
};

type ArticlesProps = {
  pretitle?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  align?: "left" | "center";
  boxes?: [Box, Box];
};

const Articles: React.FC<ArticlesProps> = ({
  pretitle,
  title,
  description,
  buttonText,
  onButtonClick,
  align = "center",
  boxes,
}) => {
  return (
    <div
      className={`w-full px-6 mb-24 md:pt-[10rem] ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {/* PRETITLE */}
      {pretitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-widest text-[#fafff3]/60 mb-3"
        >
          {pretitle}
        </motion.div>
      )}

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#fafff3] leading-[0.95] tracking-tight text-4xl md:text-7xl font-medium"
      >
        {title}
      </motion.div>

      {/* DESCRIPTION */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="my-8 text-[#fafff3]/70 text-base md:text-xl"
        >
          {description}
        </motion.p>
      )}

      {/* BOXES */}
      {boxes && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {boxes.map((box, i) => (
            <div key={i} className="space-y-4">
              {/* MEDIA */}
              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-black/20">
                {box.media.endsWith(".mp4") ? (
                  <video
                    src={box.media}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={box.media}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* TEXT */}
              <div>
                <div className="text-sm text-[#fafff3]/60">
                  {box.smallText}
                </div>
                <div className="text-xl text-[#fafff3] font-medium mt-1">
                  {box.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      {buttonText && (
        <div className="mt-10">
          <Button variant="gradient">{buttonText}</Button>
        </div>
      )}
    </div>
  );
};

export default Articles;