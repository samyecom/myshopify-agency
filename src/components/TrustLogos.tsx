"use client";

import { motion } from 'framer-motion';

export function TrustLogos() {
  const logos = [
    '/logos/adomour.png',
    '/logos/britwall.png',
    '/logos/enerj.png',
    '/logos/five.png',
    '/logos/relaxmour.png',
  ];

  // Repeat logos for a seamless infinite loop
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#001E21] py-8 md:py-12 overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left Heading */}
        <div className="shrink-0 mb-8 md:mb-0 md:mr-12 md:pr-12">
          <h6 className="text-[11px] md:text-[12px] font-bold text-white uppercase tracking-[0.2em] leading-tight opacity-80">
            Trusted by leading <br className="hidden md:block" />
            Shopify brands
          </h6>
        </div>

        {/* Continuous Marquee Container */}
        <div className="relative flex-1 overflow-hidden">
          {/* Gradient Fades for Smoothness */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#001E21] via-[#001E21]/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#001E21] via-[#001E21]/50 to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] h-8 md:h-10 brightness-0 invert transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}