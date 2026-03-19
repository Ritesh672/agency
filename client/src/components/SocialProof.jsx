import { motion } from 'framer-motion';

const stats = [
  { value: "₹3Cr+", label: "REVENUE GENERATED" },
  { value: "3–5X", label: "BLENDED ROAS RANGE" },
  { value: "40%+", label: "CAC REDUCTION ACHIEVED" },
  { value: "100+", label: "CONSISTENT DAILY ORDERS" },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-dark-bg border-b border-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <h3 className="text-4xl md:text-5xl font-display text-white mb-2 font-medium">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
