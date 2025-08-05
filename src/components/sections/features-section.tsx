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
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powerful Features
          </div>
          
          <h2 className="section-title gradient-text">
            Everything You Need to
            <span className="block">Dominate Your Market</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides all the tools you need to create, manage, 
            and optimize your marketing campaigns with unprecedented precision and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <p className="text-muted-foreground mb-6">
            Ready to experience the future of marketing?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover cursor-pointer group">
            <span className="text-primary font-medium">Explore All Features</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}