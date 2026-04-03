import { motion } from 'framer-motion';

const founders = [
  { initial: "D", name: "Dinesh Yelle", role: "Co-Founder & Marketing Lead", bio: "Leads strategy and client relationships. Experienced in D2C growth marketing — the brain behind the campaigns.", linkedin: "#", color: "from-amber-900/30 to-transparent" },
  { initial: "R", name: "Ritesh Y.", role: "Co-Founder — Marketing & Dev", bio: "Works across both performance marketing and development. Builds and runs the ads, manages campaigns manually, and codes the tech side. The all-rounder keeping everything moving.", linkedin: "#", color: "from-gold/10 to-transparent" },
  { initial: "A", name: "Atul Chauhan", role: "Co-Founder & Developer", bio: "Leads the technical build — websites, landing pages, and conversion-focused development that turns traffic into revenue.", linkedin: "#", color: "from-amber-900/20 to-transparent" },
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

const About = () => (
  <section className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
    <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 hidden lg:block" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <CharReveal text="The Origin" delay={0.1} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-[1.2] mb-6 sm:mb-8 break-words">
            We built the agency <br className="hidden sm:block" />
            we wished we could hire.
          </h2>
          <div className="space-y-5 sm:space-y-6 text-gray-400 font-light leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base">
            <p>We started Zivonx because we were tired of agencies that vanish after onboarding. The bait-and-switch. The monthly reports that hide bad numbers behind vanity metrics.</p>
            <p>Our philosophy is simple: Every rupee you spend is tracked, optimized, and reported with complete transparency. We treat your ad budget like our own.</p>
            <p className="text-white border-l-2 border-gold pl-4 sm:pl-6 py-2 text-base sm:text-lg">
              Based in Bangalore.<br />Scaling brands across India.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-gold text-[10px] sm:text-xs tracking-[0.3em] font-medium uppercase mb-4 sm:mb-6">
            The Team
          </motion.p>
          <div className="space-y-3 sm:space-y-4">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30, rotate: 1 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-dark-card border border-white/8 p-4 sm:p-5 flex gap-3 sm:gap-4 hover:border-gold/20 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${founder.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors duration-300 relative z-10">
                  <span className="font-display text-gold text-base sm:text-lg font-bold">{founder.initial}</span>
                </div>
                <div className="flex-1 relative z-10 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="min-w-0 flex-1 pr-2">
                      <h3 className="text-white font-medium text-sm truncate">{founder.name}</h3>
                      <p className="text-gold text-[10px] tracking-wider uppercase font-bold mb-1.5 leading-tight">{founder.role}</p>
                    </div>
                    <a href={founder.linkedin} className="text-gray-600 hover:text-gold transition-colors mt-0.5 flex-shrink-0" aria-label="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35 }}
              className="border border-white/5 p-4 sm:p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-2 min-w-0">
              <div className="min-w-0">
                <p className="text-white text-sm font-medium mb-0.5">Talk directly to us</p>
                <p className="text-gray-500 text-xs font-light">No account managers. Ever.</p>
              </div>
              <a href="#contact" className="w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-2 rounded-sm bg-gold/10 border border-gold/35 text-gold text-sm font-semibold hover:bg-gold hover:text-black hover:border-gold transition-colors px-4 py-3 sm:py-2 sm:px-4 flex-shrink-0 sm:ml-3">
                Apply now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
