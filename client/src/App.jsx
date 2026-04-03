import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-body selection:bg-gold-light/30 selection:text-gold-light relative overflow-x-hidden">
      
      {/* Abstract Animated Background Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Shape */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px]"
        />

        {/* Middle Left Shape */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[40%] -left-[15%] w-[40vw] h-[40vw] bg-amber-600/5 rounded-full blur-[100px]"
        />

        {/* Bottom Center-Right Shape */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 40, 0],
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 font-body min-w-0 max-w-full">
        <Navbar />
        <Hero />
        <ClientMarquee />
        <SocialProof />
        <Services />
        <WhyUs />
        <CaseStudy />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
