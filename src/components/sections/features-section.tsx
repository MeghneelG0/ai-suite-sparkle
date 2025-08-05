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
    <section className="py-32 relative overflow-hidden section-transition section-fade-in">
      {/* Seamless Transition Fade Overlay - This eliminates the hard line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10"
      />
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      <div className="container mx-auto px-6 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Section Header */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powerful Features
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-center">
            <span className="dynamic-gradient-text">Everything You Need to</span>
            <span className="block dynamic-gradient-text">Dominate Your Market</span>
          </h2>

          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create, manage,
            and optimize your marketing campaigns with unprecedented precision and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>



        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-white/80 mb-6 text-lg">
            Ready to experience the future of marketing?
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 hover:bg-white/10 cursor-pointer group transition-all duration-300">
            <span className="text-primary font-medium">Explore All Features</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}