"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { ArrowRightIcon } from 'lucide-react';

export function CaseStudies() {
  const cases = [
    {
      title: 'Fashion Brand Store Rebuild',
      description:
        'Complete platform migration with 40% improvement in page load and 25% increase in conversion rate.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    },
    {
      title: 'Electronics Retailer Optimization',
      description:
        'Checkout flow redesign and performance optimization resulting in significant revenue growth.',
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop'
    },
    {
      title: 'Beauty Brand Custom Build',
      description:
        'Custom Shopify Plus store with advanced product customization and subscription functionality.',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop'
    }];

  return (
    <section id="work" className="w-full bg-[#002d31] py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-container px-0 md:px-8 mx-auto">
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
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 mb-6 md:mb-10 text-center md:text-left"
        >
          <div className="max-w-3xl w-full">
            <h2 className="text-[20px] md:text-[30px] lg:text-[34px] font-medium text-white leading-[1.1] tracking-tight">
              Results That Speak for <br className="hidden md:block" />
              Themselves
            </h2>
          </div>
          <div className="max-w-[420px] mx-auto md:mx-0">
            <p className="text-[#c3c3c3] text-[16px] md:text-[18px] leading-relaxed">
              Results-driven projects that demonstrate technical precision and creative excellence.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cases.map((caseStudy, index) =>
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
              whileHover={{ y: -10 }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[16px] mb-4 md:mb-6 relative">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#CAF389] transition-colors duration-300">
                  {caseStudy.title}
                </h3>
                <p className="text-[#c3c3c3] text-[14px] md:text-[15px] leading-relaxed group-hover:text-white transition-colors duration-300">
                  {caseStudy.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);
}