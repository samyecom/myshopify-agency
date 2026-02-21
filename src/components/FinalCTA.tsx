import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRightIcon } from 'lucide-react';
export function FinalCTA() {
  return (
    <section className="w-full bg-green-50">
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
          className="text-center">

          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Ready to build something exceptional?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a technical plan that drives
            real business results.
          </p>
          <Button variant="primary" className="text-lg">
            Schedule a Consultation
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>);

}