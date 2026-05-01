// components/sections/HowItWorks.jsx
// Les 4 piliers du Système Kardia™ — sticky stack CSS pur

import React from 'react';

const pillars = [
  {
    num: '01',
    category: 'Acquisition',
    name: 'Le Moteur d\'Attraction™',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,.15)',
    desc: "Génère de l'attention chaude et prévisible sur votre compagnie. Votre pipeline de prospects ne dépend plus du bouche-à-oreille — il tourne en continu, même quand vous êtes sur le terrain.",
    points: [
      'Publicité Meta et Google ciblée : facility managers, property managers, gestionnaires d\'immeubles',
      'Contenu before/after qui prouve la qualité avant le premier appel',
      'Présence Google Business optimisée pour capter les recherches locales',
    ],
  },
  {
    num: '02',
    category: 'Conversion',
    name: 'Le Convertisseur 5-Minutes™',
    tagColor: '#a855f7',
    tagBg: 'rgba(168,85,247,.15)',
    desc: "Transforme chaque lead en client signé en moins de 5 minutes — sans que vous leviez le petit doigt. L'IA répond, qualifie et fixe la soumission pendant que vous travaillez.",
    points: [
      'Réponse automatique en <2 minutes sur tous les canaux : appels, SMS, Facebook, Instagram, Google, email',
      'Qualification intelligente : type de service, superficie, budget, urgence',
      'Prise de rendez-vous directe dans votre calendrier avec confirmation automatique',
    ],
  },
  {
    num: '03',
    category: 'Rétention',
    name: 'Le Bouclier de Rétention™',
    tagColor: '#f59e0b',
    tagBg: 'rgba(245,158,11,.15)',
    desc: "Garde vos clients actifs longtemps — et transforme chaque contrat en revenu récurrent prévisible. Un client qui reste 3 ans vaut 10x un client qui repart après 3 mois.",
    points: [
      'Suivis automatiques post-service pour mesurer la satisfaction',
      'Rappels proactifs avant la fin des contrats pour renouvellement',
      'Programme de référals systématisé — chaque client satisfait devient une source de leads',
    ],
  },
  {
    num: '04',
    category: 'Expansion',
    name: 'Le Pipeline Long-Terme™',
    tagColor: '#f97316',
    tagBg: 'rgba(249,115,22,.15)',
    desc: "Chasse les gros contrats industriels et commerciaux en background — pendant que vous gérez vos opérations. Les contrats à 5 000$/mois+ se signent rarement au premier contact.",
    points: [
      'Séquences de prospection automatisées vers les grandes propriétés commerciales',
      'Suivi long-terme sur 90 à 180 jours — les décisions B2B prennent du temps',
      'Intégration CRM pour ne perdre aucun prospect, même ceux qui disent "pas maintenant"',
    ],
  },
];

const STICKY_TOP_BASE = 80;
const STICKY_TOP_STEP = 10;

