"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      tag: 'MY',
      tagBg: 'bg-[#CAF1D7]/60',
      tagText: 'text-[#0F5B36]',
      title: 'Understanding Before Building',
      description: 'We begin with your store, your data, and your goals — auditing what exists and identifying what will truly move the business forward.',
      points: [
        'Store & Competitor Audit',
        'Business Goal Definition',
        'Strategy & Roadmap'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      arrow: true
    },
    {
      tag: 'SHOPIFY',
      tagBg: 'bg-[#CAF1D7]/60',
      tagText: 'text-[#0F5B36]',
      title: 'Designed & Engineered for Conversion',
      description: 'Wireframes, prototypes, and clean performance-driven code — built specifically for how Shopify works across devices and scale.',
      points: [
        'Custom Design & UX',
        'Theme Development',
        'Speed & CRO Optimization'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      arrow: true
    },
    {
      tag: 'AGENCY',
      tagBg: 'bg-[#004D40]',
      tagText: 'text-[#ffffff]',
      title: 'Launch Is Where Partnership Begins',
      description: 'We monitor, refine, and optimize post-launch — staying involved to ensure long-term success and growth.',
      points: [
        'Launch & QA',
        'Analytics & Optimization',
        'Ongoing Support'
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      arrow: false
    }
  ];

  return (
    <section
      id="process"
      className="w-full py-8 px-4 md:px-4 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgb(0, 24, 26) 0%, rgb(0, 30, 33) 70%)' }}
    >
      <div className="max-w-container px-4 md:px-0 lg:px-8 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-[20px] md:text-[30px] font-semibold text-white mb-4 font-heading">
            Our Process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A structured, repeatable approach that minimizes risk and maximizes results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-[16px] p-6 md:p-10 lg:p-8 flex flex-col h-full border border-white/5 relative group hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
              style={{ background: 'radial-gradient(circle at center, #013D44 0%, #001E21 100%)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={`${step.tagBg} ${step.tagText} px-4 py-1.5 rounded-md text-[14px] font-bold tracking-wider`}>
                  {step.tag}
                </span>
                {step.arrow && (
                  <svg className="hidden md:block w-16 h-6 text-[#CAF389]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      strokeDasharray="2 3"
                      d="M2 12h17"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M16 8l4 4-4 4"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-2xl md:text-[22px] lg:text-3xl font-semibold text-white mb-6 leading-tight font-heading group-hover:text-[#CAF389] transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-300 mb-8 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-4 mb-10">
                {step.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CAF389]" />
                    <span className="text-white font-medium text-[15px]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#CAF389]/10 rounded-full blur-2xl -z-10 group-hover:bg-[#CAF389]/20 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}