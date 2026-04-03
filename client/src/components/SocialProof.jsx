import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: "Cr+", prefix: "₹", label: "Revenue Generated", context: "Across active client accounts" },
  { value: 5, suffix: "X", prefix: "3–", label: "Blended ROAS Range", context: "Consistent across campaigns", static: "3–5X" },
  { value: 40, suffix: "%+", prefix: "", label: "CAC Reduction", context: "Achieved within 60 days" },
  { value: 100, suffix: "+", prefix: "", label: "Daily Orders", context: "For our flagship D2C client" },
];

const Counter = ({ target, prefix, suffix, isStatic, staticVal, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || isStatic) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, isStatic]);

  const display = isStatic ? staticVal : `${prefix}${Math.floor(count)}${suffix}`;

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-display text-gold mb-1 font-medium block tabular-nums">
      {display}
    </span>
  );
};

const SocialProof = () => (
  <section className="py-12 sm:py-20 bg-dark-bg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 min-w-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 min-w-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-start justify-center p-4 sm:p-8 bg-dark-bg min-w-0 overflow-hidden"
          >
            <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} isStatic={!!stat.static} staticVal={stat.static} />
            <p className="text-white text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-[0.15em] uppercase font-bold mb-1 leading-tight break-words hyphens-auto">
              {stat.label}
            </p>
            <p className="text-gray-600 text-[10px] sm:text-[11px] font-light italic leading-snug break-words">
              {stat.context}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
