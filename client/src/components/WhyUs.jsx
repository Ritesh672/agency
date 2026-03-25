import { motion } from 'framer-motion';
import { Users, UserCheck, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Focus & Attention",
    subtitle: "We Go Deep, Not Wide",
    description: "We partner with only 2–3 brands at a time so we can focus on what actually moves revenue — not just manage accounts.",
    bullets: ["Daily campaign monitoring", "Weekly growth strategy calls", "Full-funnel optimization"]
  },
  {
    icon: <UserCheck className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Founder-Led Execution",
    subtitle: "Work Directly With Founders",
    description: "No account managers. No juniors. You work directly with the people building and scaling brands every day.",
    bullets: ["Direct WhatsApp/Slack access", "Fast decision making", "Zero communication gaps"]
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />,
    title: "Revenue First Approach",
    subtitle: "We Optimize for Profit, Not Vanity Metrics",
    description: "We don't chase impressions or clicks. Every decision is based on revenue, ROAS, and long-term profitability.",
    bullets: ["ROAS & CAC focused campaigns", "Data-backed scaling", "No fluff reporting"]
  }
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

const WhyUs = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <CharReveal text="Why Us" />
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display mb-6">Not Another Agency. A Revenue Partner.</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            We work with a small number of D2C brands to scale revenue profitably through ads, creatives, and strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-dark-bg p-8 lg:p-10 border border-white/5 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:border-white/20 transition-all duration-500 flex flex-col h-full group"
            >
              <div>
                {reason.icon}
                <p className="text-gold text-xs tracking-[0.2em] font-bold uppercase mb-2">{reason.title}</p>
                <h3 className="text-2xl font-display mb-5 font-medium tracking-wide">{reason.subtitle}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm lg:text-base mb-8">{reason.description}</p>
              </div>
              <div className="mt-auto">
                <ul className="space-y-3">
                  {reason.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-gray-300 font-light">
                      <span className="text-gold mr-3 mt-1 opacity-70">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center p-8 lg:p-12 border border-white/5 bg-dark-bg hover:border-gold/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] transition-all duration-500 rounded-sm group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          <h3 className="text-2xl md:text-3xl font-display text-white relative z-10 font-medium">
            We've already helped brands scale to <span className="text-gold italic font-light">₹3Cr+</span> in revenue with consistent <span className="text-gold italic font-light">100+ daily orders</span> — and we're just getting started.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
