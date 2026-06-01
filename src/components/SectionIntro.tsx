"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type SectionIntroProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  align?: "left" | "center";
  textColor?: string;
};

const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  align = "center",
  textColor = "#FAFFF3",
}) => {
  return (
    <div
      className={`w-full max-w-3xl mb-24 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ color: textColor }}
        className="leading-[0.95] tracking-tight text-4xl md:text-8xl font-normal"
      >
        {title}
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ color: textColor }}
          className="my-8 text-base md:text-xl"
        >
          {description}
        </motion.p>
      )}

      {buttonText && (
        <Button variant="gradient" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default SectionIntro;