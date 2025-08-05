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
    <section className="py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-card/5 to-background/50" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powerful Features
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            Everything You Need to
            <span className="block text-primary">Dominate Your Market</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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

        {/* Feature Comparison */}
        <div className="mt-24 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose ADmyBRAND AI Suite?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare our advanced features with traditional marketing tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h4 className="text-lg font-semibold text-muted-foreground">Traditional Tools</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Manual campaign setup</div>
                <div>Basic reporting</div>
                <div>Limited integrations</div>
                <div>Reactive optimization</div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-lg font-semibold text-primary">ADmyBRAND AI Suite</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  AI-powered automation
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Predictive analytics
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Universal integrations
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Proactive optimization
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Your Results</h4>
              <div className="space-y-2 text-sm">
                <div className="text-accent font-medium">↗ 250% ROI increase</div>
                <div className="text-accent font-medium">↗ 80% time saved</div>
                <div className="text-accent font-medium">↗ 95% accuracy</div>
                <div className="text-accent font-medium">↗ 24/7 optimization</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to experience the future of marketing?
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 cursor-pointer group transition-all duration-300">
            <span className="text-primary font-medium">Explore All Features</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}