import { PricingCard } from "@/components/ui/pricing-card"
import { Sparkles, Shield, Bot, Globe, BarChart3 } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 3 campaigns",
      "Basic AI analytics",
      "Email support",
      "5 team members",
      "Basic integrations",
      "Monthly reports"
    ],
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$99",
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Unlimited campaigns",
      "Advanced AI analytics",
      "Priority support",
      "25 team members",
      "All integrations",
      "Real-time dashboards",
      "Custom workflows",
      "API access"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom AI models",
      "Unlimited team members",
      "White-label options",
      "Advanced security",
      "SLA guarantee",
      "Custom integrations"
    ],
    buttonText: "Contact Sales"
  }
]

export const PricingSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/5" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-center">
            Choose Your
            <span className="block text-primary">Growth Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features 
            with no hidden fees or long-term commitments. Trusted by 10,000+ marketing teams worldwide.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-2xl font-bold text-primary mb-2">14-Day</div>
            <div className="text-sm text-muted-foreground">Free Trial</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-2xl font-bold text-primary mb-2">No Setup</div>
            <div className="text-sm text-muted-foreground">Fees</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-2xl font-bold text-primary mb-2">Cancel</div>
            <div className="text-sm text-muted-foreground">Anytime</div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Enterprise Features</h3>
            <p className="text-muted-foreground">
              Additional capabilities available for Enterprise customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Advanced Security</h4>
              <p className="text-sm text-muted-foreground">SAML SSO, Advanced audit logs</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Custom AI Models</h4>
              <p className="text-sm text-muted-foreground">Industry-specific algorithms</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">White-label</h4>
              <p className="text-sm text-muted-foreground">Branded interface for agencies</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Dedicated Support</h4>
              <p className="text-sm text-muted-foreground">24/7 priority assistance</p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-primary">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground mb-6">
            Not satisfied? Get a full refund within 30 days, no questions asked. 
            We're confident you'll love ADmyBRAND AI Suite and see immediate results.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              GDPR Ready
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}