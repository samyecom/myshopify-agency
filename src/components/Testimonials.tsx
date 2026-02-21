import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
export function Testimonials() {
  const testimonials = [
  {
    quote:
    'The technical precision and attention to performance details exceeded our expectations. Our conversion rate improved significantly within the first month.',
    name: 'Sarah Chen',
    role: 'Director of E-commerce, Fashion Brand',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    quote:
    'Finally, a Shopify agency that understands both the technical and business sides. They delivered a store that scales with our growth.',
    name: 'Michael Rodriguez',
    role: 'CEO, Electronics Retailer',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    quote:
    'Clean code, clear communication, and measurable results. The migration was seamless and the performance improvements were immediate.',
    name: 'Emily Watson',
    role: 'VP of Operations, Beauty Brand',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }];

  return (
    <section className="w-full bg-slate-50">
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
            Client Feedback
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
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

              <Card className="p-8 h-full flex flex-col">
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover" />

                  <div className="ml-4">
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}