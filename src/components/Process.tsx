import React from 'react';
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
    <section className="w-full bg-white">
      <div className="max-w-container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A systematic approach to building exceptional Shopify stores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
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
            className="relative">

              <div className="text-6xl font-bold text-green-50 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 &&
            <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2" />
            }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}