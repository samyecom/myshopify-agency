"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section id="cta" className="w-full bg-[#013D44] py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#E4FBEB] rounded-[32px] p-8 md:p-16 text-center border border-[#013D44]/5 shadow-xl shadow-black/[0.03]"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-[32px] font-bold text-[#013D44] mb-5 leading-tight font-heading"
          >
            Ready to Build a Store That Converts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base md:text-[17px] text-[#013D44]/80 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Let&apos;s discuss your Shopify project. No pitches, no pressure — just
            an honest conversation about what your store needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              variant="primary"
              href="https://wa.me/916283588829"
              target="_blank"
              className="text-[15px] px-10 py-4 !bg-[#CAF389] hover:bg-[#b5e07a] !text-[#013D44] font-bold rounded-full border-none shadow-lg shadow-[#CAF389]/20 transition-all hover:scale-105"
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}