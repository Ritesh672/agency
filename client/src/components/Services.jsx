import { motion } from 'framer-motion';
import { TrendingUp, Target, Palette, PenTool, Globe } from 'lucide-react';

const services = [
  { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gold mb-5 sm:mb-6" strokeWidth={1.5} />, title: "Performance Marketing", description: "Data-driven campaigns focused on scaling revenue profitably. We manage Meta & Google Ads with a focus on ROAS, CAC, and LTV optimization.", features: ["ROAS-focused campaign scaling", "Funnel optimization (TOF, MOF, BOF)", "Weekly performance reporting"] },
  { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-gold mb-5 sm:mb-6" strokeWidth={1.5} />, title: "Paid Social & Search", description: "Full-funnel ad execution across Meta & Google with continuous A/B testing and budget optimization.", features: ["Creative testing (10–20 variations/week)", "Audience & pixel optimization", "Budget scaling without performance drop"] },
  { icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-gold mb-5 sm:mb-6" strokeWidth={1.5} />, title: "Brand Strategy", description: "We craft positioning, messaging, and brand identity that makes your brand stand out and convert.", features: ["Competitor & market research", "Brand positioning & USP", "Customer persona development"] },
  { icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6 text-gold mb-5 sm:mb-6" strokeWidth={1.5} />, title: "Creative & Content", description: "High-converting creatives designed for performance — from UGC to ad creatives that drive sales.", features: ["UGC & ad video production", "Scroll-stopping hooks & scripts", "Performance-based creative iteration"] },
  { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-gold mb-5 sm:mb-6" strokeWidth={1.5} />, title: "Website Optimisation", description: "We audit, redesign, and optimise your landing pages and store for speed, UX, and conversion — turning more visitors into buyers.", features: ["CRO audits & A/B testing", "Page speed & Core Web Vitals", "Landing page redesign for higher CVR"], tag: "New" },
];

const CharReveal = ({ text }) => (
  <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-gold text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.3em] font-medium uppercase mb-4 flex flex-wrap gap-x-0.5 gap-y-0.5 max-w-full">
    {text.split('').map((char, i) => (
      <motion.span key={i} variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: i * 0.03 } } }} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="bg-dark-card border border-white/5 p-6 sm:p-8 lg:p-10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:border-white/20 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
  >
    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
    <div>
      {service.icon}
      <h3 className="text-xl sm:text-2xl font-display mb-3 sm:mb-4 font-medium tracking-wide group-hover:text-gold transition-colors duration-300 relative">
        {service.title}
        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out block" />
      </h3>
      <p className="text-gray-400 font-light leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">{service.description}</p>
    </div>
    <div className="mt-auto">
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-xs sm:text-[13px] text-gray-300 font-light">
            <span className="text-gold mr-2 sm:mr-3 mt-0.5 opacity-70 flex-shrink-0">✦</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-16 sm:py-24 md:py-32 bg-dark-bg relative border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 min-w-0">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 sm:mb-20">
        <CharReveal text="What We Do" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display">Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {services.slice(0, 2).map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {services.slice(2, 4).map((s, i) => <ServiceCard key={i + 2} service={s} index={i + 2} />)}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-dark-card border border-gold/20 p-6 sm:p-8 lg:p-10 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] hover:border-gold/40 transition-all duration-500 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              {services[4].icon}
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase bg-gold/15 text-gold px-2 py-0.5 border border-gold/30">{services[4].tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display mb-3 sm:mb-4 font-medium group-hover:text-gold transition-colors duration-300">{services[4].title}</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">{services[4].description}</p>
          </div>
          <div>
            <ul className="space-y-3">
              {services[4].features.map((f, idx) => (
                <li key={idx} className="flex items-start text-sm sm:text-[14px] text-gray-300 font-light">
                  <span className="text-gold mr-3 mt-0.5 opacity-70 flex-shrink-0">✦</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
              <p className="text-xs text-gray-500 font-light italic">Faster sites convert more. A 1-second delay costs up to 7% in conversions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Services;
