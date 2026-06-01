import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "gradient";
};

export default function Button({
  children,
  onClick,
  className,
  variant = "default",
}: ButtonProps) {
  const baseStyles =
    "px-9 py-3 rounded-full transition backdrop-blur-md";

  const variants = {
    default: `
      border border-[#1a2209] border-2 text-[#1a2209]
      bg-transparent
      hover:bg-[#1a2209] hover:text-[#C0F53D]
      font-medium
    `,
    gradient: "", // handled separately
  };

    // gradient version uses wrapper
    if (variant === "gradient") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="group relative inline-block rounded-full p-[px]"
      >
        {/* animated border */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#00ff88,#C0F53D,#a3ff7a,#00ff88)] blur-sm opacity-80 group-hover:scale-105 transition-all duration-300" />

        {/* inner button */}
        <button
          onClick={onClick}
          className={clsx(
            baseStyles,
            "relative z-10 bg-[#000] text-[#fafff3] group-hover: transition-all duration-300",
            className
          )}
        >
          {children}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      onClick={onClick}
      className={clsx(baseStyles, variants.default, className)}
    >
      {children}
    </motion.button>
  );
}