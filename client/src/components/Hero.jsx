import { motion } from 'framer-motion';

const words1 = ["We", "Build", "Brands"];
const words2 = ["That"];
const words3 = ["Revenue."];

const WordReveal = ({ words, delay = 0, className = "" }) => (
  <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}>
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 40, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.7,
          delay: delay + i * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="inline-block"
        style={{ transformOrigin: 'bottom center' }}
      >
        {word}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/4 right-[10%] w-64 h-64 border border-white/5 rotate-45 transform pointer-events-none"></div>
      <div className="absolute top-1/3 left-[-5%] w-96 h-96 border border-white/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pb-24 pt-8 md:pt-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6"
          >
            Performance-Driven Growth Partner
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.15] mb-8 text-white overflow-hidden">
            <div><WordReveal words={words1} delay={0.2} /></div>
            <div>
              <WordReveal words={words2} delay={0.5} />{" "}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="italic text-gold font-light inline-block"
              >
                Print
              </motion.span>
            </div>
            <div><WordReveal words={words3} delay={0.75} /></div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-gray-400 text-lg md:text-xl font-body font-light max-w-xl mb-4 leading-relaxed"
          >
            ₹50L+ in client revenue managed monthly. Two partnerships.
            Zero wasted spend. We don't do average.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12 text-xs text-gray-500 font-medium tracking-widest uppercase"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
              2 spots open for Q3
            </span>
            <span className="text-gray-700">·</span>
            <span>Meta &amp; Google Certified</span>
            <span className="text-gray-700">·</span>
            <span>Bangalore-based</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#work" className="bg-gold hover:bg-gold-light text-black px-8 py-3.5 text-center font-medium transition-colors duration-300">
              See Our Work
            </a>
            <a href="#contact" className="border border-gold text-gold hover:bg-gold/10 px-8 py-3.5 text-center font-medium transition-colors duration-300">
              Check Availability
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>

      <div className="absolute top-0 right-1/4 w-px h-[60vh] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden lg:block"></div>
    </section>
  );
};

export default Hero;
