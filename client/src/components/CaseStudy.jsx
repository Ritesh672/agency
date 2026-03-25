import { motion } from 'framer-motion';

const CaseStudy = () => {
  return (
    <section id="work" className="py-32 bg-dark-bg relative overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-dark-card border border-white/10 p-6 md:p-12 lg:p-20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold"></span>
                Featured Case Study
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium leading-[1.1] mb-3">
                Scaling a Premium D2C Brand to Profitable Growth
              </h2>

              <p className="text-gray-500 text-sm font-light mb-8 italic">
                Bangalore-based D2C apparel brand | Fashion vertical | 2024
              </p>

              <p className="text-gray-400 leading-relaxed font-light mb-8 max-w-md">
                We partnered with a growing clothing brand struggling with inconsistent sales and high CAC. By rebuilding their funnel and focusing on performance-driven creatives, we turned it into a predictable revenue engine.
              </p>

              <div className="bg-white/3 border border-white/8 p-6 mb-8 max-w-lg relative">
                <div className="text-gold text-3xl font-display leading-none mb-3 opacity-50">"</div>
                <p className="text-gray-300 italic font-light leading-relaxed text-sm mb-4">
                  ZivonX did not just run ads. They rebuilt our entire growth engine. Our CAC dropped 42% in the first 60 days and we have been profitable every month since.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-display font-bold">A</div>
                  <div>
                    <p className="text-white text-xs font-medium">Aryan M.</p>
                    <p className="text-gray-500 text-[11px]">Founder, [Brand name withheld]</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">What We Did</p>
                <ul className="space-y-3">
                  {[
                    "Rebuilt the ad account structure from scratch",
                    "Introduced high-AOV bundles to increase order value",
                    "Scaled winning creatives through aggressive testing",
                    "Optimized full funnel (TOF -> Retargeting -> Conversion)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-gray-300 font-light">
                      <span className="text-gold mr-3 mt-1 opacity-70">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors duration-300 group/btn"
              >
                Request Full Case Study
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { metric: "340%", label: "Revenue Growth", sub: "Month 1 -> Month 6" },
                { metric: "5.2x", label: "Blended ROAS", sub: "Across Meta & Google" },
                { metric: "42%", label: "CAC Reduction", sub: "Within first 60 days" },
                { metric: "100+", label: "Orders / Day", sub: "Consistent for 4+ months" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="p-8 bg-dark-bg flex flex-col justify-center"
                >
                  <span className="text-3xl sm:text-4xl font-display text-gold mb-1 block">{stat.metric}</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-white font-bold mb-1">{stat.label}</span>
                  <span className="text-[11px] text-gray-600 font-light italic">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
