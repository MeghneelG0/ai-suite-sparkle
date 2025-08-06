import {
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Footer = () => {
  return (
    <footer className="relative bg-card/30 border-t border-border/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50" />

      <div className="container mx-auto px-4 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Stay Updated
            </div>

            <h3 className="text-3xl font-bold gradient-text">
              Get the Latest AI Marketing Insights
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 50,000+ marketers who receive our weekly newsletter with AI trends,
              case studies, and exclusive tips to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="glass border-border/40"
              />
              <Button variant="hero" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold gradient-text">
                  ADmyBRAND AI Suite
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Transforming marketing with AI-powered automation, predictive analytics,
                  and intelligent campaign management. Join the future of marketing today.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="glass glass-hover">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="glass glass-hover">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="glass glass-hover">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="glass glass-hover">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-foreground">Product</h5>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'AI Analytics', 'Integrations', 'API Docs', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-foreground">Company</h5>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Investors'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-foreground">Support</h5>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'Status', 'Privacy', 'Terms', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-border/20">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  support@admybrand.ai
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}