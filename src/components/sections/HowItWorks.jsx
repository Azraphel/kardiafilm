// components/sections/HowItWorks.jsx
import React from 'react';

const steps = [
  { num: '01', tagColor: '#a855f7', tag: 'Réponse immédiate sur tous les canaux', title: 'Un client vous contacte — peu importe où', desc: "Appel, SMS, Facebook, Instagram, Google ou email. L'IA répond en quelques secondes, avec votre ton et votre style. Le client se sent pris en charge. Immédiatement." },
  { num: '02', tagColor: '#f59e0b', tag: 'Filtrage automatique', title: "L'IA qualifie le lead", desc: "Elle pose les bonnes questions : type de service, superficie, localisation, budget, urgence. Les curieux sont filtrés. Vous ne parlez qu'aux clients sérieux." },
  { num: '03', tagColor: '#a855f7', tag: 'Booking sans friction', title: 'Elle réserve dans votre calendrier', desc: "L'IA voit vos disponibilités en temps réel et confirme le rendez-vous directement. Le client reçoit une confirmation. Zéro intervention de votre part." },
  { num: '04', tagColor: '#f59e0b', tag: 'No-shows éliminés', title: 'Elle collecte un dépôt ou une carte', desc: "Avant de terminer la conversation, l'IA sécurise un engagement financier. Un client qui a mis sa carte ne fait pas faux bond. Votre taux de no-show chute sous 5%." },
  { num: '05', tagColor: '#a855f7', tag: 'Vous restez en contrôle', title: 'Vous recevez un résumé complet', desc: "Après chaque interaction : nom, canal utilisé, service demandé, date du RDV. Tout ça pendant que vous faisiez autre chose." },
];

const STICKY_TOP_BASE = 80;
const STICKY_TOP_STEP = 10;

const HowItWorks = () => (
  <div style={{ background: 'var(--dark3)' }}>
    {/* Header */}
    <div style={{ textAlign: 'center', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px) clamp(32px,5vw,48px)' }}>
      <div className="kg-tag" style={{ margin: '0 auto 20px' }}>Comment ça marche</div>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,56px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: '12px' }}>
        De la prise de contact au RDV.{' '}
        <em style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Automatiquement.
        </em>
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.25)', letterSpacing: '.06em' }}>Scrollez pour voir les étapes s'empiler</p>
    </div>

    {/* Sticky stack */}
    <div style={{ paddingBottom: 'clamp(40px,6vw,80px)' }}>
      {steps.map((step, i) => (
        <div key={i} style={{ position: 'sticky', top: `${STICKY_TOP_BASE + i * STICKY_TOP_STEP}px`, zIndex: i + 1, padding: '0 clamp(12px,2vw,24px)', marginBottom: 0 }}>
          <div style={{
            width: '100%', maxWidth: '940px', margin: '0 auto',
            minHeight: 'clamp(260px,50vw,500px)',
            borderRadius: 'clamp(12px,2vw,20px)', overflow: 'hidden', position: 'relative',
            background: i % 2 === 0
              ? 'linear-gradient(145deg, rgba(22,6,50,.99) 0%, rgba(6,6,8,.99) 60%)'
              : 'linear-gradient(145deg, rgba(30,18,4,.99) 0%, rgba(6,6,8,.99) 60%)',
            border: `1px solid ${step.tagColor}18`,
            boxShadow: `0 -12px 60px -12px rgba(0,0,0,.8), 0 0 0 1px ${step.tagColor}08`,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            {/* Accent top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${step.tagColor}60, transparent)` }} />
            {/* Watermark number */}
            <div style={{ position: 'absolute', right: 'clamp(8px,3vw,40px)', bottom: '-8px', fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(80px,18vw,220px)', fontWeight: 700, lineHeight: 1, color: `${step.tagColor}06`, userSelect: 'none', letterSpacing: '-.05em' }}>{step.num}</div>
            {/* Glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '45%', height: '100%', background: `radial-gradient(ellipse at 15% 40%, ${step.tagColor}05 0%, transparent 65%)`, pointerEvents: 'none' }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(24px,4vw,52px)' }}>
              {/* Step badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,1.5vw,16px)', marginBottom: 'clamp(16px,2.5vw,28px)' }}>
                <div style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)', flexShrink: 0, borderRadius: 'clamp(10px,1.5vw,14px)', background: `linear-gradient(135deg, ${step.tagColor}18, rgba(0,0,0,0))`, border: `1px solid ${step.tagColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 30px -8px ${step.tagColor}50` }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 'clamp(11px,1.5vw,14px)', fontWeight: 800, color: step.tagColor }}>{step.num}</span>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 'clamp(9px,1.2vw,11px)', color: `${step.tagColor}50`, letterSpacing: '.15em', textTransform: 'uppercase' }}>Étape {step.num} / 05</span>
              </div>

              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(22px,4vw,48px)', color: 'white', letterSpacing: '-.02em', lineHeight: 1.08, marginBottom: 'clamp(12px,2vw,20px)' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 'clamp(13px,1.8vw,16px)', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, maxWidth: '520px', marginBottom: 'clamp(16px,2.5vw,24px)', fontWeight: 300 }}>
                {step.desc}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(5px,1vw,8px) clamp(12px,2vw,18px)', background: `${step.tagColor}0e`, border: `1px solid ${step.tagColor}28`, borderRadius: '100px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: step.tagColor, boxShadow: `0 0 8px ${step.tagColor}`, flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 'clamp(10px,1.2vw,12px)', color: step.tagColor, letterSpacing: '.07em', fontWeight: 700 }}>{step.tag}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div style={{ textAlign: 'center', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(124,58,237,.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(24px,4vw,44px)', color: 'white', letterSpacing: '-.02em', marginBottom: 'clamp(20px,3vw,32px)', position: 'relative' }}>
        Prêt à installer le système<br />dans votre compagnie ?
      </h3>
      <a href="#contact" className="btn-primary" style={{ fontSize: 'clamp(13px,1.6vw,15px)', padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,44px)', position: 'relative' }}>
        Je veux ce système pour ma compagnie →
      </a>
      <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.18)', marginTop: '14px', letterSpacing: '.1em', position: 'relative' }}>
        APPEL GRATUIT · 20 MINUTES · SANS ENGAGEMENT
      </p>
    </div>
  </div>
);

export default HowItWorks;