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
        <div className="flex flex-col items-center text-center space-y-6 p-6">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-primary/20">
            <Icon className="h-8 w-8" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
          </div>
        </div>
      </GlassCard>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }