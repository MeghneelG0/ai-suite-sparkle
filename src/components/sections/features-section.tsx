import {
  Brain,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Sparkles,
  Bot
} from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your marketing data to uncover hidden insights and predict future trends with 95% accuracy."
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Intelligent automation workflows that optimize your campaigns in real-time, reducing manual work by 80% while improving performance."
  },
  {
    icon: TrendingUp,
    title: "Predictive ROI",
    description: "Forecast campaign performance and budget allocation with our proprietary AI models, maximizing your return on investment."
  },
  {
    icon: Globe,
    title: "Multi-Channel Integration",
    description: "Seamlessly connect and manage campaigns across all major platforms - Google Ads, Facebook, Instagram, LinkedIn, and more."
  },
  {
    icon: Bot,
    title: "Smart Content Generation",
    description: "AI-powered content creation for ads, emails, and social media posts that converts 3x better than traditional copy."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection for your data."
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Beautiful, customizable dashboards that provide instant insights into your marketing performance and KPIs."
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "AI-driven recommendations for budget optimization, audience targeting, and creative improvements based on your data."
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-20">
        <video
          src="https://videos.pexels.com/video-files/29344546/12647214_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'hue-rotate(180deg) saturate(1.2)' }}
        />
      </div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/80" />

      <div className="container mx-auto px-4 lg:px-6 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Section Header */}
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powerful Features
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter leading-tight text-center">
            <span className="dynamic-gradient-text-features">Everything You Need to</span>
            <span className="block dynamic-gradient-text-features">Dominate Your Market</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Our comprehensive AI suite provides all the tools you need to create, manage,
            and optimize your marketing campaigns with unprecedented precision and efficiency.
          </p>
        </div>

        {/* Features Grid - Mobile-optimized with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full min-h-[280px] md:min-h-[320px]"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 font-medium mb-6 text-lg">
            Ready to experience the future of marketing?
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 hover:bg-white/10 cursor-pointer group transition-all duration-300">
            <span className="text-primary font-medium">Explore All Features</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}