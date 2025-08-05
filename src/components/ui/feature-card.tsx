import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./card"

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, className }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 shadow-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow h-full flex flex-col",
          className
        )}
      >
        <CardHeader className="flex flex-col items-center text-center space-y-6 pb-4 flex-shrink-0">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-primary/20">
            <Icon className="h-8 w-8" />
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-3 flex-1 flex flex-col justify-center">
          <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
          <CardDescription className="leading-relaxed text-sm text-white/80">{description}</CardDescription>
        </CardContent>
      </Card>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }