import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Check, Crown, Shield, Bot, Globe, BarChart3 } from "lucide-react"

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
    buttonText: "Start Free Trial",
    popular: false
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
    buttonText: "Contact Sales",
    popular: false
  }
]

export const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/5" />

      <div className="container mx-auto px-4 lg:px-6 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Header */}
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Simple Pricing
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter leading-tight text-center">
            <span className="dynamic-gradient-text-pricing">Choose Your</span>
            <span className="block dynamic-gradient-text-pricing">Growth Plan</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Start free and scale as you grow. All plans include our core AI features
            with no hidden fees or long-term commitments.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto relative z-20">
          <div className="relative text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 z-10">
            <div className="text-xl md:text-2xl font-medium text-primary mb-2 relative z-10">14-Day</div>
            <div className="text-sm text-slate-400 font-medium relative z-10">Free Trial</div>
            <BorderBeam size={200} duration={10} colorFrom="#10b981" colorTo="#06b6d4" borderWidth={1} className="opacity-50" />
          </div>
          <div className="relative text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 z-10">
            <div className="text-xl md:text-2xl font-medium text-primary mb-2 relative z-10">No Setup</div>
            <div className="text-sm text-slate-400 font-medium relative z-10">Fees</div>
            <BorderBeam size={200} duration={10} delay={2} colorFrom="#8b5cf6" colorTo="#f59e0b" borderWidth={1} className="opacity-50" />
          </div>
          <div className="relative text-center p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 z-10">
            <div className="text-xl md:text-2xl font-medium text-primary mb-2 relative z-10">Cancel</div>
            <div className="text-sm text-slate-400 font-medium relative z-10">Anytime</div>
            <BorderBeam size={200} duration={10} delay={4} colorFrom="#ef4444" colorTo="#8b5cf6" borderWidth={1} className="opacity-50" />
          </div>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className="relative animate-scale-in group flex" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className={`h-full w-full bg-card backdrop-blur-sm border-white/10 relative z-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 flex flex-col ${plan.popular ? 'ring-2 ring-primary/20 hover:ring-primary/40' : 'hover:border-white/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-white text-xs md:text-sm font-semibold flex items-center gap-2 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <Crown className="h-3 w-3 md:h-4 md:w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl md:text-2xl font-medium text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-400 font-medium">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-medium text-primary">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-slate-400 font-medium">/{plan.period}</span>}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-slate-300 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button variant={plan.popular ? "default" : "outline"} size="lg" className="w-full">
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>

              {plan.popular && (
                <BorderBeam 
                  size={400} 
                  duration={8} 
                  colorFrom="#3b82f6" 
                  colorTo="#8b5cf6" 
                  className="z-0 group-hover:opacity-100 opacity-80 transition-opacity duration-300" 
                />
              )}

              {!plan.popular && (
                <BorderBeam 
                  size={300} 
                  duration={12} 
                  colorFrom="#6b7280" 
                  colorTo="#9ca3af" 
                  borderWidth={1} 
                  className="opacity-40 z-0 group-hover:opacity-60 transition-opacity duration-300" 
                />
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-12 md:mb-16 z-20">
          <div className="text-center mb-6 md:mb-8 relative z-10">
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-white">Enterprise Features</h3>
            <p className="text-slate-400 font-medium">Additional capabilities for Enterprise customers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-sm md:text-base">Advanced Security</h4>
              <p className="text-xs md:text-sm text-slate-400 font-medium">SAML SSO, audit logs</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-sm md:text-base">Custom AI Models</h4>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Industry-specific algorithms</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-sm md:text-base">White-label</h4>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Branded interface</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h4 className="font-medium text-white text-sm md:text-base">24/7 Support</h4>
              <p className="text-xs md:text-sm text-slate-400 font-medium">Priority assistance</p>
            </div>
          </div>
          <BorderBeam size={600} duration={15} colorFrom="#3b82f6" colorTo="#06b6d4" borderWidth={1} className="opacity-30" />
        </div>

        {/* Guarantee */}
        <div className="relative text-center p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl mx-auto z-20">
          <h3 className="text-lg md:text-xl font-medium mb-4 text-primary relative z-10">30-Day Money-Back Guarantee</h3>
          <p className="text-slate-400 font-medium mb-6 relative z-10">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium relative z-10">
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
              99.9% Uptime
            </div>
          </div>
          <BorderBeam size={450} duration={6} colorFrom="#10b981" colorTo="#3b82f6" borderWidth={2} className="opacity-70" />
          <BorderBeam size={450} duration={6} delay={3} colorFrom="#3b82f6" colorTo="#8b5cf6" borderWidth={1.5} className="opacity-50" />
        </div>
      </div>
    </section>
  )
}