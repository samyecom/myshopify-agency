"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      logoImg: '/shapemour.png',
      logoText: 'Shapemour',
      quote: "They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Sarah Chen',
      brand: 'Shapemour',
      initials: 'SC',
      flag: 'https://flagcdn.com/w40/in.png'
    },
    {
      logoImg: '/nutrisum.png', // Placeholder using similar pattern
      logoText: 'Nutrisum',
      quote: "They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Michael Rodriguez',
      brand: 'Nutrisum',
      initials: 'SC',
      flag: 'https://flagcdn.com/w40/in.png'
    },
    {
      logoImg: '/houseofr.png', // Placeholder using similar pattern
      logoText: 'House of R',
      quote: "They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days. They didn't just build our store — they engineered a conversion machine. Revenue doubled in 90 days.",
      name: 'Emily Watson',
      brand: 'House of R',
      initials: 'SC',
      flag: 'https://flagcdn.com/w40/in.png'
    },
    {
      logoText: 'LuxeLiving',
      quote: "The speed optimization work they did was phenomenal. Our bounce rate dropped by 35% and mobile conversions are at an all-time high.",
      name: 'David Park',
      brand: 'LuxeLiving',
      initials: 'DP',
      flag: 'https://flagcdn.com/w40/ca.png'
    }
  ];

  // Duplicate testimonials for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-[#001E21] py-10 md:py-12 px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
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

        <div className="relative">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-10 hidden xl:block">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#CAF389] hover:text-[#013D44] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-10 hidden xl:block">
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#CAF389] hover:text-[#013D44] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 1200 ? 1 : 3))}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {displayTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(33.333%-16px)] shrink-0"
                >
                  <div className="bg-[#013D44] p-8 md:p-10 rounded-[20px] h-full border border-white/5 relative flex flex-col group transition-all duration-300">
                    {/* Top Right Corner Icon (Flag or Placeholder) */}
                    {t.flag ? (
                      <div className="absolute top-0 right-0 w-12 h-8 rounded-tr-[20px] rounded-bl-[12px] overflow-hidden shadow-sm z-20">
                        <img
                          src={t.flag}
                          alt="Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-0 right-0 w-10 h-10 bg-[#D9D9D9]/20 rounded-tr-[20px] rounded-bl-[12px] flex items-center justify-center z-20 border-l border-b border-white/5">
                        {/* Matches the corner styling in the screenshot */}
                      </div>
                    )}

                    {/* Top Bar (Logo Image or Text) */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="h-14 flex items-center">
                        {t.logoImg ? (
                          <img
                            src={t.logoImg}
                            alt={t.logoText}
                            className="h-full w-auto max-w-[180px] object-contain brightness-0 invert opacity-100"
                          />
                        ) : (
                          <span className="text-white font-heading font-bold text-2xl">{t.logoText}</span>
                        )}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mb-10 flex-1">
                      <p className="text-[#98A3A4] text-[15px] leading-relaxed">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Bottom Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#013D44] font-bold text-[14px] shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-[15px]">
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

        {/* Mobile indicators or controls */}
        <div className="flex justify-center gap-4 mt-10 xl:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}