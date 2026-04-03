import { motion } from 'framer-motion';

const words1 = ["We", "Build", "Brands"];
const words2 = ["That"];
const words3 = ["Revenue."];

const WordReveal = ({ words, delay = 0 }) => (
  <span className="inline-flex flex-wrap gap-x-[0.25em]">
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 22, rotateX: -12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.58, delay: delay + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-block"
        style={{ transformOrigin: 'bottom center' }}
      >
        {word}
      </motion.span>
    ))}
  </span>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-x-clip overflow-y-visible border-b border-white/10 min-w-0 scroll-mt-24">
    <div className="absolute top-1/4 right-[10%] w-32 h-32 md:w-64 md:h-64 border border-white/5 rotate-45 pointer-events-none" />
    <div className="absolute top-1/3 left-[-5%] w-48 h-48 md:w-96 md:h-96 border border-white/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full min-w-0 relative z-10 py-16 md:pb-24">
      <div className="max-w-4xl min-w-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gold text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] font-medium uppercase mb-4 sm:mb-6"
        >
          Performance-Driven Growth Partner
        </motion.p>

        <h1 className="font-display text-[clamp(1.85rem,6vw,2.25rem)] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.12] sm:leading-[1.15] mb-6 sm:mb-8 text-white overflow-x-clip break-words">
          <div><WordReveal words={words1} delay={0.2} /></div>
          <div>
            <WordReveal words={words2} delay={0.5} />{" "}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.58, ease: [0.25, 0.1, 0.25, 1] }}
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
          transition={{ duration: 0.55, delay: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gray-400 text-base sm:text-lg md:text-xl font-light max-w-xl mb-4 leading-relaxed"
        >
          ₹50L+ in client revenue managed monthly. Two partnerships. Zero wasted spend. We don't do average.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 sm:mb-12 text-[10px] sm:text-xs text-gray-500 font-medium tracking-widest uppercase"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            2 spots open for Q3
          </span>
          <span className="text-gray-700">·</span>
          <span>Meta &amp; Google Certified</span>
          <span className="text-gray-700 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Bangalore-based</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.22, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-full"
        >
          <a href="#work" className="w-full sm:w-auto min-h-12 sm:min-h-0 inline-flex items-center justify-center rounded-sm bg-gold hover:bg-gold-light text-black px-6 sm:px-8 py-3.5 text-center font-semibold transition-colors duration-300 text-base border border-gold-dark/20">
            See our work
          </a>
          <a href="#contact" className="w-full sm:w-auto min-h-12 sm:min-h-0 inline-flex items-center justify-center rounded-sm border border-gold text-gold hover:bg-gold/10 px-6 sm:px-8 py-3.5 text-center font-semibold transition-colors duration-300 text-base">
            Check availability
          </a>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-px h-6 sm:h-8 bg-gradient-to-b from-gray-600 to-transparent"
      />
    </motion.div>
  </section>
);

export default Hero;
