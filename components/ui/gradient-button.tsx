"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "./button";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function GradientButton({
  children,
  className,
  gradientFrom = "from-primary",
  gradientTo = "to-primary/80",
  ...props
}: GradientButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <div className={cn(
        "absolute inset-0 rounded-lg bg-gradient-to-r blur-xl opacity-50 group-hover:opacity-75 transition-opacity",
        gradientFrom,
        gradientTo
      )} />
      <Button
        className={cn(
          "relative bg-gradient-to-r shadow-xl hover:shadow-2xl transition-all duration-300",
          gradientFrom,
          gradientTo,
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}