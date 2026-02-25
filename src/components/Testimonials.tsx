"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      logoImg: '/shapemour.png',
      logoText: 'Shapemour',
      quote: "They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Arjun Mehta',
      brand: 'Shapemour',
      initials: 'AM',
      flag: 'https://flagcdn.com/w40/in.png',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      logoImg: '/nutrisum.png',
      logoText: 'Nutrisum',
      quote: "They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Priya Sharma',
      brand: 'Nutrisum',
      initials: 'PS',
      flag: 'https://flagcdn.com/w40/in.png',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      logoImg: '/houseofr.png',
      logoText: 'House of R',
      quote: "They didn't just build our store — she engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Rohan Gupta',
      brand: 'House of R',
      initials: 'RG',
      flag: 'https://flagcdn.com/w40/in.png',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      logoImg: '/logos/enerj.png',
      logoText: 'Enerj',
      quote: "The speed optimization work they did was phenomenal. Our bounce rate dropped by 35% and mobile conversions are at an all-time high.",
      name: 'David Park',
      brand: 'Enerj',
      initials: 'DP',
      flag: 'https://flagcdn.com/w40/gb.png',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ];

  // Triple the testimonials for a redundant seamless loop in the marquee
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="w-full bg-[#001E21] py-8 md:pb-20 overflow-hidden relative">
      <div className='max-w-container mx-auto bg-gradient-to-b from-[#001E21] to-[#013D44] py-10 rounded-[20px] border border-white/5 shadow-2xl relative overflow-hidden group'>
        {/* Background Earth Map */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen overflow-hidden">
          <img
            src="/earth.webp"
            alt="Earth Map"
            className="w-full h-full object-cover scale-110 opacity-60"
          />
        </div>

        {/* Subtle Inner Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#CAF389_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />

        <div className="max-w-container mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-[30px] font-semibold text-white mb-4 font-heading">
                What Our Partners Say
              </h2>
              <p className="text-[#98A3A4] text-lg md:text-[16px] leading-relaxed max-w-2xl mx-auto">
                Hear from the brands we've helped grow on Shopify.
              </p>
            </motion.div>
          </div>

          <div className="relative overflow-hidden w-full py-2">
            <motion.div
              className="flex gap-6 w-fit"
              animate={{ x: [0, "-33.333%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              whileHover={{ transition: { x: { duration: 1000 } } }} // Effectively pause on hover
            >
              {marqueeItems.map((t, index) => (
                <div
                  key={index}
                  className="w-[300px] md:w-[380px] shrink-0"
                >
                  <div className="bg-[#001e21] p-6 md:p-8 rounded-[24px] h-full border border-white/5 relative flex flex-col group transition-all duration-300 hover:border-[#CAF389]/30 hover:scale-[1.02] shadow-xl">
                    {/* Top Right Corner Icon (Flag) */}
                    {t.flag && (
                      <div className="absolute top-4 right-4 w-10 h-7 rounded-lg overflow-hidden shadow-sm z-20">
                        <img
                          src={t.flag}
                          alt="Country Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Top Bar (Logo Image or Text) */}
                    <div className="flex justify-between items-start mb-8 pr-12">
                      <div className="h-10 flex items-center">
                        {t.logoImg ? (
                          <img
                            src={t.logoImg}
                            alt={t.logoText}
                            className="h-full w-auto max-w-[140px] object-contain brightness-0 invert opacity-100"
                          />
                        ) : (
                          <span className="text-white font-heading font-bold text-xl">{t.logoText}</span>
                        )}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mb-10 flex-1">
                      <p className="text-white text-[15px] leading-relaxed line-clamp-4">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full overflow-hidden bg-white flex items-center justify-center text-[#013D44] font-bold text-[14px] shrink-0 border border-white/10">
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          t.initials
                        )}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-[16px]">
                          {t.name}
                        </h4>
                        <p className="text-[#98A3A4] text-[13px]">
                          {t.brand}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
