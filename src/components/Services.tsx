import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import {
  ShoppingBagIcon,
  CodeIcon,
  ZapIcon,
  BarChartIcon,
  ShieldIcon,
  RefreshCwIcon } from
'lucide-react';
export function Services() {
  const services = [
  {
    icon: ShoppingBagIcon,
    title: 'Custom Store Development',
    description:
    'Engineered Shopify stores built for performance, scalability, and conversion optimization from day one.'
  },
  {
    icon: CodeIcon,
    title: 'Theme Customization',
    description:
    'Precise modifications to existing themes that maintain code quality and ensure long-term maintainability.'
  },
  {
    icon: ZapIcon,
    title: 'Performance Optimization',
    description:
    'Technical audits and speed improvements that directly impact conversion rates and search rankings.'
  },
  {
    icon: BarChartIcon,
    title: 'Conversion Rate Optimization',
    description:
    'Data-driven improvements to checkout flows, product pages, and user journeys that increase revenue.'
  },
  {
    icon: ShieldIcon,
    title: 'Migration & Upgrades',
    description:
    'Seamless platform migrations and version upgrades with zero downtime and complete data integrity.'
  },
  {
    icon: RefreshCwIcon,
    title: 'Ongoing Support',
    description:
    'Proactive maintenance, monitoring, and technical support that keeps your store running flawlessly.'
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
            Technical Shopify Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Structured solutions for every stage of your Shopify journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) =>
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

              <Card className="p-8 h-full">
                <service.icon
                className="h-10 w-10 text-primary mb-4"
                strokeWidth={1.5} />

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}