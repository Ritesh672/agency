import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: "Cr+", prefix: "₹", label: "Revenue Generated", context: "Across active client accounts", decimals: 0 },
  { value: 5, suffix: "X", prefix: "3–", label: "Blended ROAS Range", context: "Consistent across campaigns", decimals: 0, static: "3–5X" },
  { value: 40, suffix: "%+", prefix: "", label: "CAC Reduction", context: "Achieved within 60 days", decimals: 0 },
  { value: 100, suffix: "+", prefix: "", label: "Consistent Daily Orders", context: "For our flagship D2C client", decimals: 0 },
];

const Counter = ({ target, prefix, suffix, decimals, isStatic, staticVal, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || isStatic) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, isStatic]);

  const display = isStatic
    ? staticVal
    : `${prefix}${decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}${suffix}`;

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display text-gold mb-1 font-medium block tabular-nums">
      {display}
    </span>
  );
};

const SocialProof = () => {
  return (
    <section className="py-20 bg-dark-bg border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start justify-center p-8 bg-dark-bg"
            >
              <Counter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                isStatic={!!stat.static}
                staticVal={stat.static}
              />
              <p className="text-white text-xs md:text-sm tracking-[0.15em] uppercase font-bold mb-1">
                {stat.label}
              </p>
              <p className="text-gray-600 text-[11px] font-light italic">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
