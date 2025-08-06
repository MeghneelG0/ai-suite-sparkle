import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "motion/react"

const trustedBrands = [
  { name: "BrandOne", logo: "https://img.icons8.com/?size=48&id=36625&format=png" },
  { name: "BrandTwo", logo: "https://img.icons8.com/?size=48&id=oROcPah5ues6&format=png" },
  { name: "BrandThree", logo: "https://img.icons8.com/?size=48&id=108544&format=png" },
  { name: "BrandFour", logo: "https://img.icons8.com/?size=64&id=105888&format=png" },
] as const;

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <LampContainer className="bg-slate-950">
        <div className="container mx-auto px-4 lg:px-6 relative z-50 flex flex-col items-center py-8">
          {/* Lamp-lit Headline */}
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="hero-title text-center w-full max-w-5xl mx-auto mb-8 md:mb-12 lg:mb-20 relative z-60 mt-8 md:mt-16"
          >
            <span 
              className="block dynamic-gradient-text font-medium tracking-tighter leading-tight" 
              style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)', lineHeight: 1.1 }}
            >
              Transform Your Marketing <br className="hidden sm:block" /> 
              <span className="sm:hidden">with AI Intelligence</span>
              <span className="hidden sm:inline">with AI Intelligence</span>
            </span>
          </motion.h1>
        
        {/* Two-column layout below headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start w-full max-w-7xl mx-auto pt-8">
          {/* Left Content */}
          <div className="space-y-10 lg:space-y-16 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-xs lg:text-sm font-medium animate-fade-in-up">
                <Sparkles className="h-3 w-3 lg:h-4 lg:w-4" />
                Now with Advanced AI Analytics
              </div>
              <p className="text-lg lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                ADmyBRAND AI Suite revolutionizes your marketing workflow with intelligent automation, predictive analytics, and seamless campaign management. Unlock growth with next-gen AI.
              </p>
              {/* Partners row */}
              <div className="mt-6 lg:mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 pt-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="text-xs text-muted-foreground mr-2">Partners:</span>
                {trustedBrands.map((brand) => (
                  <img
                    key={brand.name}
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-6 lg:h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl" className="group shadow-xl text-sm lg:text-base">
                Start Free Trial
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group backdrop-blur-md text-sm lg:text-base">
                <Play className="h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            {/* Feature Badges with interactive glow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-left max-w-2xl mx-auto lg:mx-0 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-lg glass transition-all duration-300 hover:scale-105 hover:shadow-glow hover-glow cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs lg:text-sm text-foreground">10,000+ Active Brands</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-lg glass transition-all duration-300 hover:scale-105 hover:shadow-glow hover-glow cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-xs lg:text-sm text-foreground">95% Prediction Accuracy</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-lg glass transition-all duration-300 hover:scale-105 hover:shadow-glow hover-glow cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-xs lg:text-sm text-foreground">SOC 2 Certified Security</span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-lg glass transition-all duration-300 hover:scale-105 hover:shadow-glow hover-glow cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-xs lg:text-sm text-foreground">24/7 Priority Support</span>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-10 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center lg:text-left space-y-1 lg:space-y-2">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={10} suffix="K+" />
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left space-y-1 lg:space-y-2">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={250} suffix="%" />
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">ROI Increase</div>
              </div>
              <div className="text-center lg:text-left space-y-1 lg:space-y-2">
                <div className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter from={0} to={99} suffix="%" />
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Right Content - Hero Image and Floating Stat Cards with interactivity */}
          <div className="relative flex items-center justify-center animate-scale-in mx-auto order-1 lg:order-2 w-full max-w-lg lg:max-w-none">
            <div className="relative w-full lg:max-w-2xl">
              {/* Make the main hero image float gently with its own keyframe */}
              <div className="relative floating-static overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl w-full" style={{ boxShadow: '0 0 60px 0 rgba(80,120,255,0.15)', animation: 'float-static 44s ease-in-out infinite', animationDelay: '2.5s' }}>
                <img
                  src="https://www.heliosz.ai/assets/images/data-analytics-sub-banner.jpg"
                  alt="Data analytics dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              </div>
              
              {/* Floating Elements with only hover glow - Hide on mobile */}
              <div className="hidden lg:flex absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl items-center justify-center border border-white/20 floating shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover-glow cursor-pointer"
                style={{ animation: 'float-gentle-a 36s ease-in-out infinite', animationDelay: '0s' }}>
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <div className="hidden lg:flex absolute -bottom-8 -left-8 w-16 h-16 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl flex-col items-center justify-center border border-white/20 floating shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover-glow cursor-pointer"
                style={{ animation: 'float-gentle-b 36s ease-in-out infinite', animationDelay: '1.5s' }}>
                <div className="w-2 h-2 rounded-full bg-accent mb-1" />
                <div className="text-xs text-muted-foreground font-medium">AI</div>
              </div>
              {/* Additional floating stats - Hide on mobile */}
              <div className="hidden lg:block absolute top-1/4 -left-10 p-4 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 floating shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover-glow cursor-pointer"
                style={{ animation: 'float-gentle-c 36s ease-in-out infinite', animationDelay: '3s' }}>
                <div className="text-sm font-semibold text-primary">+250%</div>
                <div className="text-xs text-muted-foreground">ROI</div>
              </div>
              {/* New floating stat card - Hide on mobile */}
              <div className="hidden lg:block absolute bottom-1/4 -right-12 p-4 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 floating shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover-glow cursor-pointer"
                style={{ animation: 'float-gentle-a 36s ease-in-out infinite', animationDelay: '4.5s' }}>
                <div className="text-sm font-semibold text-primary">Automated</div>
                <div className="text-xs text-muted-foreground">Insights</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </LampContainer>
    </div>
  )
}