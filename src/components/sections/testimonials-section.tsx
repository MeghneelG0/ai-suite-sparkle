import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"
import { IconCloud } from "@/components/magicui/icon-cloud"

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "ADmyBRAND AI Suite transformed our marketing strategy completely. We've seen a 300% increase in lead quality and our ROI has never been better.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcus Rodriguez",
    username: "@marcusr",
    body: "The predictive analytics feature alone pays for itself. We can now forecast campaign performance with 95% accuracy.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Johnson",
    username: "@emilyjohnson",
    body: "The automation features save us 20+ hours per week. Our team can now focus on strategy while the AI handles optimization.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "We tried multiple marketing platforms, but nothing comes close to ADmyBRAND's AI capabilities. The insights are game-changing.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    username: "@lisathompson",
    body: "The multi-channel integration is seamless. Managing campaigns across all platforms from one dashboard has streamlined our workflow.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Alex Morgan",
    username: "@alexmorgan",
    body: "ROI increased by 250% in just 3 months. The AI-powered content generation creates copy that converts better than our previous agency work.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
]

// Partner/Technology logos for the icon cloud
const partnerLogos = [
  "https://cdn.simpleicons.org/google/4285F4",
  "https://cdn.simpleicons.org/microsoft/00A4EF", 
  "https://cdn.simpleicons.org/amazon/FF9900",
  "https://cdn.simpleicons.org/meta/1877F2",
  "https://cdn.simpleicons.org/salesforce/00A1E0",
  "https://cdn.simpleicons.org/hubspot/FF7A59",
  "https://cdn.simpleicons.org/mailchimp/FFE01B",
  "https://cdn.simpleicons.org/slack/4A154B",
  "https://cdn.simpleicons.org/shopify/7AB55C",
  "https://cdn.simpleicons.org/wordpress/21759B",
  "https://cdn.simpleicons.org/wix/FAAD4D",
  "https://cdn.simpleicons.org/zapier/FF4A00",
  "https://cdn.simpleicons.org/stripe/635BFF",
  "https://cdn.simpleicons.org/paypal/003087",
  "https://cdn.simpleicons.org/intercom/1F8DED",
  "https://cdn.simpleicons.org/zendesk/03363D",
  "https://cdn.simpleicons.org/atlassian/0052CC",
  "https://cdn.simpleicons.org/adobecreativecloud/DA1F26",
  "https://cdn.simpleicons.org/figma/F24E1E",
  "https://cdn.simpleicons.org/canva/00C4CC"
]

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 4))
const secondRow = reviews.slice(Math.ceil(reviews.length / 4), Math.ceil(reviews.length / 2))
const thirdRow = reviews.slice(Math.ceil(reviews.length / 2), Math.ceil((reviews.length * 3) / 4))
const fourthRow = reviews.slice(Math.ceil((reviews.length * 3) / 4))

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mb-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img 
          className="rounded-full" 
          width="32" 
          height="32" 
          alt={`${name} profile`} 
          src={img}
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white/80">{body}</blockquote>
    </figure>
  )
}

const Marquee3D = () => {
  return (
    <div className="relative flex h-[400px] md:h-[500px] w-full flex-row items-center justify-center gap-4 md:gap-6 overflow-hidden rounded-xl [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4 md:gap-6"
        style={{
          transform:
            "translateX(-25px) translateY(0px) translateZ(-25px) rotateX(10deg) rotateY(-3deg) rotateZ(5deg)",
        }}
      >
        <div className="block md:block">
          <Marquee pauseOnHover vertical className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="block md:block">
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="hidden md:block">
          <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="hidden md:block">
          <Marquee pauseOnHover className="[--duration:25s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Fade gradients for marquee */}
      <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-12 md:h-16 bg-gradient-to-b from-black to-transparent rounded-t-xl z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-black via-black/90 to-transparent rounded-b-xl z-10"></div>
        <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-black to-transparent rounded-l-xl z-10"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-black to-transparent rounded-r-xl z-10"></div>
      </div>
    </div>
  )
}

const IconCloudDemo = () => {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg">
      <div className="flex items-center justify-center w-full h-full max-w-[280px] max-h-[250px] md:max-w-[320px] md:max-h-[320px] lg:max-w-[400px] lg:max-h-[400px] scale-75 md:scale-90 lg:scale-100">
        <IconCloud images={partnerLogos} />
      </div>
    </div>
  )
}

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col relative z-10" style={{ maxWidth: '80rem' }}>
        {/* Section Header */}
        <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Customer Success
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter leading-tight text-center">
            <span className="dynamic-gradient-text-testimonials">Loved by Marketing</span>
            <span className="block dynamic-gradient-text-testimonials">Teams Worldwide</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Join thousands of satisfied customers who have transformed their marketing
            results with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Mobile-First Layout: Stack on mobile, side-by-side on desktop */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-8 md:mb-16 max-w-7xl mx-auto">
          {/* Left Side - Trusted Partners */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 flex flex-col justify-start h-full">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-white font-medium">Trusted by Leading Companies (fake)</h3>
              <p className="text-slate-400 font-medium max-w-md mx-auto lg:mx-0">
                Seamlessly integrate with the tools your team already uses and loves. 
              </p>
            </div>
            <div className="flex justify-center items-center min-h-[250px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden w-full">
              <div className="flex justify-center items-center w-full max-w-[280px] h-[250px] md:max-w-[320px] md:h-[320px] lg:max-w-[400px] lg:h-[400px] mx-auto">
                <IconCloudDemo />
              </div>
            </div>
          </div>

          {/* Right Side - Customer Reviews */}
          <div className="space-y-6 md:space-y-8 flex flex-col">
            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-white">What Our Customers Say</h3>
              <p className="text-slate-400 font-medium max-w-md mx-auto lg:mx-0">
                Real feedback from marketing teams who've transformed their results.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-full">
                <Marquee3D />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-slate-400 font-medium">
            <div>⭐ 4.9/5 on G2</div>
            <div>⭐ 4.8/5 on Capterra</div>
            <div>⭐ 5/5 on ProductHunt</div>
          </div>
        </div>
      </div>
      
      {/* Smooth fade transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent via-black/80 to-black z-10"></div>
    </section>
  )
}