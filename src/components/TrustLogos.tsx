"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function TrustLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logos = [
    '/logos/adomour.png',
    '/logos/britwall.png',
    '/logos/enerj.png',
    '/logos/five.png',
    '/logos/relaxmour.png',
  ];

  // We only need enough logos to fill the width or slightly more
  const displayLogos = [...logos, ...logos, ...logos];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // logos move from right to left as we scroll past the section
  const xTransform = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={sectionRef} className="w-full bg-[#001E21] overflow-hidden py-10 md:py-12">
      <div className="max-w-container px-8 mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left Heading */}
        <div className="shrink-0">
          <h6 className="text-[11px] md:text-[12px] font-bold text-white uppercase tracking-[0.2em] leading-tight opacity-80">
            Trusted by leading <br className="hidden md:block" />
            Shopify brands
          </h6>
        </div>

        {/* Scroll-Driven Container */}
        <div className="relative flex-1 overflow-hidden" ref={containerRef}>
          {/* Gradient Fades for Smoothness */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#001E21] via-[#001E21]/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#001E21] via-[#001E21]/50 to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 md:gap-24"
            style={{ x: xTransform }}
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
