import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap, Brain, Globe, Shield, ArrowRight } from "lucide-react";

// Data structure for the value stream
const valueStreamData = [
  {
    id: "problem-1",
    problem: "Manual Campaign Setup",
    solution: {
      title: "AI-Powered Automation",
      description: "Intelligent campaign creation with automated targeting, budget optimization, and creative generation. Set up campaigns in minutes, not hours.",
      icon: Zap,
      color: "from-blue-500/20 to-purple-500/20"
    },
    result: {
      value: 80,
      unit: "%",
      label: "Time Saved",
      description: "Reduce campaign setup time from hours to minutes"
    }
  },
  {
    id: "problem-2",
    problem: "Basic Reporting",
    solution: {
      title: "Predictive Analytics",
      description: "Advanced AI analytics that predict campaign performance, identify trends, and provide actionable insights before they happen.",
      icon: Brain,
      color: "from-purple-500/20 to-pink-500/20"
    },
    result: {
      value: 95,
      unit: "%",
      label: "Prediction Accuracy",
      description: "Forecast campaign performance with unprecedented precision"
    }
  },
  {
    id: "problem-3",
    problem: "Limited Integrations",
    solution: {
      title: "Universal Platform",
      description: "Seamlessly connect with all major marketing platforms - Google Ads, Facebook, Instagram, LinkedIn, TikTok, and more through a single dashboard.",
      icon: Globe,
      color: "from-green-500/20 to-blue-500/20"
    },
    result: {
      value: 12,
      unit: "+",
      label: "Platforms Connected",
      description: "Manage all your campaigns from one unified interface"
    }
  },
  {
    id: "problem-4",
    problem: "Reactive Optimization",
    solution: {
      title: "Proactive AI Optimization",
      description: "AI continuously monitors and optimizes your campaigns in real-time, making adjustments before performance drops occur.",
      icon: TrendingUp,
      color: "from-orange-500/20 to-red-500/20"
    },
    result: {
      value: 250,
      unit: "%",
      label: "ROI Increase",
      description: "Achieve significantly higher returns on your marketing investment"
    }
  }
];

export const ValueStreamSection = () => {
  const [activeProblem, setActiveProblem] = useState(0);

  const currentData = valueStreamData[activeProblem];
  const SolutionIcon = currentData.solution.icon;

  return (
    <section className="py-32 relative overflow-hidden section-transition section-fade-in">
      {/* Top Gradient Overlay for Smooth Transition */}
      <div className="section-overlay-top" />
      {/* Bottom Gradient Overlay for Smooth Transition */}
      <div className="section-overlay-bottom" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Value Stream Flow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            From Problems to Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            See how ADmyBRAND AI Suite transforms traditional marketing challenges into powerful opportunities
          </p>
        </div>

        {/* Interactive Value Stream */}
        <div className="relative grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* Column 1: Problems */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white/60 mb-6 text-center">Traditional Challenges</h3>
              <div className="space-y-3">
                {valueStreamData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      id={item.id}
                      variant={activeProblem === index ? "default" : "outline"}
                      className={`w-full justify-start p-4 h-auto text-left transition-all duration-300 ${
                        activeProblem === index
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-primary"
                          : "bg-white/5 hover:bg-white/10 border-white/20 text-white/70 hover:text-white"
                      }`}
                      onClick={() => setActiveProblem(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activeProblem === index ? "bg-primary-foreground" : "bg-white/40"
                        }`} />
                        <span className="font-medium">{item.problem}</span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">AI-Powered Solutions</h3>
              <div className="h-full flex items-center">
                <Card id="solution-card" className="w-full bg-gradient-to-br from-black/70 via-gray-900/60 to-gray-800/50 backdrop-blur-xl border border-white/20 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <SolutionIcon className="h-6 w-6 text-primary" />
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProblem}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardTitle className="text-xl font-bold text-white">
                          {currentData.solution.title}
                        </CardTitle>
                      </motion.div>
                    </AnimatePresence>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeProblem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white/80 text-sm leading-relaxed"
                      >
                        {currentData.solution.description}
                      </motion.p>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Column 3: Results */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-400 mb-6 text-center">Your Results</h3>
              <div className="h-full flex items-center">
                <Card id="result-card" className="w-full bg-gradient-to-br from-green-400/10 to-emerald-400/10 backdrop-blur-xl border border-green-400/20 shadow-xl">
                  <CardHeader className="text-center pb-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProblem}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-2"
                      >
                        <div className="text-4xl font-bold text-green-400">
                          <CountUp
                            end={currentData.result.value}
                            duration={1.5}
                            separator=","
                          />
                          {currentData.result.unit}
                        </div>
                        <div className="text-lg font-semibold text-white">
                          {currentData.result.label}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeProblem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-white/70 text-sm text-center leading-relaxed"
                      >
                        {currentData.result.description}
                      </motion.p>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Animated Connection Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="relative h-full">
              {/* Arrow from Problem to Solution */}
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 translate-x-1/3">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>

              {/* Arrow from Solution to Result */}
              <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 w-1/3 h-0.5 bg-gradient-to-r from-green-400/50 to-transparent" />
              <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 translate-x-1/3">
                <ArrowRight className="h-4 w-4 text-green-400" />
              </div>
            </div>
          </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-lg group-hover:text-white transition-colors">
              Start Your AI Transformation Today
            </span>
            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};