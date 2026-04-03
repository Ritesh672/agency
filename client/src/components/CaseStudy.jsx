import { motion } from 'framer-motion';
import gulaabGali from '../assets/LOGO GULAAB GALI PNG.png';
import dhirai from '../assets/dhirai logo.avif';
import shakiyan from '../assets/shakiyan logo.webp';

const clientLogos = [
  { name: "Gulaab Gali", logo: gulaabGali },
  { name: "Dhirai", logo: dhirai },
  { name: "Sakhiyaan", logo: shakiyan },
];

const CharReveal = ({ text, delay = 0 }) => (
  <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
    className="text-gold text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] font-medium uppercase mb-5 sm:mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 max-w-full">
    <span className="w-6 sm:w-8 h-[1px] bg-gold flex-shrink-0" />
    {text.split('').map((char, i) => (
      <motion.span key={i} variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: delay + i * 0.03 } } }} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

const CaseStudy = () => (
  <section id="work" className="py-16 sm:py-24 md:py-32 bg-dark-bg relative overflow-hidden border-b border-white/10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] border border-gold/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 min-w-0">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
        <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase font-medium mb-4 sm:mb-6">Brands We've Worked With</p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {clientLogos.map((client, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2 sm:gap-3 border border-white/8 px-3 sm:px-5 py-2 sm:py-3 hover:border-gold/25 transition-colors duration-300 group">
              <img src={client.logo} alt={client.name} className="h-5 sm:h-7 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }} />
              <span className="text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase group-hover:text-gray-300 transition-colors duration-300">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-dark-card border border-white/10 p-5 sm:p-8 md:p-12 lg:p-20 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          <div>
            <CharReveal text="Featured Case Study" delay={0.1} />
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-medium leading-[1.15] mb-3 break-words">
              Scaling a Premium D2C Brand to Profitable Growth
            </h2>
            <p className="text-gray-500 text-sm font-light mb-6 sm:mb-8 italic">Dhirai · D2C Fashion &amp; Lifestyle · Bangalore · 2024</p>
            <p className="text-gray-400 leading-relaxed font-light mb-6 sm:mb-8 text-sm sm:text-base">
              We partnered with Deepak Meena, founder of Dhirai, when the brand was struggling with inconsistent sales and high CAC. By rebuilding their funnel and focusing on performance-driven creatives, we turned it into a predictable revenue engine.
            </p>

            <div className="bg-white/3 border border-white/8 p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="text-gold text-2xl sm:text-3xl font-display leading-none mb-2 sm:mb-3 opacity-50">"</div>
              <p className="text-gray-300 italic font-light leading-relaxed text-sm mb-3 sm:mb-4">
                The ZivonX team didn't just manage our ads — they rebuilt our entire growth engine. CAC dropped 42% in the first 60 days and we've maintained profitability every month since.
              </p>
              <div className="flex items-center gap-3">
                <img src={dhirai} alt="Dhirai" className="h-6 sm:h-8 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                <div>
                  <p className="text-white text-xs font-medium">Deepak Meena</p>
                  <p className="text-gray-500 text-[11px]">Founder, Dhirai</p>
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-gold text-[10px] sm:text-xs tracking-[0.2em] font-bold uppercase mb-3 sm:mb-4">What We Did</p>
              <ul className="space-y-2 sm:space-y-3">
                {["Rebuilt the ad account structure from scratch", "Introduced high-AOV bundles to increase order value", "Scaled winning creatives through aggressive testing", "Optimized full funnel (TOF → Retargeting → Conversion)"].map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-[14px] text-gray-300 font-light">
                    <span className="text-gold mr-2 sm:mr-3 mt-0.5 opacity-70 flex-shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors duration-300 group/btn text-sm sm:text-base">
              Request Full Case Study
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10 min-w-0">
            {[
              { metric: "340%", label: "Revenue Growth", sub: "Month 1 → Month 6" },
              { metric: "5.2x", label: "Blended ROAS", sub: "Across Meta & Google" },
              { metric: "42%", label: "CAC Reduction", sub: "Within first 60 days" },
              { metric: "100+", label: "Orders / Day", sub: "Consistent 4+ months" },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="p-4 sm:p-8 bg-dark-bg flex flex-col justify-center min-w-0">
                <span className="text-xl sm:text-3xl md:text-4xl font-display text-gold mb-1 block tabular-nums break-all sm:break-normal">{stat.metric}</span>
                <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-white font-bold mb-1 leading-tight">{stat.label}</span>
                <span className="text-[10px] sm:text-[11px] text-gray-600 font-light italic">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CaseStudy;
