import { motion } from 'framer-motion';

const CaseStudy = () => {
  return (
    <section id="work" className="py-32 bg-dark-bg relative overflow-hidden border-b border-white">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-dark-card border border-white/10 p-6 md:p-12 lg:p-20 relative overflow-hidden group"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold"></span>
                Featured Case Study
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium leading-[1.1] mb-6">
                Scaling a Premium D2C Brand to Profitable Growth
              </h2>
              <p className="text-gray-400 leading-relaxed font-light mb-8 max-w-md">
                We partnered with a growing clothing brand that was struggling with inconsistent sales and high CAC. By rebuilding their funnel and focusing on performance-driven creatives, we turned it into a predictable revenue engine.
              </p>

              <div className="mb-8">
                <p className="text-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">What We Did</p>
                <ul className="space-y-3">
                  {[
                    "Rebuilt the ad account structure from scratch",
                    "Introduced high-AOV bundles to increase order value",
                    "Scaled winning creatives through aggressive testing",
                    "Optimized full funnel (TOF → Retargeting → Conversion)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-gray-300 font-light">
                      <span className="text-gold mr-3 mt-1 opacity-70">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/5 border-l-2 border-gold p-4 mb-10 max-w-lg">
                <p className="text-gray-300 italic font-light">
                  From inconsistent, unprofitable sales <span className="text-gold font-medium px-1">→</span> to predictable, scalable growth.
                </p>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors duration-300 group/btn"
              >
                Request Case Study
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white divide-y sm:divide-y-0 sm:divide-x divide-white bg-dark-bg">
              {[
                { metric: "340%", label: "REVENUE GROWTH" },
                { metric: "5.2x", label: "BLENDED ROAS" },
                { metric: "42%", label: "CAC REDUCTION" },
                { metric: "100+", label: "ORDERS / DAY" },
              ].map((stat, index) => (
                <div key={index} className="p-6 md:p-8 flex flex-col justify-center relative">
                  {/* For mobile, divide-y handles top/bottom. For desktop, sm:divide-x handles left/right. We need bottom borders for the top row in desktop. */}
                  {index < 2 && <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-px bg-white"></div>}
                  {/* For odd indexes (right column), we need left border in desktop which divide-x handles */}
                  
                  <span className="text-3xl sm:text-4xl font-display text-gold mb-2 block">{stat.metric}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
