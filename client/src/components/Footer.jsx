const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 relative z-10">
          
          {/* Left Section: Brand & Positioning */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block font-display text-4xl font-semibold tracking-wide mb-6">
              Arkive<span className="text-gold">.</span>
            </a>
            <p className="text-gray-400 font-light text-base max-w-sm mb-10 leading-relaxed">
              A performance-driven growth partner for D2C brands scaling through ads, creatives, and strategy.
            </p>
            <div className="space-y-2">
              <p className="text-white text-sm tracking-[0.1em] font-medium">Bangalore, India</p>
              <a href="mailto:hello@arkive.in" className="text-gold hover:text-white transition-colors text-sm tracking-wide">hello@arkive.in</a>
            </div>
          </div>

          {/* Center Section: Navigation */}
          <div className="lg:col-span-3 lg:justify-self-center">
            <h4 className="text-white font-display text-xl mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-gold transition-colors font-light text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: CTA & Socials */}
          <div className="lg:col-span-4 lg:justify-self-end flex flex-col items-start lg:items-end text-left lg:text-right">
            <h4 className="text-white font-display text-2xl mb-4">Ready to scale your brand?</h4>
            <p className="text-gray-400 font-light text-sm mb-8 leading-relaxed max-w-xs">
              We only take on a limited number of clients to ensure focus and results.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-gold font-medium mb-12 hover:text-white transition-colors group"
            >
              Apply to Work With Us 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <div className="mt-auto">
              <p className="text-white text-sm font-medium tracking-widest uppercase mb-4">Follow our work</p>
              <div className="flex gap-4 justify-start lg:justify-end">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm font-light">Instagram</a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm font-light">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-gray-400 text-sm font-light order-2 md:order-1">
            © 2025 Arkive Digital. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs italic font-light tracking-wide order-1 md:order-2 text-center md:text-left">
            Scaling D2C brands with a focus on revenue, not vanity metrics.
          </p>
          
          <div className="flex gap-4 text-xs text-gray-400 font-light order-3">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
