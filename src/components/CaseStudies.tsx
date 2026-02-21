import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { ArrowRightIcon } from 'lucide-react';
export function CaseStudies() {
  const cases = [
  {
    title: 'Fashion Brand Store Rebuild',
    description:
    'Complete platform migration with 40% improvement in page load times and 25% increase in conversion rate.',
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
            Recent Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Results-driven projects that demonstrate technical precision
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
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}>

              <Card hover className="overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover" />

                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-50 text-primary text-sm font-medium rounded-full mb-3">
                    {caseStudy.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{caseStudy.description}</p>
                  <div className="flex items-center text-primary font-medium">
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