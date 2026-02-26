"use client";

import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Paintbrush,
  Gauge,
  Code2,
  LineChart,
  Headphones
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Custom Store Development',
      description: 'Purpose-built Shopify stores engineered for performance and conversion from day one.'
    },
    {
      icon: Paintbrush,
      title: 'Theme Design & Customization',
      description: 'Pixel-perfect themes that reflect your brand and provide a seamless shopping experience.'
    },
    {
      icon: Gauge,
      title: 'Speed & Performance',
      description: 'Sub-2-second load times through optimized assets, lazy loading, and clean code architecture.'
    },
    {
      icon: Code2,
      title: 'App & API Integration',
      description: 'Seamless integrations with payment gateways, ERPs, CRMs, and third-party tools.'
    },
    {
      icon: LineChart,
      title: 'Conversion Optimization',
      description: 'Data-driven A/B testing and UX improvements that measurably increase your revenue.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support & Maintenance',
      description: 'Proactive monitoring, updates, and dedicated support to keep your store running smoothly.'
    }
  ];

  return (
    <section id="services" className="w-full bg-[#001E21] pb-8 md:pb-12">
      <div className="max-w-container px-4 md:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="text-2xl md:text-[30px] font-bold text-white mb-3 md:mb-4 font-heading px-4">
            Everything Your Shopify Store Needs
          </h2>
          <p className="text-slate-400 text-base md:text-[16px] max-w-2xl mx-auto leading-relaxed px-6">
            From initial build to ongoing optimization, we cover every aspect of your Shopify presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-0 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background with Gradient and Glow */}
              <div className="relative h-full bg-[#002D31] rounded-[24px] p-5 md:p-6 border border-white/5 transition-all duration-300 group-hover:border-[#CAF389]/40 group-hover:bg-[#00383D] overflow-hidden shadow-2xl">
                {/* Subtle Radial Glow on Hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#CAF389]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-[#013D44] border border-white/10 group-hover:bg-[#CAF389] group-hover:border-transparent transition-all duration-300 text-[#CAF389] group-hover:text-[#001E21] shadow-lg">
                  <service.icon className="w-6 h-6" strokeWidth={2} />
                  {/* Outer Glow for Icon */}
                  <div className="absolute inset-0 rounded-xl bg-[#CAF389]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#CAF389] transition-colors duration-300 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-[14px] group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}