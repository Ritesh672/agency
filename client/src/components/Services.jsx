import { motion } from 'framer-motion';
import { TrendingUp, Target, Palette, PenTool } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Performance Marketing",
    description: "Data-driven campaigns focused on scaling revenue profitably. We manage Meta & Google Ads with a focus on ROAS, CAC, and LTV optimization.",
    features: [
      "ROAS-focused campaign scaling",
      "Funnel optimization (TOF, MOF, BOF)",
      "Weekly performance reporting"
    ]
  },
  {
    icon: <Target className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Paid Social & Search",
    description: "Full-funnel ad execution across Meta & Google with continuous A/B testing and budget optimization.",
    features: [
      "Creative testing (10-20 variations/week)",
      "Audience & pixel optimization",
      "Budget scaling without performance drop"
    ]
  },
  {
    icon: <Palette className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Brand Strategy",
    description: "We craft positioning, messaging, and brand identity that makes your brand stand out and convert.",
    features: [
      "Competitor & market research",
      "Brand positioning & USP",
      "Customer persona development"
    ]
  },
  {
    icon: <PenTool className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Creative & Content",
    description: "High-converting creatives designed for performance - from UGC to ad creatives that drive sales.",
    features: [
      "UGC & ad video production",
      "Scroll-stopping hooks & scripts",
      "Performance-based creative iteration"
    ]
  }
];

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
          <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-5xl md:text-6xl font-display">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-card border border-white/5 p-8 lg:p-10 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:border-white/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div>
                {service.icon}
                <h3 className="text-2xl font-display mb-4 font-medium tracking-wide group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[13px] text-gray-300 font-light">
                      <span className="text-gold mr-3 mt-0.5 opacity-70">*</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
