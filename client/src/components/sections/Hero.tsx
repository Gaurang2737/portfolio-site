import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Future
              </span>{" "}
              with Technology
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I'm launching a revolutionary product that will transform how you work with data.
              Sign up to be the first to experience it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto font-semibold"
                size="lg"
              >
                <a href="#waitlist">Join Waitlist</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-6 py-6 h-auto font-semibold"
                size="lg"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-md relative">
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                  {/* Data visualization inspired elements */}
                  <div className="col-span-3 bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Total Users</div>
                      <div className="text-2xl font-bold">1,894</div>
                    </div>
                    <div className="h-12 w-20 bg-primary/10 rounded-md relative overflow-hidden">
                      <div 
                        className="absolute bottom-0 w-full" 
                        style={{ 
                          height: '70%', 
                          background: 'linear-gradient(90deg, var(--primary), hsl(271, 91%, 65%))' 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="col-span-2 bg-white rounded-xl shadow-sm p-4">
                    <div className="text-xs text-gray-500">This Week</div>
                    <div className="mt-2 flex items-end h-12 space-x-1">
                      {/* Bar chart visualization */}
                      <div className="w-1/7 bg-primary/30 rounded-t-sm" style={{ height: '40%' }}></div>
                      <div className="w-1/7 bg-primary/50 rounded-t-sm" style={{ height: '60%' }}></div>
                      <div className="w-1/7 bg-primary/70 rounded-t-sm" style={{ height: '30%' }}></div>
                      <div className="w-1/7 bg-primary/90 rounded-t-sm" style={{ height: '70%' }}></div>
                      <div className="w-1/7 bg-primary rounded-t-sm" style={{ height: '90%' }}></div>
                      <div className="w-1/7 bg-purple-500/70 rounded-t-sm" style={{ height: '50%' }}></div>
                      <div className="w-1/7 bg-purple-500/90 rounded-t-sm" style={{ height: '40%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-center items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-emerald-500 h-5 w-5"
                      >
                        <path d="m18 15-6-6-6 6"/>
                      </svg>
                    </div>
                    <div className="text-xs mt-1 text-center">+24%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
