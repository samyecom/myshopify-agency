"use client";

import { motion } from 'framer-motion';

export function Process() {

  return (
    <section id="process" className="w-full bg-[#001E21] relative overflow-hidden">
      {/* Full Page Width Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative"
      >
        <img
          src="/our-process.png"
          alt="Our Process Workflow"
          className="w-full h-auto relative z-10"
        />
      </motion.div>
    </section>
  );
}