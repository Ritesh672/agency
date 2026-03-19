import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold"></span>
              The Origin
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-[1.2] mb-8">
              We built the agency <br />
              we wished we could hire.
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                We started Arkive Digital because we were tired of agencies that vanish after onboarding. The bait-and-switch. The monthly reports that hide bad numbers behind vanity metrics.
              </p>
              <p>
                Our philosophy is simple: Every rupee you spend is tracked, optimized, and reported with complete transparency. We treat your ad budget like our own.
              </p>
              <p className="text-white border-l-2 border-gold pl-6 mt-8 py-2 text-lg">
                Based in Bangalore.<br />
                Scaling brands across India.
              </p>
            </div>
          </motion.div>

          {/* Abstract Image Replacement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative h-[600px] bg-dark-card border border-white/10 overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
             
             {/* Abstract Geometric Composition */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-gold/20 rotate-12 transition-transform duration-700 group-hover:rotate-0"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-gold/40 -rotate-12 transition-transform duration-700 group-hover:rotate-0"></div>
             
             <div className="absolute bottom-10 right-10 text-gold text-sm tracking-widest font-display z-20 opacity-50">
               A. DIGITAL
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
