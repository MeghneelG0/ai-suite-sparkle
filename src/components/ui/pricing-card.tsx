import * as React from "react"
import { Check, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { GlassCard } from "./glass-card"

export interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  buttonText: string
  className?: string
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ name, price, period, description, features, popular = false, buttonText, className }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant={popular ? "glow" : "hover"}
        className={cn(
          "relative h-full flex flex-col",
          popular && "border-primary/50 ring-2 ring-primary/20",
          className
        )}
      >
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-primary px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2 shadow-xl">
              <Crown className="h-4 w-4" />
              Most Popular
            </div>
          </div>
        )}
        
        <div className="flex-1 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{name}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-primary">{price}</span>
              <span className="text-muted-foreground">/{period}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button
          variant={popular ? "hero" : "outline"}
          size="lg"
          className="w-full mt-6"
        >
          {buttonText}
        </Button>
      </GlassCard>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard }