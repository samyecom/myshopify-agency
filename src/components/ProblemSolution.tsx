"use client";

import { motion } from 'framer-motion';
import { CheckIcon, XIcon } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    "Slow page speeds hurting SEO and sales",
    "Generic themes that don't convert",
    "Broken integrations with fulfillment tools",
    "No data-driven approach to UX decisions",
    "Inconsistent mobile shopping experience"
  ];

  const solutions = [
    'Sub-2s load times with optimized architecture',
    'Custom themes built for your conversion goals',
    'Battle-tested integrations that scale with you',
    'Every decision backed by analytics and testing',
    'Mobile-first design as a foundational principle'
  ];

  return (
    <section className="w-full bg-[#013D44] relative overflow-hidden">
      <div className="max-w-container mx-auto px-8 py-10 md:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[32px] font-bold text-white mb-4 font-heading">
            Common Shopify Challenges — Solved
          </h2>
          <p className="text-slate-400 text-lg md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            We've seen these patterns hundreds of times. Here's how we address them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#001E21]/40 p-10 rounded-[20px] border border-red-500/40"
          >
            <h3 className="text-[13px] font-bold text-red-400 uppercase tracking-[0.1em] mb-8 font-heading">
              The Problem
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <XIcon className="h-4 w-4 text-red-400/80" strokeWidth={3} />
                  </div>
                  <p className="ml-4 text-slate-300 group-hover:text-white transition-colors text-[15px]">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#001E21]/40 p-10 rounded-[20px] border border-[#CAF389]/40"
          >
            <h3 className="text-[13px] font-bold text-[#CAF389] uppercase tracking-[0.1em] mb-8 font-heading">
              Our Solution
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="h-4 w-4 text-[#CAF389]/80" strokeWidth={3} />
                  </div>
                  <p className="ml-4 text-slate-300 group-hover:text-white transition-colors text-[15px]">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}