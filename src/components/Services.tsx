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
    <section id="services" className="w-full bg-[#001E21] py-12 md:py-12 px-6 md:px-8">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="text-3xl md:text-[30px] font-bold text-white mb-4 font-heading">
            Everything Your Shopify Store Needs
          </h2>
          <p className="text-slate-400 text-lg md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            From initial build to ongoing optimization, we cover every aspect of your Shopify presence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#013D44] p-8 rounded-[20px] h-full border border-white/5 group-hover:border-[#CAF389]/30 group-hover:bg-[#024d56] transition-all duration-300 shadow-xl shadow-black/20 group-hover:shadow-[#CAF389]/5">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-[#CAF389]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#CAF389] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-[15px] group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}