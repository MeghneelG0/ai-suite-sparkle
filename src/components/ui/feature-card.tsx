import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, className }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="hover"
        className={cn("group cursor-pointer", className)}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </GlassCard>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }