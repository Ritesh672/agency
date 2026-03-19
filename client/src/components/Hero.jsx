import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white">
      {/* Background Geometric Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 border border-white/5 rotate-45 transform pointer-events-none"></div>
      <div className="absolute top-1/3 left-[-5%] w-96 h-96 border border-white/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6">
            Bangalore's Most Selective Growth Agency
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-white">
            We Build Brands <br />
            That <span className="italic text-gold font-light">Print</span> <br />
            Revenue.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-body font-light max-w-xl mb-12 leading-relaxed">
            ₹50L+ in client revenue managed monthly. Two partnerships.<br className="hidden md:block"/>
            Zero wasted spend. We don't do average.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#work" 
              className="bg-gold hover:bg-gold-light text-black px-8 py-3.5 text-center font-medium transition-colors duration-300"
            >
              See Our Work
            </a>
            <a 
              href="#contact" 
              className="border border-gold text-gold hover:bg-gold/10 px-8 py-3.5 text-center font-medium transition-colors duration-300"
            >
              Check Availability
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* subtle vertical line decoration */}
      <div className="absolute top-0 right-1/4 w-px h-[60vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden lg:block"></div>
    </section>
  );
};

export default Hero;
