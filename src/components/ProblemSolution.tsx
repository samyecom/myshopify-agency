"use client";

import { motion } from 'framer-motion';
import { CheckIcon, XIcon, ArrowRight } from 'lucide-react';

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
    <section id="challenges" className="w-full bg-[#002d31] relative overflow-hidden pt-5 pb-20">
      {/* Background Earth Map & Vignette */}
      <div className="absolute inset-0 opacity-100 pointer-events-none overflow-hidden">
        <img
          src="/earth.webp"
          alt="Earth Map"
          className="w-full h-full object-contain opacity-10"
        />
      </div>

      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-6 font-heading">
              Challenges Solved
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We replace technical debt and conversion friction with high-performance engineering.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-[#002d31]/[0.05] backdrop-blur-[5px] rounded-[20px] p-8 border border-white/10 hover:border-red-500/20 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* White Glass Refraction */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none" />

            {/* Subtle Red glow on hover */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                <XIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">The Problems</h3>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start group/item"
                >
                  <div className="mt-1.5 p-0.5 rounded-full bg-red-500/20">
                    <XIcon className="w-2.5 h-2.5 text-red-500" strokeWidth={4} />
                  </div>
                  <p className="ml-4 text-slate-400 group-hover/item:text-slate-200 transition-colors">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative bg-white/[0.05] backdrop-blur-[20px] rounded-[20px] p-8 border border-white/10 hover:border-[#CAF389]/30 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* White Glass Refraction */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none" />

            {/* Subtle Green glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CAF389]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-[#CAF389]/10 border border-[#CAF389]/20">
                <CheckIcon className="w-6 h-6 text-[#CAF389]" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">Our Solutions</h3>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start group/item"
                >
                  <div className="mt-1.5 p-0.5 rounded-full bg-[#CAF389]/20">
                    <CheckIcon className="w-2.5 h-2.5 text-[#CAF389]" strokeWidth={4} />
                  </div>
                  <p className="ml-4 text-slate-300 group-hover/item:text-white transition-colors">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Glossy overlay effect for the solution card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
