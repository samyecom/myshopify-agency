import React from 'react';
import { motion } from 'framer-motion';
export function TrustLogos() {
  const logos = [
  'Client A',
  'Client B',
  'Client C',
  'Client D',
  'Client E',
  'Client F'];

  return (
    <section className="w-full bg-slate-50 border-y border-slate-200">
      <div className="max-w-container mx-auto px-6 py-16">
        <motion.p
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8">

          Trusted by leading brands
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="flex items-center justify-center">

              <div className="text-slate-400 font-medium text-lg opacity-60">
                {logo}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}