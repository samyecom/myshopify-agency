"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does a typical Shopify store build take?',
      answer:
        'A standard custom Shopify store build typically takes 4–8 weeks. This includes the discovery phase, design, technical development, and quality assurance testing.'
    },
    {
      question: 'Do you work with Shopify Plus?',
      answer:
        'Yes, we specialize in high-growth Shopify Plus stores, managing complex migrations, custom checkouts, and enterprise-level integrations.'
    },
    {
      question: 'Can you migrate my store from another platform?',
      answer:
        'Absolutely. We handle migrations from Magento, WooCommerce, BigCommerce, and custom platforms, ensuring all data, customers, and SEO authority are preserved.'
    },
    {
      question: 'What does ongoing support include?',
      answer:
        'Our support covers performance monitoring, security updates, feature enhancements, and strategic consulting to ensure your store remains competitive.'
    },
    {
      question: 'How do you measure success?',
      answer:
        'We track KPIs like page load speed, conversion rate (CVR), average order value (AOV), and overall revenue growth to ensure your investment delivers results.'
    }];

  return (
    <section id="faq" className="w-full bg-[#013D44] py-12 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[30px] font-semibold text-white mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-lg md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Quick answers to common questions about working with us.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[12px] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-[15px] md:text-[16px] font-medium text-slate-800 pr-8">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 text-slate-500 leading-relaxed text-[15px] border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}