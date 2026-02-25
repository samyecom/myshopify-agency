"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="cta" className="w-full bg-[#001E21] py-12 relative overflow-hidden">
      {/* Background Earth Map & Vignette */}
      <div className="absolute inset-0 opacity-100 pointer-events-none overflow-hidden">
        <img
          src="/earth.webp"
          alt="Earth Map"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Corner Shadow Effect (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#001E21_100%)] opacity-80" />
        {/* Top Edge Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001E21] via-transparent to-transparent opacity-100 h-1/2" />
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#001e2100]/[0.0] backdrop-blur-[5px] rounded-[20px] p-10 md:p-10 overflow-hidden border border-white/40 shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
        >
          {/* White Glass Refractions */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-white/[0.1] pointer-events-none" />
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_50%)] pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#CAF389]/10 border border-[#CAF389]/20 text-[#CAF389] text-xs font-bold tracking-wider uppercase mb-8"
            >
              Start Your Transformation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-[30px] font-bold text-white mb-8 leading-[1.1] font-heading max-w-3xl mx-auto"
            >
              Ready to Build a Store That <span className="text-[#CAF389]">Converts?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Let&apos;s discuss your Shopify project. No pitches, no pressure — just
              an honest conversation about how to scale your business to the next level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                variant="primary"
                href="https://wa.me/916283588829"
                target="_blank"
                className="group relative flex items-center gap-3 text-lg px-8 py-2 !bg-[#CAF389] hover:bg-[#b5e07a] !text-[#001E21] font-bold rounded-full border-none shadow-2xl shadow-[#CAF389]/20 transition-all hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
