import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);

    // 1. Send data to email (Silently via FormSubmit API)
    fetch("https://formsubmit.co/ajax/riteshyad672@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(err => console.error(err));

    // 2. Redirect to WhatsApp
    const text = `*New Lead Application*%0A%0AName: ${data.name}%0AWhatsApp: ${data.whatsapp}%0ACompany: ${data.company}%0AWebsite: ${data.website || 'N/A'}%0ABudget: ${data.budget}%0AChallenge: ${data.challenge}`;
    const whatsappUrl = `https://wa.me/919664412018?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the form
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card relative border-b border-white">
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
            Please fill out the form entirely. We review applications daily and will reach out if we're a mutual fit.
          </p>
          
          <div className="hidden lg:block">
            <div className="w-64 h-64 border border-white/5 rotate-12 mt-20 relative">
              <div className="absolute inset-0 border border-gold/20 -rotate-12 translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="bg-dark-bg p-5 lg:p-12 border border-white/10 relative"
        >
          {isSubmitted ? (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-bg p-8 text-center border border-gold/30">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-display text-white mb-2">Application Received</h3>
              <p className="text-gray-400 font-light">We will review your details and respond within 24 hours.</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">Name</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="John Doe" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">WhatsApp Number</label>
                <input required name="whatsapp" type="tel" className="w-full bg-transparent border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="+91 99999 99999" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">Company</label>
                <input required name="company" type="text" className="w-full bg-transparent border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="Brand Name" />
              </div>
              <div className="space-y-1 lg:space-y-2">
                <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">Website</label>
                <input name="website" type="url" className="w-full bg-transparent border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light" placeholder="https://" />
              </div>
            </div>

            <div className="space-y-1 lg:space-y-2 pt-1 lg:pt-2">
              <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">Monthly Ad Budget</label>
              <select required name="budget" defaultValue="" className="w-full bg-dark-bg border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white focus:outline-none focus:border-gold transition-colors font-light appearance-none cursor-pointer">
                <option value="" disabled>Select a range</option>
                <option value="<5L">&lt; ₹5L</option>
                <option value="5L-20L">₹5L – ₹20L</option>
                <option value="20L+">₹20L+</option>
              </select>
            </div>

            <div className="space-y-1 lg:space-y-2 pt-1 lg:pt-2">
              <label className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold">Current Challenge</label>
              <textarea required name="challenge" rows="2" className="w-full bg-transparent border-b border-white/20 pb-1 lg:pb-2 text-sm lg:text-base text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors font-light resize-none" placeholder="What's your biggest bottleneck right now?"></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black text-sm lg:text-base font-medium py-3 lg:py-4 mt-6 hover:bg-gold transition-colors duration-300">
              Submit Application
            </button>
            <p className="text-center text-[10px] lg:text-xs text-gray-500 font-light italic mt-3 lg:mt-4">
              We respond within 24 hours. Only serious inquiries.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
