// components/sections/HowItWorks.jsx
// Effet : position sticky + z-index croissant.
// Chaque carte a position:sticky et un top légèrement différent.
// En scrollant vers le bas, la nouvelle carte arrive PAR-DESSUS la précédente.
// Les cartes précédentes restent visibles en dessous — effet de pile.
// CSS pur, zéro JS, fonctionne pareil sur mobile.

import React from 'react';

const steps = [
  { num: '01', tagColor: '#a855f7', tag: 'Réponse immédiate',       title: 'Un client appelle votre numéro',       desc: "Peu importe l'heure. L'IA répond en moins de 2 secondes avec votre nom de compagnie, votre ton, votre style. Le client se sent pris en charge. Immédiatement." },
  { num: '02', tagColor: '#f59e0b', tag: 'Filtrage automatique',    title: "L'IA qualifie le lead",                desc: "Elle pose les bonnes questions : type de service, superficie, localisation, budget, urgence. Les curieux sont filtrés. Vous ne parlez qu'aux clients sérieux." },
  { num: '03', tagColor: '#a855f7', tag: 'Booking sans friction',   title: 'Elle réserve dans votre calendrier',   desc: "L'IA voit vos disponibilités en temps réel et confirme le rendez-vous directement. Le client reçoit une confirmation par SMS. Zéro intervention de votre part." },
  { num: '04', tagColor: '#f59e0b', tag: 'No-shows éliminés',       title: 'Elle collecte un dépôt ou une carte', desc: "Avant de raccrocher, l'IA sécurise un engagement financier. Un client qui a mis sa carte ne fait pas faux bond. Votre taux de no-show chute sous 5%." },
  { num: '05', tagColor: '#a855f7', tag: 'Vous restez en contrôle', title: 'Vous recevez un résumé par SMS',       desc: "Après chaque appel : nom, service demandé, date du RDV, infos collectées. Tout ça pendant que vous faisiez autre chose. Vous gérez votre compagnie, pas votre téléphone." },
];

// Chaque carte est sticky avec ce top.
// On utilise une valeur fixe petite pour que les cartes se superposent presque complètement.
// La différence de top entre chaque carte (8px) crée l'effet de pile visible.
const STICKY_TOP_BASE = 80; // px — position du haut de la première carte
const STICKY_TOP_STEP = 10; // px — décalage supplémentaire par carte

