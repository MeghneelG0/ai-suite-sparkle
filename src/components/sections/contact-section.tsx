import { Mail, Phone, MapPin, Clock, Sparkles, MessageCircle, Calendar, Headphones, Users } from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"
import { MagicCard } from "@/components/ui/magic-card"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

export const ContactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />

      <div className="container mx-auto px-4 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight text-center">
            <span className="dynamic-gradient-text-contact">Ready to Transform</span>
            <span className="block dynamic-gradient-text-contact">Your Marketing?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using ADmyBRAND AI Suite to
            revolutionize their marketing strategy and achieve unprecedented growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
          {/* Bento Grid - Contact Options */}
          <div className="space-y-8">
            <div className="text-left">
              <h3 className="text-2xl font-medium tracking-tight text-white mb-4">Get in Touch</h3>
              <p className="text-white/70 text-lg mb-8">
                Choose the best way to reach us and start your journey with ADmyBRAND AI Suite.
              </p>
            </div>
            
            <BentoGrid className="lg:grid-rows-3 max-w-2xl auto-rows-[10rem]">
              <BentoCard
                name="Email Support"
                className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
                }
                Icon={Mail}
                description="Get detailed responses from our support team within 24 hours"
                href="mailto:hello@admybrand.ai"
                cta="Send Email"
              />
              <BentoCard
                name="Live Chat"
                className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-60" />
                }
                Icon={MessageCircle}
                description="Instant support available 24/7 for urgent queries"
                href="#"
                cta="Start Chat"
              />
              <BentoCard
                name="Schedule Call"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-60" />
                }
                Icon={Calendar}
                description="Book a personalized demo with our experts"
                href="#"
                cta="Book Demo"
              />
              <BentoCard
                name="Phone Support"
                className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-60" />
                }
                Icon={Phone}
                description="Direct line to our sales team"
                href="tel:+15551234567"
                cta="Call Now"
              />
              <BentoCard
                name="Community"
                className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-60" />
                }
                Icon={Users}
                description="Join our community forum"
                href="#"
                cta="Join Forum"
              />
            </BentoGrid>
          </div>

          {/* Magic Card - Contact Form */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-md">
              {/* Header outside MagicCard to match left side alignment */}
              <div className="text-left mb-8">
                <h3 className="text-2xl font-medium tracking-tight text-white mb-4">Get Started Today</h3>
                <p className="text-white/70 mb-8">
                  Ready to transform your marketing? Let's talk about your needs.
                </p>
              </div>
              
              <MagicCard
                gradientColor="#262626"
                gradientFrom="#9E7AFF"
                gradientTo="#FE8BBB"
                className="p-0 rounded-2xl"
              >
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Company Name</label>
                        <input
                          type="text"
                          placeholder="Your Company"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Your Role</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                          <option value="" className="bg-gray-800">Select your role</option>
                          <option value="ceo" className="bg-gray-800">CEO/Founder</option>
                          <option value="marketing" className="bg-gray-800">Marketing Manager</option>
                          <option value="director" className="bg-gray-800">Marketing Director</option>
                          <option value="other" className="bg-gray-800">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your marketing goals and challenges..."
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      ></textarea>
                    </div>
                    
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                      Send Message
                      <Sparkles className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-white/70">
                123 Innovation Street<br />
                San Francisco, CA 94105
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-white mb-2">Business Hours</h4>
              <p className="text-white/70">
                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                Saturday: 10:00 AM - 4:00 PM PST
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-4">
                <Headphones className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-white/70">
                Our support team is always here to help you succeed with our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}