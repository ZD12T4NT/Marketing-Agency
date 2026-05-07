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
    "px-10 py-3 rounded-full transition backdrop-blur-md";

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
      <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-[#C0F53D] to-green-500">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onClick={onClick}
          className={clsx(
            baseStyles,
            "bg-[#000] text-[#fafff3] hover:bg-[#C0F53D] hover:text-[#1a2209]",
            className
          )}
        >
          {children}
        </motion.button>
      </div>
    );
  }``

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