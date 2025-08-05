import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import heroImage from "@/assets/hero-ai-dashboard.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-background/95" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Minimal Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Now with Advanced AI Analytics
              </div>
              
              <h1 className="hero-title">
                Transform Your
                <span className="block">Marketing with</span>
                <span className="block text-primary">AI Intelligence</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  ADmyBRAND AI Suite revolutionizes your marketing workflow with intelligent automation, 
                  predictive analytics, and seamless campaign management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-foreground">10,000+ Active Brands</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm text-foreground">95% Prediction Accuracy</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-foreground">SOC 2 Certified Security</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm text-foreground">24/7 Priority Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group shadow-xl">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group backdrop-blur-sm">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              <div className="text-center lg:text-left space-y-2">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={10} suffix="K+" />
                </div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={250} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center lg:text-left space-y-2">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={99} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative floating">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="ADmyBRAND AI Suite Dashboard showcasing advanced analytics and campaign management"
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 floating shadow-xl">
              <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-xl flex flex-col items-center justify-center border border-white/20 floating shadow-xl" style={{ animationDelay: "1s" }}>
              <div className="w-3 h-3 rounded-full bg-accent mb-1" />
              <div className="text-xs text-muted-foreground">AI</div>
            </div>
            
            {/* Additional floating stats */}
            <div className="absolute top-1/4 -left-8 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 floating shadow-xl" style={{ animationDelay: "2s" }}>
              <div className="text-sm font-semibold text-primary">+250%</div>
              <div className="text-xs text-muted-foreground">ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}