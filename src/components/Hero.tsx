"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

import { PixelBlast } from './ui/PixelBlast';

export function Hero() {
  const words = ["High–Converting Stores", "Revenue-Driving Stores", "Performance-Built Stores"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#002D31] relative overflow-hidden flex flex-col md:block md:min-h-[500px] md:flex-row md:items-center">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#2A676A"
          patternScale={5.5}
          patternDensity={2}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={1}
          transparent
          edgeFade={0.8}
        />
      </div>
      <div className="max-w-container mx-auto px-4 md:px-8 pt-20 pb-8 md:pt-32 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h6 className="inline-block text-[#C5E87F] font-semibold tracking-[0.2em] text-[12px] md:text-[14px] mb-4 md:mb-6 uppercase">
              Shopify Development Partner
            </h6>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Your Shopify Development Partner for{" "}
              <span className="block sm:inline-block relative h-[1.2em] overflow-hidden align-top">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="block text-[#CAF389]"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-[18px] text-slate-300 mb-6 md:mb-10 leading-relaxed max-w-xl">
              We design, build, and optimize Shopify stores that
              turn visitors into customers — backed by data, not guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                variant="primary"
                href="#cta"
                className="text-[15px] font-medium px-6 py-3 !bg-[#CAF389] hover:bg-[#CAF389] !text-black border-none rounded-xl transition-all shadow-lg shadow-black/20"
              >
                Start a Project
              </Button>
              <Button
                variant="secondary"
                href="#work"
                className="text-[15px] font-medium px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border-none rounded-xl transition-all shadow-lg shadow-black/20"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -15, 0], // Continuous floating animation
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              x: { duration: 0.8, delay: 0.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative w-full max-w-[500px] sm:max-w-full lg:max-w-[500px] mx-auto order-1 lg:order-2"
          >
            <img
              src="/hero-img.png"
              alt="Shopify Development Interface"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section >
  );

}