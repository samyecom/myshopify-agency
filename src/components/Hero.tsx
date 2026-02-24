"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="w-full bg-[#013D44] relative overflow-hidden">


      <div className="max-w-container mx-auto px-8 pt-18 pb-4 md:pt-24 md:pb-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}>

            <h6 className="inline-block text-[#C5E87F] font-semibold tracking-[0.2em] text-[14px] mb-6 uppercase">
              Shopify Development Partner
            </h6>

            <h1 className="text-4xl md:text-[48px] font-semibold text-white mb-8 leading-[1.1] tracking-tight">
              Your Shopify Development Partner for High–Converting Stores
            </h1>

            <p className="text-lg md:text-[18px] text-slate-300 mb-10 leading-relaxed max-w-xl">
              We design, build, and optimize Shopify stores that
              turn visitors into customers — backed by data, not guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                variant="primary"
                className="text-[15px] font-bold px-8 py-4 bg-[#CAF389] hover:bg-[#CAF389] text-[#013D44] border-none rounded-xl transition-all shadow-lg shadow-black/20"
              >
                Start a Project
              </Button>
              <Button
                variant="secondary"
                className="text-[15px] font-bold px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-none rounded-xl transition-all shadow-lg shadow-black/20"
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
            className="relative lg:max-w-[90%] ml-auto"
          >
            <img
              src="/hero-img.png"
              alt="Shopify Development Interface"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

}