"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/[0.07] border border-white/[0.05] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.07)]",
        hover && "transition-all duration-300 hover:bg-white/[0.09] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
}