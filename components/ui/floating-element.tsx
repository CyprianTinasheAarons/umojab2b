"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FloatingElementProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
}

export function FloatingElement({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-3xl"
        />
      </motion.div>
    </motion.div>
  );
}