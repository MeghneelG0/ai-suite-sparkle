import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "glow"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "glass",
      hover: "glass glass-hover",
      glow: "glass glass-hover animate-glow"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }