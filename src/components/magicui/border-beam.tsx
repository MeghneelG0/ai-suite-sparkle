"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  borderWidth = 1.5,
}: BorderBeamProps) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[border:1px_solid_transparent]",
        "z-0", // Ensure beam is behind card content
        className
      )}
      style={{
        background: `linear-gradient(hsl(var(--card)), hsl(var(--card))) padding-box, 
                    conic-gradient(from var(--border-angle), transparent 80%, ${colorFrom} 86%, ${colorTo} 90%, ${colorFrom} 94%, transparent) border-box`,
        borderRadius: "inherit", // Match parent's border radius
      } as React.CSSProperties}
      animate={{
        "--border-angle": ["0deg", "360deg"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    />
  );
};
