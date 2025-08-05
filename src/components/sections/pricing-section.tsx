import { PricingCard } from "@/components/ui/pricing-card"
import { Sparkles } from "lucide-react"

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
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>
          
          <h2 className="section-title gradient-text">
            Choose Your
            <span className="block">Growth Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. All plans include our core AI features 
            with no hidden fees or long-term commitments.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 p-8 glass rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 gradient-text">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground">
            Not satisfied? Get a full refund within 30 days, no questions asked. 
            We're confident you'll love ADmyBRAND AI Suite.
          </p>
        </div>
      </div>
    </section>
  )
}