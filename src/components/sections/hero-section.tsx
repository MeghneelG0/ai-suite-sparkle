import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import heroImage from "@/assets/hero-ai-dashboard.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Now with Advanced AI Analytics
              </div>
              
              <h1 className="hero-title">
                Transform Your
                <span className="block">Marketing with</span>
                <span className="block gradient-text">AI Power</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                ADmyBRAND AI Suite revolutionizes your marketing workflow with intelligent automation, 
                predictive analytics, and seamless campaign management. Join 10,000+ brands growing with AI.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">
                  <AnimatedCounter from={0} to={10} suffix="K+" />
                </div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">
                  <AnimatedCounter from={0} to={250} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold">
                  <AnimatedCounter from={0} to={99} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative floating">
              <img
                src={heroImage}
                alt="ADmyBRAND AI Suite Dashboard"
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl flex items-center justify-center border border-primary/30 floating">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-xl flex items-center justify-center border border-accent/30 floating" style={{ animationDelay: "1s" }}>
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}