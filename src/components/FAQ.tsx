"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
    <section id="faq" className="w-full bg-[#001E21] pt-0 pb-20 relative overflow-hidden">

      <div className="max-w-container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="text-[#CAF389] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            Common Questions
          </span>
          <h2 className="text-2xl md:text-[30px] font-bold text-white mb-6 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about scaling your brand with our expert Shopify services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-xl border transition-all duration-300 ${isOpen
                  ? 'bg-[#013D44]/40 border-[#CAF389]/20 shadow-xl'
                  : 'bg-white/5 border-white/5 hover:border-white/10'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-4 flex items-center justify-between text-left"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#CAF389]' : 'text-white'
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'
                    }`}>
                    <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#CAF389] text-[#001E21]' : 'bg-white/10 text-white'
                      }`}>
                      <Plus size={20} />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
