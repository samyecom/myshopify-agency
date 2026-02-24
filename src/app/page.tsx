import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustLogos } from '../components/TrustLogos';
import { Services } from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { ProblemSolution } from '../components/ProblemSolution';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-white">
            <Navbar />
            <Hero />
            <TrustLogos />
            <Services />
            <CaseStudies />
            <ProblemSolution />
            <Process />
            <Testimonials />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    );
}
