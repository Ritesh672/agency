import { motion } from 'framer-motion';

const stats = [
  { value: "Rs 3Cr+", label: "Revenue Generated", context: "Across active client accounts" },
  { value: "3-5X", label: "Blended ROAS Range", context: "Consistent across campaigns" },
  { value: "40%+", label: "CAC Reduction", context: "Achieved within 60 days" },
  { value: "100+", label: "Daily Orders", context: "For our flagship D2C client" },
];

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
              <h3 className="text-4xl md:text-5xl font-display text-gold mb-1 font-medium">
                {stat.value}
              </h3>
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
