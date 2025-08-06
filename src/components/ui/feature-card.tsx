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
        <CardHeader className="flex flex-col items-center text-center space-y-4 md:space-y-6 pb-4 flex-shrink-0 pt-6">
          <div className="p-3 md:p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-primary/20">
            <Icon className="h-6 w-6 md:h-8 md:w-8" />
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4 flex-1 flex flex-col justify-center px-4 md:px-6">
          <CardTitle className="text-lg md:text-xl font-medium text-white leading-tight">{title}</CardTitle>
          <CardDescription 
            className="text-sm md:text-base text-slate-400 font-medium feature-description"
          >
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }