"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRightIcon } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="w-full bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#013D44] rounded-[40px] p-12 md:p-20 text-center border border-[#013D44]/10 shadow-2xl shadow-[#013D44]/10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-heading"
          >
            Ready to build something <br className="hidden md:block" />
            <span className="text-[#CAF389]">exceptional?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Let's discuss your project and create a technical plan that drives
            real business results. Our team is ready to scale your Shopify presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              variant="primary"
              className="text-[16px] md:text-lg px-10 py-5 bg-[#CAF389] hover:bg-[#bce678] text-[#013D44] font-bold rounded-2xl shadow-xl shadow-[#CAF389]/10 transition-all hover:scale-105"
            >
              Schedule a Free Consultation
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}