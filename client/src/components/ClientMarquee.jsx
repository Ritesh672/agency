import { useState } from 'react';
import gulaabGali from '../assets/LOGO GULAAB GALI PNG.png';
import dhirai from '../assets/dhirai logo.avif';
import shakiyan from '../assets/shakiyan logo.webp';

const clients = [
  { name: "Gulaab Gali", logo: gulaabGali },
  { name: "Dhirai", logo: dhirai },
  { name: "Sakhiyaan", logo: shakiyan },
];
const allClients = [...clients, ...clients, ...clients, ...clients];

const ClientMarquee = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section className="py-10 sm:py-14 bg-[#0a0a0a] border-b border-white/10 overflow-x-clip overflow-y-visible relative w-full max-w-full min-w-0">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />
      <p className="text-center text-[10px] tracking-[0.35em] text-gray-600 uppercase font-medium mb-6 sm:mb-8">Brands We've Scaled</p>
      <div
        className="flex"
        style={{ animation: `marquee 24s linear infinite`, animationPlayState: paused ? 'paused' : 'running' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {allClients.map((client, i) => (
          <div key={i} className="flex items-center justify-center mx-6 sm:mx-10 flex-shrink-0" style={{ minWidth: '110px' }}>
            <div className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer">
              <div className="w-20 sm:w-28 h-12 sm:h-16 flex items-center justify-center rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={client.logo} alt={client.name} className="max-w-[70px] sm:max-w-[90px] max-h-9 sm:max-h-12 object-contain transition-all duration-300"
                  style={{ filter: 'brightness(0) invert(1)', opacity: paused ? 0.7 : 0.45 }} />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-gray-600 uppercase font-medium group-hover:text-gold transition-colors duration-300">{client.name}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default ClientMarquee;
