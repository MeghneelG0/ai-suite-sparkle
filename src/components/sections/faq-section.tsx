import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Sparkles, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import * as React from "react"

// Custom AccordionTrigger with controlled transitions
const StaticAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between font-medium hover:no-underline transition-colors duration-300 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
StaticAccordionTrigger.displayName = "StaticAccordionTrigger"

// Custom AccordionContent with smooth dropdown transition
const StaticAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
StaticAccordionContent.displayName = "StaticAccordionContent"

const faqs = [
  {
    question: "How does the AI-powered analytics work?",
    answer: "Our advanced machine learning algorithms analyze your marketing data across all channels to identify patterns, predict trends, and provide actionable insights. The AI continuously learns from your campaigns to improve recommendations over time."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite integrates with over 50+ marketing platforms including Google Ads, Facebook, Instagram, LinkedIn, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore all the AI-powered features and see the results for yourself before making any commitment."
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models have been trained on billions of data points and consistently achieve 95%+ accuracy in campaign performance predictions. The accuracy improves over time as the AI learns from your specific business patterns."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 customer support via chat and email. Professional and Enterprise plans include priority support and dedicated account managers. We also offer comprehensive documentation, video tutorials, and regular training webinars."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Security is our top priority. We use enterprise-grade encryption, are SOC 2 compliant, and follow GDPR guidelines. Your data is stored in secure, redundant data centers and we never share your information with third parties."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or long-term commitments. If you cancel, you'll continue to have access to your account until the end of your current billing period."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes! Our Enterprise plan includes custom AI models, white-label options, dedicated infrastructure, and custom integrations. Contact our sales team to discuss your specific requirements and get a tailored solution."
  }
]

export const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/5" />

      <div 
        className="container mx-auto px-6 flex flex-col relative z-10" 
        style={{ maxWidth: '80rem', transition: 'none', width: '100%' }}
      >
        {/* Section Header */}
        <div className="text-center space-y-8 mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight text-center">
            <span className="dynamic-gradient-text-features">Got Questions?</span>
            <span className="block dynamic-gradient-text-features">We've Got Answers</span>
          </h2>

          <p className="text-xl text-white font-bold max-w-4xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite.
            Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion - Smooth Transitions */}
        <div className="max-w-4xl mx-auto mb-16 w-full" style={{ minWidth: '100%' }}>
          <Accordion type="single" collapsible className="space-y-6 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 pb-6 w-full"
              >
                <StaticAccordionTrigger className="text-left text-xl font-bold text-white hover:text-primary py-0 w-full">
                  {faq.question}
                </StaticAccordionTrigger>
                <StaticAccordionContent className="text-white/70 leading-relaxed pt-4 text-base w-full">
                  {faq.answer}
                </StaticAccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Still have questions?</h3>
          <p className="text-white/70 mb-8 text-lg">
            Our team is here to help you get the most out of ADmyBRAND AI Suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors text-lg underline underline-offset-4">
              Contact Support
            </button>
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors text-lg underline underline-offset-4">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}