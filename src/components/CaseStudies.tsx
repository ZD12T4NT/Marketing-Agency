"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionIntro from "./SectionIntro";

const data = [
  {
    title: "NodPod",
    description:
      "We executed a powerful customer retention strategy through automated email flows, lifecycle segmentation, and personalized campaigns.",
    stats: [
      { label: "Increase in Website Traffic", value: "178%" },
      { label: "Increase in Customer Lifetime Value", value: "56%" },
      { label: "Increase in ROAS", value: "340%" },
      { label: "Decrease in Customer Acquisition Cost", value: "91%" },
    ],
    image: "/nodPod.jpg",
  },
  {
    title: "Bearfruit",
    description:
      "We helped Bearfruit scale their paid acquisition through creative testing, landing page optimization, and performance-driven ad strategies.",
    stats: [
      { label: "Increase in Conversion Rate", value: "82%" },
      { label: "Increase in Revenue", value: "214%" },
      { label: "Increase in ROAS", value: "276%" },
      { label: "Decrease in Bounce Rate", value: "39%" },
    ],
    image: "/bearFruit.jpg",
  },
  {
    title: "Itzy Ritzy",
    description:
      "We redesigned the customer journey and implemented a full-funnel marketing strategy to drive consistent growth and repeat purchases.",
    stats: [
      { label: "Increase in Repeat Purchases", value: "63%" },
      { label: "Increase in AOV", value: "41%" },
      { label: "Increase in Email Revenue", value: "189%" },
      { label: "Increase in Engagement Rate", value: "72%" },
    ],
    image: "/bag.jpg",
  },
  {
    title: "Veloura",
    description:
      "We built a high-converting brand experience with a focus on UX, storytelling, and conversion optimization across all digital touchpoints.",
    stats: [
      { label: "Increase in Conversion Rate", value: "97%" },
      { label: "Increase in Time on Site", value: "58%" },
      { label: "Increase in Revenue", value: "167%" },
      { label: "Decrease in Cart Abandonment", value: "46%" },
    ],
    image: "/velouraMarketing.jpg", // add this asset
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full px-6 mt-20 pt-10 md:pt-[10rem]">
      <SectionIntro
        title={
            <>
            We Help <br />
            Companies <span className="italic font-serif font-light ">Grow</span>
            </>
        }

        description={
            <>
            A collection of projects we helped accelerate  
            We Helped <br />
            Companies <span className="italic font-serif font-light ">years ahead.</span>
            </>
            }
        buttonText="Case Studies"
        />
      {/* Cards */}

        <div className="relative max-w-[70rem] mx-auto mt-10">
            <div className="flex items-center justify-center gap-1">
                {data.map((item, index) => {
                const isActive = index === active;

                return (
                    <motion.div
                    key={index}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    animate={{
                        width: isActive ? 320 : 220,
                        scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`relative h-[350px] rounded-2xl overflow-hidden cursor-pointer border ${
                        isActive
                        ? "border-lime-400"
                        : "border-white/10"
                    }`}
                    >
                    {/* IMAGE (always present if exists) */}
                    {item.image && (
                        <img
                        src={item.image}
                        className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}

                    {/* DARK OVERLAY (for readability) */}
                    {isActive && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md border border-white/10" />
                    )}

                    {/* ACTIVE CONTENT (ON TOP OF IMAGE) */}
                    {isActive && (
                        <motion.div
                        className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10"
                        initial={false}
                        animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        >
                        <div>
                            <div className="text-lg font-semibold mb-2">
                            {item.title}
                            </div>

                            {item.description && (
                            <p className="text-sm text-white/70">
                                {item.description}
                            </p>
                            )}
                        </div>

                        {item.stats && (
                            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                            {item.stats.map((s, i) => (
                                <div key={i}>
                                <div className="text-lime-400 font-semibold">
                                    {s.value}
                                </div>
                                <div className="text-white/60">{s.label}</div>
                                </div>
                            ))}
                            </div>
                        )}

                        <button className="mt-4 text-sm underline">
                            Learn more →
                        </button>
                        </motion.div>
                    )}

                    {/* COLLAPSED LABEL */}
                    {!isActive && (
                        <div className="absolute bottom-3 left-3 text-white text-sm flex items-center gap-2 z-10">
                        <span className="w-5 h-5 rounded-full border flex items-center justify-center">
                            +
                        </span>
                        {item.title}
                        </div>
                    )}
                    </motion.div>
                );
                })}
            </div>

            {/* Arrows */}
             {/* LEFT ARROW */}
            <button
                onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
                className="absolute -left-14 top-1/2 -translate-y-1/2 
                w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-md"
            >
                ←
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={() =>
                setActive((prev) => Math.min(prev + 1, data.length - 1))
                }
                className="absolute -right-14 top-1/2 -translate-y-1/2 
                w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-md"
            >
                →
            </button>
        </div>

      <button
        onClick={() =>
          setActive((prev) => Math.min(prev + 1, data.length - 1))
        }
        className="absolute right-0 w-10 h-10 rounded-full bg-black/50 text-white"
      >
        →
      </button>
    </div>
  );
}