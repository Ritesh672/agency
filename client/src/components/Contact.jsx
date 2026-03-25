import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const CharReveal = ({ text, delay = 0 }) => {
  const chars = text.split('');
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6 flex items-center gap-3"
    >
      <span className="w-8 h-[1px] bg-gold flex-shrink-0" />
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

const Contact = () => {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goToStep2 = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setFormData(Object.fromEntries(data));
    setDir(1);
    setStep(2);
  };

  const goBack = () => {
    setDir(-1);
    setStep(1);
  };

  const handleStep2 = async (e) => {
    e.preventDefault();
    const data2 = new FormData(e.target);
    const allData = { ...formData, ...Object.fromEntries(data2) };
    setIsSubmitted(true);
    fetch("https://formsubmit.co/ajax/riteshyad672@gmail.com", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(allData)
    }).catch(err => console.error(err));
    const text = `*New Lead Application*%0A%0AName: ${allData.name}%0AWhatsApp: ${allData.whatsapp}%0ACompany: ${allData.company}%0AWebsite: ${allData.website || 'N/A'}%0ABudget: ${allData.budget}%0AChallenge: ${allData.challenge}`;
    window.open(`https://wa.me/919664412018?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <CharReveal text="Apply to Work With Us" delay={0.1} />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-[1.1]">
            Let's discuss your revenue goals.
          </h2>
          <p className="text-gray-400 font-light text-lg mb-10 max-w-md">
            We review applications daily and reach out if we're a mutual fit. Only 2 spots open this quarter.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { step: "01", title: "Apply", desc: "Fill out the short form" },
              { step: "02", title: "Review call", desc: "30-min strategy session" },
              { step: "03", title: "We start", desc: "Onboard within 48 hours" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-gold font-display text-sm font-medium w-6 flex-shrink-0">{item.step}</span>
                <div className="h-px flex-1 bg-white/5"></div>
                <div className="text-right">
                  <span className="text-white text-sm font-medium">{item.title}</span>
                  <span className="text-gray-600 text-xs ml-2 font-light">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="w-48 h-48 border border-white/5 rotate-12 relative">
              <div className="absolute inset-0 border border-gold/20 -rotate-12 translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-dark-bg p-6 lg:p-10 border border-white/10 relative overflow-hidden"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-bg p-8 text-center border border-gold/30"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-display text-white mb-2">Application Received</h3>
              <p className="text-gray-400 font-light">We'll review your details and respond within 24 hours.</p>
            </motion.div>
          ) : null}

          <div className="flex items-center gap-2 mb-8">
            <motion.div
              className="h-[2px] flex-1 bg-gold"
              initial={{ scaleX: 0.5 }}
              animate={{ scaleX: step === 1 ? 0.5 : 1 }}
              style={{ transformOrigin: 'left' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">Step {step}/2</span>
          </div>

          <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
            <AnimatePresence mode="wait" custom={dir}>
              {step === 1 ? (
                <motion.form
                  key="step1"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onSubmit={goToStep2}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                    <input required name="name" defaultValue={formData.name || ''} type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">WhatsApp Number</label>
                    <input required name="whatsapp" defaultValue={formData.whatsapp || ''} type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="+91 99999 99999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Brand / Company</label>
                    <input required name="company" defaultValue={formData.company || ''} type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="Brand Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Website</label>
                    <input name="website" defaultValue={formData.website || ''} type="url" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="https://" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center bg-gold text-black font-semibold py-3.5 border border-gold shadow-[0_10px_30px_rgba(245,158,11,0.15)] hover:bg-gold-light transition-colors duration-300">
                    Continue
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="step2"
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onSubmit={handleStep2}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Monthly Ad Budget</label>
                    <select required name="budget" defaultValue="" className="w-full bg-dark-bg border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors font-light appearance-none cursor-pointer">
                      <option value="" disabled>Select a range</option>
                      <option value="under-5L">Under Rs 5L / month</option>
                      <option value="5L-20L">Rs 5L - Rs 20L / month</option>
                      <option value="20L+">Rs 20L+ / month</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Biggest Bottleneck Right Now</label>
                    <textarea required name="challenge" rows="4" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light resize-none" placeholder="e.g. High CAC, inconsistent ROAS, can't scale creatives..."></textarea>
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={goBack} className="px-6 py-3.5 border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors font-medium text-sm">
                      Back
                    </button>
                    <button type="submit" className="flex-1 inline-flex items-center justify-center bg-white text-black font-semibold py-3.5 border border-white shadow-[0_10px_30px_rgba(255,255,255,0.08)] hover:bg-gold transition-colors duration-300">
                      Submit Application
                    </button>
                  </div>
                  <p className="text-center text-[11px] text-gray-600 font-light italic">
                    We respond within 24 hours. Only serious inquiries.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
