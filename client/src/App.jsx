import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const WHATSAPP_E164 = '919664412018';

function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_E164}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[45] flex h-14 w-14 items-center justify-center rounded-full border border-gold-dark/40 bg-gradient-to-br from-gold to-gold-dark text-black shadow-[0_8px_28px_rgba(245,158,11,0.35)] ring-2 ring-gold/30 transition-[transform,box-shadow,background-color] duration-300 hover:scale-105 hover:from-gold-light hover:to-gold hover:shadow-[0_10px_36px_rgba(245,158,11,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg sm:bottom-8 sm:right-8"
      aria-label="Message us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-black" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-body selection:bg-gold-light/30 selection:text-gold-light relative overflow-x-hidden">
      
      {/* Ambient shapes: CSS animations for smoother scroll (no main-thread JS loops) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="ambient-blob ambient-blob--a absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px]" />
        <div className="ambient-blob ambient-blob--b absolute top-[40%] -left-[15%] w-[40vw] h-[40vw] bg-amber-600/5 rounded-full blur-[100px]" />
        <div className="ambient-blob ambient-blob--c absolute -bottom-[10%] right-[10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 font-body min-w-0 max-w-full">
        <Navbar />
        <Hero />
        <ClientMarquee />
        <SocialProof />
        <Services />
        <WhyUs />
        <CaseStudy />
        <About />
        <Contact />
        <Footer />
        <WhatsAppFab />
      </div>
    </div>
  );
}

export default App;
