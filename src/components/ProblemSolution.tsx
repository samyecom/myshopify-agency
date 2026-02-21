import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon } from 'lucide-react';
export function ProblemSolution() {
  const problems = [
  'Slow page load times hurting conversions',
  'Generic themes that look like competitors',
  'Technical debt from poor implementations',
  'Checkout abandonment from friction',
  'Difficult to manage and update'];

  const solutions = [
  'Performance-first architecture and optimization',
  'Custom designs built for your brand',
  'Clean, maintainable code following best practices',
  'Streamlined checkout flows that convert',
  'Intuitive admin interfaces and documentation'];

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
            Common Challenges, Clear Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We solve the technical problems that hold Shopify stores back
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>

            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Typical Problems
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) =>
              <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <XIcon className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="ml-3 text-slate-600">{problem}</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>

            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Approach
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) =>
              <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                    <CheckIcon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="ml-3 text-slate-600">{solution}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}