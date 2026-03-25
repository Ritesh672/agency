import { motion } from 'framer-motion';
import { TrendingUp, Target, Palette, PenTool, Globe } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Performance Marketing",
    description: "Data-driven campaigns focused on scaling revenue profitably. We manage Meta & Google Ads with a focus on ROAS, CAC, and LTV optimization.",
    features: ["ROAS-focused campaign scaling", "Funnel optimization (TOF, MOF, BOF)", "Weekly performance reporting"]
  },
  {
    icon: <Target className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Paid Social & Search",
    description: "Full-funnel ad execution across Meta & Google with continuous A/B testing and budget optimization.",
    features: ["Creative testing (10–20 variations/week)", "Audience & pixel optimization", "Budget scaling without performance drop"]
  },
  {
    icon: <Palette className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Brand Strategy",
    description: "We craft positioning, messaging, and brand identity that makes your brand stand out and convert.",
    features: ["Competitor & market research", "Brand positioning & USP", "Customer persona development"]
  },
  {
    icon: <PenTool className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Creative & Content",
    description: "High-converting creatives designed for performance — from UGC to ad creatives that drive sales.",
    features: ["UGC & ad video production", "Scroll-stopping hooks & scripts", "Performance-based creative iteration"]
  },
  {
    icon: <Globe className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Website Optimisation",
    description: "We audit, redesign, and optimise your landing pages and store for speed, UX, and conversion — turning more visitors into buyers.",
    features: ["CRO audits & A/B testing", "Page speed & Core Web Vitals", "Landing page redesign for higher CVR"],
    tag: "New"
  },
];

const CharReveal = ({ text, delay = 0 }) => {
  const chars = text.split('');
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-4"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: delay + i * 0.03 } }
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-dark-card border border-white/5 p-8 lg:p-10 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:border-white/20 transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
  >
    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
    <div>
      {service.icon}
      <h3 className="text-2xl font-display mb-4 font-medium tracking-wide group-hover:text-gold transition-colors duration-300 relative">
        {service.title}
        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out block" />
      </h3>
      <p className="text-gray-400 font-light leading-relaxed mb-6">{service.description}</p>
    </div>
    <div className="mt-auto">
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-[13px] text-gray-300 font-light">
            <span className="text-gold mr-3 mt-0.5 opacity-70">✦</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-32 bg-dark-bg relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <CharReveal text="What We Do" />
          <h2 className="text-5xl md:text-6xl font-display">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {services.slice(2, 4).map((s, i) => <ServiceCard key={i + 2} service={s} index={i + 2} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-dark-card border border-gold/20 p-8 lg:p-10 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] hover:border-gold/40 transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {services[4].icon}
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase bg-gold/15 text-gold px-2 py-0.5 border border-gold/30">
                  {services[4].tag}
                </span>
              </div>
              <h3 className="text-2xl font-display mb-4 font-medium tracking-wide group-hover:text-gold transition-colors duration-300">
                {services[4].title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">{services[4].description}</p>
            </div>
            <div>
              <ul className="space-y-3">
                {services[4].features.map((f, idx) => (
                  <li key={idx} className="flex items-start text-[14px] text-gray-300 font-light">
                    <span className="text-gold mr-3 mt-0.5 opacity-70">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 font-light italic">
                  Faster sites convert more. A 1-second delay costs up to 7% in conversions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
