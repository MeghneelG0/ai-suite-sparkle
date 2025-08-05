import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"
import { GlassCard } from "@/components/ui/glass-card"

export const ContactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </div>
          
          <h2 className="section-title gradient-text">
            Ready to Transform
            <span className="block">Your Marketing?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using ADmyBRAND AI Suite to 
            revolutionize their marketing strategy and achieve unprecedented growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <GlassCard variant="hover" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground mb-2">Get in touch with our team</p>
                  <a href="mailto:hello@admybrand.ai" className="text-primary hover:underline">
                    hello@admybrand.ai
                  </a>
                </div>
              </GlassCard>

              <GlassCard variant="hover" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground mb-2">Speak with our sales team</p>
                  <a href="tel:+15551234567" className="text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </GlassCard>

              <GlassCard variant="hover" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground mb-2">Our headquarters</p>
                  <p className="text-foreground">
                    123 Innovation Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </GlassCard>

              <GlassCard variant="hover" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground mb-2">When we're available</p>
                  <p className="text-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday: 10:00 AM - 4:00 PM PST
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Additional CTAs */}
            <div className="space-y-4">
              <div className="text-center p-6 glass rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Need immediate assistance?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our 24/7 support team is here to help
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors">
                    Live Chat
                  </button>
                  <button className="flex-1 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors">
                    Help Center
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}