const HowItWorks = () => (
  <div style={{ background: 'linear-gradient(to bottom, #000, rgba(15,0,35,0.8), #000)' }}>

    {/* Header */}
    <div style={{ textAlign: 'center', padding: 'clamp(3.5rem,7vw,6rem) clamp(1rem,4vw,1.5rem) clamp(2rem,4vw,3rem)' }}>
      <p style={{ fontFamily: 'monospace', fontSize: 'clamp(0.6rem,1.3vw,0.65rem)', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.875rem' }}>
        ● Comment ça marche
      </p>
      <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '0.875rem' }}>
        De l'appel au RDV confirmé.{' '}
        <span style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Automatiquement.
        </span>
      </h2>
      <p style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>
        Scrollez pour voir les étapes s'empiler.
      </p>
    </div>

    {/* Stack de cartes sticky */}
    <div style={{
      // Ce padding-bottom donne de l'espace pour que la dernière carte
      // puisse scroller jusqu'en position finale avant la section suivante
      paddingBottom: 'clamp(3rem,6vw,6rem)',
    }}>
      {steps.map((step, i) => (
        <div
          key={i}
          style={{
            position: 'sticky',
            top: `${STICKY_TOP_BASE + i * STICKY_TOP_STEP}px`,
            zIndex: i + 1, // z-index CROISSANT = chaque nouvelle carte passe DEVANT
            marginBottom: 0,
            padding: '0 clamp(0.75rem,2vw,1.5rem)',
            // La hauteur de chaque carte — assez grande pour voir le contenu
            // mais on laisse les cartes précédentes dépasser un peu en haut
            paddingTop: i === 0 ? 0 : 0,
          }}
        >
          <div style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            minHeight: 'clamp(280px,55vw,520px)',
            borderRadius: 'clamp(16px,2.5vw,24px)',
            overflow: 'hidden',
            position: 'relative',
            background: i % 2 === 0
              ? 'linear-gradient(145deg, rgba(22,6,50,0.99) 0%, rgba(5,2,14,0.99) 60%)'
              : 'linear-gradient(145deg, rgba(30,14,4,0.99) 0%, rgba(5,2,14,0.99) 60%)',
            border: `1px solid ${step.tagColor}20`,
            boxShadow: `0 -8px 40px -8px rgba(0,0,0,0.8), 0 0 0 1px ${step.tagColor}10`,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>

            {/* Accent top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${step.tagColor}60, transparent)` }} />

            {/* Numéro décoratif géant */}
            <div style={{
              position: 'absolute', right: 'clamp(1rem,4vw,2.5rem)', bottom: '-0.5rem',
              fontFamily: 'monospace', fontSize: 'clamp(5rem,18vw,14rem)',
              fontWeight: 900, lineHeight: 1, color: `${step.tagColor}07`,
              userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
            }}>
              {step.num}
            </div>

            {/* Glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: `radial-gradient(ellipse at 15% 40%, ${step.tagColor}06 0%, transparent 65%)`, pointerEvents: 'none' }} />

            {/* Contenu */}
            <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(1.75rem,4vw,3.5rem)' }}>

              {/* Badge étape */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.625rem,1.5vw,1rem)', marginBottom: 'clamp(1rem,2.5vw,1.75rem)' }}>
                <div style={{
                  width: 'clamp(40px,6vw,60px)', height: 'clamp(40px,6vw,60px)', flexShrink: 0,
                  borderRadius: 'clamp(10px,1.5vw,16px)',
                  background: `linear-gradient(135deg, ${step.tagColor}18, rgba(0,0,0,0))`,
                  border: `1px solid ${step.tagColor}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 30px -8px ${step.tagColor}50`,
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.7rem,1.5vw,0.9rem)', fontWeight: 800, color: step.tagColor }}>
                    {step.num}
                  </span>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.55rem,1.1vw,0.62rem)', color: `${step.tagColor}50`, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Étape {step.num} / 0{steps.length}
                </span>
              </div>

              {/* Titre */}
              <h3 style={{
                fontSize: 'clamp(1.35rem,4vw,2.75rem)',
                fontWeight: 800, color: 'white',
                letterSpacing: '-0.025em', lineHeight: 1.1,
                marginBottom: 'clamp(0.75rem,2vw,1.25rem)',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(0.9rem,1.8vw,1.1rem)',
                color: 'rgba(255,255,255,0.42)',
                lineHeight: 1.8, maxWidth: '540px',
                marginBottom: 'clamp(1rem,2.5vw,1.75rem)',
              }}>
                {step.desc}
              </p>

              {/* Tag résultat */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: 'clamp(0.275rem,0.7vw,0.4rem) clamp(0.75rem,1.8vw,1.1rem)',
                background: `${step.tagColor}0e`,
                border: `1px solid ${step.tagColor}28`,
                borderRadius: '999px',
              }}>
                <span style={{ width: 'clamp(5px,1vw,6px)', height: 'clamp(5px,1vw,6px)', borderRadius: '50%', backgroundColor: step.tagColor, boxShadow: `0 0 7px ${step.tagColor}`, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: 'clamp(0.68rem,1.4vw,0.8rem)', color: step.tagColor, fontFamily: 'monospace', letterSpacing: '0.07em', fontWeight: 600 }}>
                  {step.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div style={{ textAlign: 'center', padding: 'clamp(3rem,6vw,6rem) clamp(1rem,4vw,1.5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(600px,100vw)', height: '250px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <p style={{ fontFamily: 'monospace', fontSize: 'clamp(0.6rem,1.3vw,0.65rem)', color: 'rgba(168,85,247,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
        ● Prochaine étape
      </p>
      <h3 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', marginBottom: 'clamp(1.5rem,3vw,2.25rem)', lineHeight: 1.1 }}>
        Prêt à installer le système<br />dans votre compagnie ?
      </h3>
      <a href="#contact" style={{
        display: 'inline-block',
        padding: 'clamp(0.875rem,2vw,1.125rem) clamp(1.75rem,4vw,2.5rem)',
        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        borderRadius: '999px', color: 'white',
        fontWeight: 700, fontSize: 'clamp(0.9rem,2vw,1.05rem)',
        textDecoration: 'none',
        boxShadow: '0 0 50px -8px rgba(124,58,237,0.6)',
        border: '1px solid rgba(168,85,247,0.3)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 70px -6px rgba(124,58,237,0.8)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 50px -8px rgba(124,58,237,0.6)'; }}
      >
        Je veux ce système pour ma compagnie →
      </a>
      <p style={{ marginTop: '1rem', fontSize: 'clamp(0.6rem,1.3vw,0.7rem)', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace', letterSpacing: '0.12em' }}>
        APPEL GRATUIT · 20 MINUTES · SANS ENGAGEMENT
      </p>
    </div>
  </div>
);

export default HowItWorks;