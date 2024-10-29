"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function HeroButton({
  children,
  className,
  variant = "primary",
  ...props
}: HeroButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative group px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300",
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        "shadow-[0_0_0_3px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
          variant === "primary" && "bg-primary/20",
          variant === "secondary" && "bg-secondary/20"
        )}
        initial={false}
        animate={{
          scale: [1, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.button>
  );
}