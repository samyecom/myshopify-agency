"use client";

import { motion } from 'framer-motion';

export function TrustLogos() {
  const logos = [
    'Allbirds',
    'Gymshark',
    'MVMT',
    'Brooklinen',
    'Ruggable',
    'Chubbies',
  ];

  // Repeat logos for a seamless infinite loop
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#001E21] py-6 overflow-hidden">
      <div className="max-w-container mx-auto px-8 flex flex-col md:flex-row items-center">
        {/* Left Heading */}
        <div className="shrink-0 mb-6 md:mb-0 md:mr-12 md:pr-12">
          <h6 className="text-[10px] md:text-[12px] font-bold text-white uppercase tracking-[0.2em] leading-tight">
            Trusted by leading <br />
            Shopify brands
          </h6>
        </div>

        {/* Continuous Marquee Container */}
        <div className="relative flex-1 overflow-hidden">
          {/* Gradient Fades for Smoothness */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#001E21] via-[#001E21/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#001E21] via-[#001E21]/50 to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="text-white text-lg md:text-xl font-bold whitespace-nowrap tracking-wide"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}