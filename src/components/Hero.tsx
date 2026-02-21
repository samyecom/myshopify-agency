import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRightIcon } from 'lucide-react';
export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <img
              src="/Agency_Logo.png"
              alt="MyShopify Agency"
              className="h-12 mb-8" />

            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 mb-6 leading-tight">
              Shopify stores that convert and scale
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We build high-performance Shopify stores for brands that need
              precision engineering, not creative experiments. Technical
              excellence meets conversion optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="text-lg">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" className="text-lg">
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative">

            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative">

              <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-slate-200 shadow-xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />

                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium">Product Mockup</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}