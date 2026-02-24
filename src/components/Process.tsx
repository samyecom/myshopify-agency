"use client";

import { motion } from 'framer-motion';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Technical audit, requirements gathering, and strategic planning to understand your business goals and constraints.'
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Structured design system creation with focus on conversion optimization and brand consistency across all touchpoints.'
    },
    {
      number: '03',
      title: 'Build',
      description:
        'Clean code implementation following Shopify best practices with continuous testing and quality assurance.'
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'Careful deployment with monitoring, performance validation, and comprehensive documentation for your team.'
    }];

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