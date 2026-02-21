import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    question: 'What makes your Shopify development different?',
    answer:
    'We focus on technical precision and measurable outcomes rather than creative experimentation. Every decision is backed by performance data, conversion optimization principles, and Shopify best practices.'
  },
  {
    question: 'How long does a typical project take?',
    answer:
    'Project timelines vary based on scope and complexity. A custom store build typically takes 6-8 weeks, while migrations and optimizations can be completed in 2-4 weeks. We provide detailed timelines during discovery.'
  },
  {
    question: 'Do you work with Shopify Plus stores?',
    answer:
    'Yes, we specialize in both standard Shopify and Shopify Plus implementations. We have extensive experience with Plus-specific features like Scripts, Flow, and advanced checkout customizations.'
  },
  {
    question: 'What happens after launch?',
    answer:
    'We provide comprehensive documentation, training for your team, and optional ongoing support packages. Our goal is to ensure you can confidently manage your store while having expert backup when needed.'
  },
  {
    question: 'Can you help with an existing store?',
    answer:
    'Absolutely. We offer technical audits, performance optimization, feature additions, and ongoing maintenance for existing Shopify stores. We can work with any theme or custom implementation.'
  }];

  return (
    <section className="w-full bg-slate-50">
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Common questions about our services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) =>
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
              delay: index * 0.05
            }}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden">

              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              aria-expanded={openIndex === index}>

                <span className="text-lg font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDownIcon
                className={`h-5 w-5 text-slate-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />

              </button>
              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}>

                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}