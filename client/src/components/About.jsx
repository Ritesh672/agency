import { motion } from 'framer-motion';

const founders = [
  {
    initial: "R",
    name: "Ritesh Y.",
    role: "Co-Founder & Growth Lead",
    bio: "Ex-growth at two funded D2C startups. Managed Rs 2Cr+ in Meta ad spend. Obsessed with ROAS and profitable scaling.",
    linkedin: "#"
  },
  {
    initial: "S",
    name: "Sahil K.",
    role: "Co-Founder & Creative Lead",
    bio: "Built creative systems for 10+ D2C brands. Specializes in UGC, hooks, and scroll-stopping ad creatives.",
    linkedin: "#"
  }
];

const About = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/10">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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

            <div className="space-y-6 text-gray-400 font-light leading-relaxed mb-12">
              <p>
                We started Zivonx because we were tired of agencies that vanish after onboarding. The bait-and-switch. The monthly reports that hide bad numbers behind vanity metrics.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6">The Founders</p>
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-dark-card border border-white/8 p-6 flex gap-5 hover:border-gold/20 transition-colors duration-300 group">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="font-display text-gold text-xl font-bold">{founder.initial}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-white font-medium text-base">{founder.name}</h3>
                      <p className="text-gold text-xs tracking-wider uppercase font-bold mb-2">{founder.role}</p>
                    </div>
                    <a href={founder.linkedin} className="text-gray-600 hover:text-gold transition-colors" aria-label="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}

            <div className="border border-white/5 p-5 flex items-center justify-between mt-2">
              <div>
                <p className="text-white text-sm font-medium mb-0.5">Talk directly to us</p>
                <p className="text-gray-500 text-xs font-light">No account managers. Ever.</p>
              </div>
              <a href="#contact" className="text-gold text-sm font-medium hover:text-white transition-colors flex items-center gap-1.5">
                Apply now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
