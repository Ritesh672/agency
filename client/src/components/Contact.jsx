import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStep1 = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setFormData(Object.fromEntries(data));
    setStep(2);
  };

  const handleStep2 = async (e) => {
    e.preventDefault();
    const data2 = new FormData(e.target);
    const allData = { ...formData, ...Object.fromEntries(data2) };

    setIsSubmitted(true);

    fetch("https://formsubmit.co/ajax/riteshyad672@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
          <p className="text-gold text-xs tracking-[0.3em] font-medium uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-gold"></span>
            Apply to Work With Us
          </p>
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
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="text-gold font-display text-sm font-medium w-6 flex-shrink-0">{item.step}</span>
                <div className="h-px flex-1 bg-white/5"></div>
                <div className="text-right">
                  <span className="text-white text-sm font-medium">{item.title}</span>
                  <span className="text-gray-600 text-xs ml-2 font-light">{item.desc}</span>
                </div>
              </div>
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
          className="bg-dark-bg p-6 lg:p-10 border border-white/10 relative"
        >
          {isSubmitted ? (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-bg p-8 text-center border border-gold/30">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-display text-white mb-2">Application Received</h3>
              <p className="text-gray-400 font-light">We'll review your details and respond within 24 hours.</p>
            </div>
          ) : null}

          <div className="flex items-center gap-2 mb-8">
            <div className={`h-1 flex-1 transition-colors duration-300 ${step >= 1 ? 'bg-gold' : 'bg-white/10'}`}></div>
            <div className={`h-1 flex-1 transition-colors duration-300 ${step >= 2 ? 'bg-gold' : 'bg-white/10'}`}></div>
            <span className="text-[10px] text-gray-500 tracking-widest ml-2 uppercase">Step {step}/2</span>
          </div>

          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Your Name</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">WhatsApp Number</label>
                <input required name="whatsapp" type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="+91 99999 99999" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Brand / Company</label>
                <input required name="company" type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="Brand Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Website</label>
                <input name="website" type="url" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="https://" />
              </div>
              <button type="submit" className="w-full bg-gold text-black font-medium py-3.5 hover:bg-gold-light transition-colors duration-300 mt-2">
                Continue -&gt;
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleStep2} className="space-y-6 relative z-10">
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
                <textarea required name="challenge" rows="3" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light resize-none" placeholder="e.g. High CAC, inconsistent ROAS, can't scale creatives..."></textarea>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3.5 border border-white/20 text-gray-400 hover:text-white hover:border-white/40 transition-colors font-medium text-sm">
                  &lt;- Back
                </button>
                <button type="submit" className="flex-1 bg-white text-black font-medium py-3.5 hover:bg-gold transition-colors duration-300">
                  Submit Application
                </button>
              </div>
              <p className="text-center text-[11px] text-gray-600 font-light italic">
                We respond within 24 hours. Only serious inquiries.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
