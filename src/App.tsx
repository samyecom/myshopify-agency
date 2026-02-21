import React from 'react';
import { Hero } from './components/Hero';
import { TrustLogos } from './components/TrustLogos';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ProblemSolution } from './components/ProblemSolution';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <TrustLogos />
      <Services />
      <CaseStudies />
      <ProblemSolution />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </div>);

}