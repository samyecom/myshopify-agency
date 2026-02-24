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
      metric: '+25% CVR',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
    },
    {
      title: 'Electronics Retailer Optimization',
      description:
        'Checkout flow redesign and performance optimization resulting in significant revenue growth.',
      metric: '+$2M ARR',
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop'
    },
    {
      title: 'Beauty Brand Custom Build',
      description:
        'Custom Shopify Plus store with advanced product customization and subscription functionality.',
      metric: '50K+ Orders',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop'
    }];

  return (
    <section id="work" className="w-full bg-[#013D44] py-10 md:py-12">
      <div className="max-w-container mx-auto px-8">
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
          className="text-center mb-6">

          <h2 className="text-3xl md:text-[30px] font-bold text-white mb-4 font-heading">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg md:text-[16px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Results-driven projects that demonstrate technical precision and creative excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              }}>

              <Card className="overflow-hidden bg-[#001E21] border-white/5 hover:border-[#CAF389]/30 transition-all duration-300 group cursor-pointer shadow-xl shadow-black/20 rounded-[12px]">
                <div className="aspect-[4/3] bg-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-[#CAF389] text-[#013D44] text-[12px] font-bold rounded-full mb-4 tracking-wide">
                    {caseStudy.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CAF389] transition-colors duration-300 font-heading">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-[15px] leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <div className="flex items-center text-[#CAF389] font-bold text-[14px] group-hover:translate-x-2 transition-transform duration-300">
                    View Case Study
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);
}