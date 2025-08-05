import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"

export interface TestimonialCardProps {
  name: string
  title: string
  company: string
  content: string
  rating: number
  avatar: string
  className?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, title, company, content, rating, avatar, className }, ref) => {
    return (
      <GlassCard
        ref={ref}
        variant="hover"
        className={cn("h-full flex flex-col", className)}
      >
        <div className="flex-1 space-y-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          
          <blockquote className="text-foreground leading-relaxed">
            "{content}"
          </blockquote>
        </div>
        
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border/20">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{title}</div>
            <div className="text-sm text-primary">{company}</div>
          </div>
        </div>
      </GlassCard>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }