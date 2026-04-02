// components/sections/Problem.jsx
import React, { useEffect, useRef } from 'react';

const problems = [
  {
    num: '01',
    title: "Un client qui ne peut pas vous rejoindre n'attendra pas.",
    body: "Il va appeler le prochain sur Google. Pas parce que vous êtes moins bons — parce que vous n'avez pas répondu. Dans le nettoyage, le premier qui répond obtient le contrat.",
    truth: "La vitesse de réponse, c'est votre avantage compétitif le plus sous-estimé.",
  },
  {
    num: '02',
    title: "Chaque no-show coûte plus qu'un rendez-vous manqué.",
    body: "C'est une équipe déplacée, du temps perdu, une journée désorganisée. Le no-show c'est un symptôme : personne n'a recueilli d'engagement concret à la réservation.",
    truth: "Un dépôt ou une confirmation de carte élimine 80% des no-shows.",
  },
  {
    num: '03',
    title: "Vous passez vos journées à répondre aux mêmes questions.",
    body: "Prix, disponibilités, zones de service. Des questions légitimes — mais répétitives. Chaque heure passée au téléphone, c'est une heure que vous ne passez pas à gérer votre compagnie.",
    truth: "Ce n'est pas votre rôle de répondre à des questions de base 24/7.",
  },
  {
    num: '04',
    title: "Vos leads de soir et de fin de semaine disparaissent.",
    body: "La plupart des décisions de nettoyage se prennent en dehors des heures de bureau. Si personne ne répond à 19h un vendredi, ce lead est parti. Pour toujours.",
    truth: "40% des demandes arrivent en dehors des heures normales de travail.",
  },
];

const Problem = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)',
      background: 'linear-gradient(to bottom, #000, #0a0312, #000)',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)', maxWidth: '680px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(248,113,113,0.7)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            ● Ce qui se passe en ce moment
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Votre téléphone est votre meilleur vendeur. Est-ce qu'il travaille 24/7 ?
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            La plupart des compagnies de nettoyage perdent des contrats non pas par manque de qualité — mais par manque de disponibilité.
          </p>
        </div>

        {/* Liste des problèmes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {problems.map((p, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 80}ms`,
              background: '#16101e',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: 'clamp(1.25rem,3vw,2rem)',
              display: 'grid',
              gridTemplateColumns: '44px 1fr',
              gap: 'clamp(0.875rem,2vw,1.5rem)',
              alignItems: 'start',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s, border-color 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1c1228'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#16101e'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              {/* Accent top */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, rgba(248,113,113,0.3), transparent)' }} />

              {/* Numéro */}
              <div style={{
                width: '44px', height: '44px',
                borderRadius: '12px',
                background: 'rgba(248,113,113,0.1)',
                border: '1px solid rgba(248,113,113,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 800, color: '#f87171', letterSpacing: '0.05em' }}>
                  {p.num}
                </span>
              </div>

              {/* Contenu */}
              <div>
                <h3 style={{ fontSize: 'clamp(0.975rem,2.5vw,1.1rem)', fontWeight: 700, color: 'white', marginBottom: '0.625rem', lineHeight: 1.35 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem,2vw,0.925rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  {p.body}
                </p>
                {/* Vérité */}
                <div style={{
                  padding: 'clamp(0.625rem,1.5vw,0.75rem) clamp(0.875rem,2vw,1rem)',
                  background: 'rgba(248,113,113,0.07)',
                  borderLeft: '2px solid rgba(248,113,113,0.4)',
                  borderRadius: '0 8px 8px 0',
                }}>
                  <p style={{ fontSize: 'clamp(0.8rem,1.8vw,0.875rem)', color: '#fca5a5', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
                    {p.truth}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="fade-in-up" style={{
          marginTop: 'clamp(1.5rem,3vw,2rem)',
          padding: 'clamp(1.25rem,3vw,2rem)',
          background: '#130830',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.25rem',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.4), transparent)' }} />
          <p style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, maxWidth: '520px', margin: 0, fontWeight: 500 }}>
            Ces problèmes ne viennent pas d'un manque d'effort. Ils viennent d'un manque de{' '}
            <em style={{ color: '#c084fc', fontStyle: 'normal', fontWeight: 700 }}>système</em>.
          </p>
          <a href="#contact" style={{
            padding: 'clamp(0.75rem,1.5vw,0.875rem) clamp(1.25rem,2.5vw,1.625rem)',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            borderRadius: '999px', color: 'white',
            fontWeight: 700, fontSize: 'clamp(0.825rem,1.8vw,0.875rem)',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 0 24px -6px rgba(124,58,237,0.5)',
            transition: 'transform 0.2s', flexShrink: 0,
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Voir la solution →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Problem;