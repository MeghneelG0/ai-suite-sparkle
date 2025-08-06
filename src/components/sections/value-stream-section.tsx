import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap, Brain, Globe, Shield } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

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
  const [beamsReady, setBeamsReady] = useState(false);

  // Refs for animated beams
  const containerRef = useRef<HTMLDivElement>(null);
  const problemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const solutionCardRef = useRef<HTMLDivElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const currentData = valueStreamData[activeProblem];
  const SolutionIcon = currentData.solution.icon;

  // Ensure beams are ready after initial render and refs are set
  useEffect(() => {
    const timer = setTimeout(() => {
      setBeamsReady(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Reset and trigger beam recalculation when active problem changes
  const handleProblemChange = (index: number) => {
    setActiveProblem(index);
    // Brief delay to let the component update, then trigger beam recalculation
    setBeamsReady(false);
    setTimeout(() => {
      setBeamsReady(true);
    }, 100);
  };

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden section-transition section-fade-in">
      {/* Smooth fade transition from previous section */}
      <div className="section-fade-transition-in"></div>
      
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
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-6 dynamic-gradient-text-features">
            From Problems to Solutions
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            See how ADmyBRAND AI Suite transforms traditional marketing challenges into powerful opportunities
          </p>
        </div>

        {/* Interactive Value Stream - Improved spacing and alignment */}
        <div
          ref={containerRef}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-center"
        >

            {/* Column 1: Problems - Increased spacing for symmetry */}
            <div className="space-y-4 flex flex-col justify-center min-h-[300px] lg:min-h-[500px] mt-8 lg:mt-16">
              <h3 className="text-xl font-semibold text-white/60 mb-6 lg:mb-8 text-center">Traditional Challenges</h3>
              <div className="space-y-4 lg:space-y-6 flex-1 flex flex-col justify-center">
                {valueStreamData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      ref={(el) => (problemRefs.current[index] = el)}
                      id={item.id}
                      variant={activeProblem === index ? "default" : "outline"}
                      className={`w-full justify-start p-4 h-auto text-left transition-all duration-300 relative z-20 ${
                        activeProblem === index
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-primary"
                          : "!bg-gray-900 hover:!bg-gray-800 border-gray-700/50 text-white/70 hover:text-white hover:border-gray-600/70 backdrop-blur-sm"
                      }`}
                      onClick={() => handleProblemChange(index)}
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

            {/* Column 2: Solutions - Centered vertically */}
            <div className="space-y-4 flex flex-col justify-center min-h-[300px] lg:min-h-[500px] mt-8 lg:mt-16">
              <h3 className="text-xl font-semibold text-primary mb-6 lg:mb-8 text-center">AI-Powered Solutions</h3>
              <div className="flex-1 flex items-center">
                <Card
                  ref={solutionCardRef}
                  id="solution-card"
                  className="w-full h-auto lg:h-64 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-700/30 shadow-2xl shadow-black/50 relative z-20 flex flex-col backdrop-blur-sm"
                >
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
                  <CardContent className="flex-1 flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={activeProblem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white/80 text-sm leading-relaxed overflow-hidden"
                      >
                        {currentData.solution.description}
                      </motion.p>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Column 3: Results - Centered vertically */}
            <div className="space-y-4 flex flex-col justify-center min-h-[300px] lg:min-h-[500px] mt-8 lg:mt-16">
              <h3 className="text-xl font-semibold text-green-400 mb-6 lg:mb-8 text-center">Your Results</h3>
              <div className="flex-1 flex items-center">
                <Card
                  ref={resultCardRef}
                  id="result-card"
                  className="w-full h-auto lg:h-64 bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-green-400/20 shadow-2xl shadow-green-400/10 relative z-20 flex flex-col backdrop-blur-sm"
                >
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
                  <CardContent className="flex-1 flex items-center justify-center">
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

            {/* Animated Beams - Only visible on large screens */}
            <div className="hidden lg:block">
              {beamsReady && containerRef.current && solutionCardRef.current && resultCardRef.current && (
                <>
                  {/* Beams from all problems to solution with directional curvature */}
                  {valueStreamData.map((_, index) => {
                    const isActive = index === activeProblem;
                    const problemRef = problemRefs.current[index];
                    
                    if (!problemRef) return null;
                    
                    // Create a ref object for the AnimatedBeam
                    const refObject = { current: problemRef };
                    
                    // Upper two buttons curve upward (negative curvature)
                    // Lower two buttons curve downward (positive curvature)
                    const curvature = index < 2 ? -60 : 60;
                    
                    return (
                      <AnimatedBeam
                        key={`beam-problem-${index}`}
                        containerRef={containerRef}
                        fromRef={refObject}
                        toRef={solutionCardRef}
                        curvature={curvature}
                        duration={isActive ? 3 : 8}
                        delay={isActive ? 0 : index * 0.5}
                        pathColor={isActive ? "hsl(235 85% 65%)" : "hsl(235 20% 40%)"}
                        pathWidth={isActive ? 3 : 1}
                        pathOpacity={isActive ? 0.6 : 0.2}
                        gradientStartColor={isActive ? "hsl(235 85% 65%)" : "hsl(235 40% 50%)"}
                        gradientStopColor={isActive ? "hsl(270 80% 70%)" : "hsl(270 40% 50%)"}
                        startXOffset={0}
                        endXOffset={0}
                      />
                    );
                  })}

                  {/* Beam from solution to result - Straight line (no curvature) */}
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={solutionCardRef}
                    toRef={resultCardRef}
                    curvature={0}
                    duration={3}
                    delay={0.5}
                    pathColor="hsl(142 76% 36%)"
                    pathWidth={3}
                    pathOpacity={0.6}
                    gradientStartColor="hsl(142 76% 36%)"
                    gradientStopColor="hsl(158 64% 52%)"
                    startXOffset={0}
                    endXOffset={0}
                  />
                </>
              )}
            </div>

            {/* Mobile Flow Indicators - Only visible on small screens */}
            <div className="lg:hidden flex justify-center my-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-1 h-8 bg-gradient-to-b from-transparent to-green-400 rounded-full"></div>
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