const HowItWorks = () => (
  <div style={{ background: 'var(--dark3)' }}>

    {/* Header */}
    <div style={{ textAlign: 'center', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px) clamp(32px,5vw,48px)' }}>
      <div className="kg-tag" style={{ margin: '0 auto 20px' }}>Le Système Kardia™</div>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,56px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: '12px' }}>
        Quatre piliers intégrés.{' '}
        <em style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Un seul système.
        </em>
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.25)', letterSpacing: '.06em', maxWidth: '500px', margin: '0 auto' }}>
        L'intégration des 4 piliers est ce qui change tout — pas chaque pilier individuellement.
      </p>
    </div>

    {/* Sticky stack */}
    <div style={{ paddingBottom: 'clamp(40px,6vw,80px)' }}>
      {pillars.map((pillar, i) => (
        <div key={i} style={{
          position: 'sticky',
          top: `${STICKY_TOP_BASE + i * STICKY_TOP_STEP}px`,
          zIndex: i + 1,
          padding: '0 clamp(12px,2vw,24px)',
        }}>
          <div style={{
            width: '100%', maxWidth: '960px', margin: '0 auto',
            minHeight: 'clamp(280px,50vw,480px)',
            borderRadius: 'clamp(12px,2vw,20px)', overflow: 'hidden',
            position: 'relative',
            background: i < 2
              ? 'linear-gradient(145deg, rgba(22,6,50,.99) 0%, rgba(6,6,8,.99) 65%)'
              : 'linear-gradient(145deg, rgba(30,14,4,.99) 0%, rgba(6,6,8,.99) 65%)',
            border: `1px solid ${pillar.tagColor}20`,
            boxShadow: `0 -12px 60px -12px rgba(0,0,0,.85), 0 0 0 1px ${pillar.tagColor}08`,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>

            {/* Accent top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, ${pillar.tagColor}, transparent)` }} />

            {/* Watermark */}
            <div style={{ position: 'absolute', right: 'clamp(8px,3vw,40px)', bottom: '-8px', fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(80px,18vw,220px)', fontWeight: 700, lineHeight: 1, color: `${pillar.tagColor}05`, userSelect: 'none', letterSpacing: '-.05em' }}>
              {pillar.num}
            </div>

            {/* Glow */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: `radial-gradient(ellipse at 15% 40%, ${pillar.tagColor}06 0%, transparent 60%)`, pointerEvents: 'none' }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(24px,4vw,52px)', display: 'grid', gridTemplateColumns: '1fr clamp(200px,38%,380px)', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>

              {/* Left */}
              <div>
                {/* Category badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: 'clamp(16px,2.5vw,24px)' }}>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4vw,52px)', color: `${pillar.tagColor}30`, lineHeight: 1, letterSpacing: '-.03em' }}>{pillar.num}</div>
                  <div style={{ padding: '4px 12px', background: pillar.tagBg, border: `1px solid ${pillar.tagColor}30`, borderRadius: '100px', fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, color: pillar.tagColor, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {pillar.category}
                  </div>
                </div>

                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(20px,3.5vw,40px)', color: 'white', letterSpacing: '-.02em', lineHeight: 1.1, marginBottom: 'clamp(12px,2vw,18px)' }}>
                  {pillar.name}
                </h3>
                <p style={{ fontSize: 'clamp(13px,1.7vw,15px)', color: 'rgba(255,255,255,.45)', lineHeight: 1.8, fontWeight: 300, maxWidth: '420px' }}>
                  {pillar.desc}
                </p>
              </div>

              {/* Right — points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pillar.points.map((pt, pi) => (
                  <div key={pi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: 'clamp(10px,1.5vw,14px)', background: `${pillar.tagColor}06`, border: `1px solid ${pillar.tagColor}12`, borderRadius: '8px' }}>
                    <div style={{ width: '20px', height: '20px', flexShrink: 0, borderRadius: '50%', background: `${pillar.tagColor}18`, border: `1px solid ${pillar.tagColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={pillar.tagColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: 'clamp(10px,1.3vw,12px)', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>{pt}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Guarantee + CTA */}
    <div style={{ padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(124,58,237,.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>

        {/* Garantie */}
        <div style={{ padding: 'clamp(24px,3.5vw,40px)', background: 'linear-gradient(135deg, rgba(124,58,237,.1), rgba(245,158,11,.05))', border: '1px solid rgba(124,58,237,.25)', borderRadius: '12px', textAlign: 'center', marginBottom: 'clamp(24px,4vw,40px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #7c3aed, #f59e0b)' }} />
          <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(245,158,11,.6)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '12px' }}>● Garantie de résultats</div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(18px,3vw,32px)', color: 'white', lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '12px' }}>
            5 à 10 nouveaux contrats commerciaux en 90 jours.
          </h3>
          <p style={{ fontSize: 'clamp(13px,1.7vw,15px)', color: 'rgba(255,255,255,.45)', lineHeight: 1.75, fontWeight: 300, maxWidth: '500px', margin: '0 auto' }}>
            Si on n'atteint pas cet objectif, on continue à travailler avec vous sans frais additionnels jusqu'à ce qu'on l'atteigne.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: 'clamp(13px,1.6vw,15px)', padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,44px)' }}>
            Obtenir mes 5 à 10 contrats →
          </a>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.18)', marginTop: '14px', letterSpacing: '.1em' }}>
            APPEL GRATUIT · 20 MINUTES · SANS ENGAGEMENT
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;