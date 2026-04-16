// components/sections/FAQ.jsx
import React, { useState } from 'react';
import { Rev } from '../../hooks/useReveal';

const faqs = [
  { q: "Est-ce que ça sonne vraiment comme un humain ?", a: "Oui. Les voix IA d'aujourd'hui sont indiscernables d'un humain dans 95% des cas. On vous fait écouter des exemples pendant l'appel de diagnostic. Si vous n'êtes pas convaincu, on ne part pas en production." },
  { q: "Qu'est-ce qui se passe pour les appels compliqués ?", a: "L'IA gère les cas standard (prix, disponibilité, réservation, zones de service). Pour tout ce qui sort de l'ordinaire, elle transfère l'appel vers vous avec un résumé complet déjà préparé." },
  { q: "Est-ce que mes clients vont savoir que c'est une IA ?", a: "C'est votre choix. On configure selon votre préférence. Légalement au Québec, il n'y a pas d'obligation de divulguer — mais on peut le faire si vous le souhaitez." },
  { q: "Combien de temps pour que ce soit en ligne ?", a: "Entre 3 et 7 jours ouvrables selon la complexité. On a déjà déployé en 48 heures pour des clients pressés." },
  { q: "Est-ce que ça marche avec mon calendrier actuel ?", a: "Oui. Google Calendar, Calendly, Jobber, ServiceTitan, et la plupart des outils de l'industrie du nettoyage au Québec. On vérifie lors de l'appel de diagnostic." },
  { q: "C'est quoi la garantie si ça ne marche pas ?", a: "Garantie 30 jours. Si le système ne capture pas au minimum 5 leads supplémentaires, on continue gratuitement jusqu'à ce que ce soit le cas." },
];

const FAQItem = ({ faq, isOpen, onToggle, i }) => (
  <div style={{ border: '1px solid', borderColor: isOpen ? 'rgba(124,58,237,.3)' : 'rgba(255,255,255,.07)', borderRadius: '6px', overflow: 'hidden', transition: 'border-color .25s', background: isOpen ? 'rgba(124,58,237,.04)' : 'rgba(255,255,255,.02)', marginBottom: '4px', position: 'relative' }}>
    {isOpen && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,.5), rgba(245,158,11,.2), transparent)' }} />}
    <button onClick={onToggle} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 'clamp(16px,2.5vw,22px) clamp(18px,2.5vw,28px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: isOpen ? '#a855f7' : 'rgba(255,255,255,.2)', letterSpacing: '.1em', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(15px,2vw,18px)', color: 'white', lineHeight: 1.3 }}>{faq.q}</span>
      </div>
      <div style={{ width: '28px', height: '28px', flexShrink: 0, borderRadius: '50%', background: isOpen ? 'rgba(124,58,237,.2)' : 'rgba(255,255,255,.05)', border: `1px solid ${isOpen ? 'rgba(124,58,237,.4)' : 'rgba(255,255,255,.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? '#a855f7' : 'rgba(255,255,255,.3)', fontSize: '18px', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'all .25s' }}>+</div>
    </button>
    {isOpen && (
      <div style={{ padding: '0 clamp(18px,2.5vw,28px) clamp(16px,2.5vw,22px) clamp(46px,6vw,56px)' }}>
        <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.55)', lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: 'var(--dark2)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <Rev>
          <div className="kg-tag">Questions fréquentes</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: 'clamp(32px,5vw,48px)' }}>
            Vos questions.<br /><em style={{ color: 'rgba(255,255,255,.35)' }}>Nos réponses directes.</em>
          </h2>
        </Rev>
        <Rev delay={1}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} i={i} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />)}
        </Rev>
        <Rev delay={2}>
          <div style={{ textAlign: 'center', marginTop: 'clamp(32px,5vw,48px)' }}>
            <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'rgba(255,255,255,.3)', marginBottom: '16px', fontWeight: 300 }}>Vous avez une autre question ?</p>
            <a href="#contact" className="btn-ghost" style={{ fontSize: '13px', padding: '10px 24px' }}>Posez-la lors de l'appel →</a>
          </div>
        </Rev>
      </div>
    </section>
  );
};

export default FAQ;