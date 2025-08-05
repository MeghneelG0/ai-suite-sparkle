import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sparkles } from "lucide-react"

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
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          
          <h2 className="section-title gradient-text">
            Got Questions?
            <span className="block">We've Got Answers</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass glass-hover rounded-xl border border-border/40 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 glass rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 gradient-text">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you get the most out of ADmyBRAND AI Suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover cursor-pointer group">
              <span className="text-primary font-medium">Contact Support</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover cursor-pointer group">
              <span className="text-primary font-medium">Schedule Demo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}