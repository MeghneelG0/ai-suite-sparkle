import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Marketing Director",
    company: "TechFlow Inc.",
    content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We've seen a 300% increase in lead quality and our ROI has never been better. The AI recommendations are incredibly accurate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    title: "CEO",
    company: "GrowthLabs",
    content: "The predictive analytics feature alone pays for itself. We can now forecast campaign performance with 95% accuracy and allocate our budget more effectively than ever before.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Johnson",
    title: "CMO",
    company: "InnovateCorp",
    content: "The automation features save us 20+ hours per week. Our team can now focus on strategy while the AI handles optimization. It's like having a marketing genius on autopilot.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    title: "Growth Manager",
    company: "ScaleUp Ventures",
    content: "We tried multiple marketing platforms, but nothing comes close to ADmyBRAND's AI capabilities. The insights are game-changing and the interface is beautifully designed.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Thompson",
    title: "Digital Marketing Lead",
    company: "FutureRetail",
    content: "The multi-channel integration is seamless. Managing campaigns across all platforms from one dashboard has streamlined our entire workflow and improved our results dramatically.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Alex Morgan",
    title: "Marketing VP",
    company: "NextGen Solutions",
    content: "ROI increased by 250% in just 3 months. The AI-powered content generation creates copy that converts better than our previous agency work. Absolutely revolutionary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
]

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />

      <div className="container mx-auto px-4 flex flex-col" style={{ maxWidth: '80rem' }}>
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Customer Success
          </div>

          <h2 className="section-title gradient-text">
            Loved by Marketing
            <span className="block">Teams Worldwide</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their marketing
            results with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0">
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-primary/50'
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div>⭐ 4.9/5 on G2</div>
            <div>⭐ 4.8/5 on Capterra</div>
            <div>⭐ 5/5 on ProductHunt</div>
          </div>
        </div>
      </div>
    </section>
  )
}