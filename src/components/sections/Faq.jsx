// components/sections/FAQ.jsx
import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  { q: "Est-ce que ça sonne vraiment comme un humain ?", a: "Oui. Les voix IA d'aujourd'hui sont indiscernables d'un humain dans 95% des cas. On vous fait écouter des exemples pendant l'appel de diagnostic. Si vous n'êtes pas convaincu, on ne part pas en production." },
  { q: "Qu'est-ce qui se passe pour les appels compliqués ?", a: "L'IA gère les cas standard (prix, disponibilité, réservation, zones de service). Pour tout ce qui sort de l'ordinaire, elle transfère l'appel vers vous avec un résumé complet déjà préparé." },
  { q: "Est-ce que mes clients vont savoir que c'est une IA ?", a: "C'est votre choix. On configure selon votre préférence. Légalement au Québec, il n'y a pas d'obligation de divulguer — mais on peut le faire si vous le souhaitez." },
  { q: "Combien de temps pour que ce soit en ligne ?", a: "Entre 3 et 7 jours ouvrables selon la complexité. On a déjà déployé en 48 heures pour des clients pressés." },
  { q: "Est-ce que ça marche avec mon calendrier actuel ?", a: "Oui. Google Calendar, Calendly, Jobber, ServiceTitan, et la plupart des outils de l'industrie du nettoyage au Québec. On vérifie lors de l'appel de diagnostic." },
  { q: "C'est quoi la garantie si ça ne marche pas ?", a: "Garantie 30 jours. Si le système ne capture pas au minimum 5 leads supplémentaires, on continue gratuitement jusqu'à ce que ce soit le cas." },
];

const FAQItem = ({ faq, isOpen, onToggle, index }) => (
  <div style={{ border: '1px solid', borderColor: isOpen ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.05)', borderRadius: '14px', overflow: 'hidden', transition: 'border-color 0.3s', background: isOpen ? 'rgba(124,58,237,0.09)' : 'rgba(18,8,38,0.85)', position: 'relative' }}>
    {isOpen && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), transparent)' }} />}
    <button onClick={onToggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 'clamp(1rem,2.5vw,1.375rem) clamp(1rem,2.5vw,1.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: isOpen ? '#a855f7' : 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', flexShrink: 0 }}>{String(index + 1).padStart(2, '0')}</span>
        <span style={{ fontSize: 'clamp(0.875rem,2vw,0.975rem)', fontWeight: 600, color: 'white', lineHeight: 1.4, transition: 'color 0.2s' }}>{faq.q}</span>
      </div>
      <div style={{ width: '28px', height: '28px', flexShrink: 0, borderRadius: '50%', background: isOpen ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)', border: `1px solid ${isOpen ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.07)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? '#a855f7' : 'rgba(255,255,255,0.25)', fontSize: '1.2rem', fontWeight: 300, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'all 0.25s' }}>+</div>
    </button>
    {isOpen && <div style={{ padding: '0 clamp(1rem,2.5vw,1.5rem) clamp(1rem,2.5vw,1.375rem) clamp(3rem,6vw,3.5rem)' }}>
      <p style={{ fontSize: 'clamp(0.85rem,2vw,0.9rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>{faq.a}</p>
    </div>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)', background: 'linear-gradient(to bottom, #000, #080318, #000)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-50px', bottom: '20%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
        <div className="fade-in-up" style={{ marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>● Questions fréquentes</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.035em', lineHeight: 1.05 }}>Vos questions.<br />Nos réponses directes.</h2>
        </div>
        <div className="fade-in-up" style={{ transitionDelay: '80ms', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />)}
        </div>
        <div className="fade-in-up" style={{ transitionDelay: '160ms', textAlign: 'center', marginTop: 'clamp(2rem,4vw,3rem)' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.9rem', marginBottom: '1rem' }}>Vous avez une autre question ?</p>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.625rem', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '999px', color: '#c084fc', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.08)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; }}
          >Posez-la lors de l'appel →</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;