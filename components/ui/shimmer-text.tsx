"use client";
import { motion } from "motion/react";
import { CSSProperties } from "react";

interface ShimmerTextProps {
  children: string;
  className?: string;
  shimmerColor?: string;
  speed?: number;
}

export function ShimmerText({ 
  children, 
  className = "", 
  shimmerColor = "rgba(255, 255, 255, 0.5)",
  speed = 3
}: ShimmerTextProps) {
  const shimmerStyle: CSSProperties = {
    backgroundImage: `linear-gradient(
      90deg,
      transparent 0%,
      ${shimmerColor} 50%,
      transparent 100%
    )`,
    backgroundSize: "200% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={shimmerStyle}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}

// Gradient shimmer variant with stronger effect
export function GradientShimmerText({ 
  children, 
  className = "",
  gradientFrom = "#3b82f6",
  gradientTo = "#8b5cf6",
  speed = 2.5
}: Omit<ShimmerTextProps, "shimmerColor"> & { gradientFrom?: string; gradientTo?: string }) {
  return (
    <motion.span
      className={`inline-block bg-linear-to-r bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo}, ${gradientFrom})`,
        backgroundSize: "200% auto",
      }}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
