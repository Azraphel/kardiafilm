// pages/CaseStudyPage.jsx
// Route : /case-studies
// Dans App.jsx ajoute : <Route path="/case-studies" element={<CaseStudyPage />} />

import React, { useState, useEffect } from 'react';

const PURPLE = '#a855f7';
const AMBER  = '#f59e0b';

const data = {
  client:   'ProNett',
  niche:    'Nettoyage de hottes commerciales',
  location: 'Grand Montréal, Québec',
  duration: '30 jours',
  platform: 'Meta Ads (Facebook & Instagram)',
  headline: 'De zéro publicité à 39x de retour sur investissement en 30 jours.',
  stats: [
    { value: '186 $',    label: 'Budget total',        sub: 'Vidéo + Statique',      color: PURPLE },
    { value: '33',       label: 'Leads qualifiés',      sub: 'En 30 jours',           color: AMBER  },
    { value: '4,06 $',   label: 'Coût par lead',        sub: 'Format vidéo IA',       color: PURPLE },
    { value: '7+',       label: 'Clients fermés',       sub: 'Suivi en cours',        color: AMBER  },
    { value: '7 350 $+', label: 'Revenus générés',      sub: 'Pour le client',        color: PURPLE },
    { value: '39x',      label: 'ROI',                  sub: 'Retour investissement', color: AMBER  },
  ],
  timeline: [
    { phase: '01', title: 'Analyse & Stratégie',    desc: "Compréhension du marché, de la concurrence locale et de l'avatar client idéal de ProNett. Définition du message publicitaire principal.", duration: 'Jour 1-3'  },
    { phase: '02', title: 'Création vidéo IA',      desc: "Production d'une vidéo publicitaire optimisée pour le format Meta. Accroche forte, démonstration du service, appel à l'action direct.", duration: 'Jour 3-5'  },
    { phase: '03', title: 'Lancement campagnes',    desc: 'Déploiement simultané format vidéo et statique. Ciblage géographique précis Grand Montréal. Budget 186 $ au total.',                  duration: 'Jour 5-7'  },
    { phase: '04', title: 'Optimisation continue',  desc: 'Analyse des résultats en temps réel. La vidéo performant 2,8x mieux, budget redirigé pour maximiser les leads qualifiés.',              duration: 'Jour 7-30' },
    { phase: '05', title: 'Résultats finaux',        desc: '33 leads générés. 7+ clients fermés. 7 350 $+ en revenus pour ProNett. ROI de 39x sur le budget publicitaire total.',                  duration: 'Bilan J30' },
  ],
  comparison: [
    { format: 'Vidéo IA ★', budget: '105,48 $', leads: '26', cpl: '4,06 $',  roi: '~5 880 $', highlight: true  },
    { format: 'Statique',   budget: '80,70 $',  leads: '7',  cpl: '11,53 $', roi: '~1 470 $', highlight: false },
  ],
  keyLearnings: [
    { icon: '🎬', title: 'La vidéo écrase le statique',    desc: "À budget égal, la vidéo IA génère des leads 2,8x moins chers. L'accroche vidéo capte l'attention dans un feed scrollé rapidement." },
    { icon: '📍', title: 'Le ciblage géographique est clé', desc: "En ciblant précisément la zone de service, on élimine les leads non-pertinents et on réduit le coût par lead qualifié." },
    { icon: '⚡', title: 'ROI rapide même à petit budget',  desc: "186 $ investis pour 7 350 $+ générés. Pas besoin d'un gros budget pour obtenir un retour significatif avec la bonne stratégie." },
    { icon: '📈', title: 'Potentiel de scale évident',      desc: "Avec un CPL de 4,06 $, doubler ou tripler le budget publicitaire devrait produire des résultats proportionnels." },
  ],
};

const Tag = ({ children, color = PURPLE }) => (
  <span style={{
    display: 'inline-block', padding: '3px 10px',
    background: color + '15', border: `1px solid ${color}40`,
    borderRadius: '999px', fontFamily: 'monospace',
    fontSize: '0.6rem', color, letterSpacing: '0.12em',
    textTransform: 'uppercase',
  }}>
    {children}
  </span>
);

const FilmBar = () => (
  <div style={{
    height: '24px', background: '#080808',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-around', padding: '0 8px',
    borderTop: '1px solid rgba(168,85,247,0.1)',
  }}>
    {[...Array(40)].map((_, i) => (
      <div key={i} style={{ width: '4px', height: '12px', background: 'rgba(168,85,247,0.25)', borderRadius: '1px' }} />
    ))}
  </div>
);

const CaseStudyPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{
      minHeight: '100vh', background: '#050505',
      color: 'white', fontFamily: 'sans-serif',
      opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease',
    }}>

      {/* Film grain */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.025,
      }} />

      {/* Top film strip sticky */}
      <div style={{
        height: '24px', background: '#080808',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-around', padding: '0 8px',
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: '1px solid rgba(168,85,247,0.1)',
      }}>
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{ width: '4px', height: '12px', background: 'rgba(168,85,247,0.25)', borderRadius: '1px' }} />
        ))}
      </div>

      {/* Nav breadcrumb */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '1.5rem 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href="/" style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.5)', letterSpacing: '0.15em', textDecoration: 'none', textTransform: 'uppercase' }}>← Kardia</a>
        <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '0.7rem' }}>/</span>
        <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>ÉTUDES DE CAS</span>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>

        {/* ── HERO ── */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <Tag>Étude de cas #001</Tag>
            <Tag color={AMBER}>{data.platform}</Tag>
            <Tag>{data.duration}</Tag>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            {data.client} —<br />
            <span style={{ background: `linear-gradient(to right, ${PURPLE}, ${AMBER})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {data.headline}
            </span>
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[{ label: 'Client', val: data.client }, { label: 'Secteur', val: data.niche }, { label: 'Région', val: data.location }].map((item, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(168,85,247,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS GRID ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '4rem' }}>
          {data.stats.map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${stat.color}25`,
              borderRadius: '14px', padding: '1.5rem 1.25rem',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s, border-color 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = stat.color + '60'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = stat.color + '25'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${stat.color}80, transparent)` }} />
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: stat.color, lineHeight: 1, marginBottom: '0.4rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: 'white', fontWeight: 500, marginBottom: '0.2rem' }}>{stat.label}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* ── ROI FLOW ── */}
        <div style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '16px', padding: '2rem', marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(245,158,11,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ● Parcours du dollar investi
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { val: '186 $', sub: 'Budget pub' }, '→',
              { val: '33 leads', sub: 'Générés' }, '→',
              { val: '7+ clients', sub: 'Fermés' }, '→',
              { val: '7 350 $+', sub: 'Revenus', highlight: true },
            ].map((item, i) =>
              typeof item === 'string'
                ? <span key={i} style={{ color: 'rgba(255,255,255,0.15)', fontSize: '1.5rem' }}>→</span>
                : (
                  <div key={i} style={{
                    background: item.highlight ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${item.highlight ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '10px', padding: '0.75rem 1.25rem',
                  }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: item.highlight ? AMBER : 'white' }}>{item.val}</div>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{item.sub}</div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: `${PURPLE}80`, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>● Déroulement</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.02em' }}>Les 30 jours en détail</h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '11px', top: '8px', bottom: '8px', width: '1px', background: `linear-gradient(to bottom, ${PURPLE}, ${AMBER}, rgba(255,255,255,0.05))` }} />
            {data.timeline.map((step, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                <div style={{ position: 'absolute', left: '-1.55rem', top: '6px', width: '10px', height: '10px', borderRadius: '50%', background: i % 2 === 0 ? PURPLE : AMBER, boxShadow: `0 0 8px ${i % 2 === 0 ? PURPLE : AMBER}60` }} />
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: i % 2 === 0 ? PURPLE : AMBER }}>{step.phase}</span>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{step.title}</span>
                    </div>
                    <Tag color={i % 2 === 0 ? PURPLE : AMBER}>{step.duration}</Tag>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPARISON TABLE ── */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: `${AMBER}80`, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>● Analyse</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Vidéo vs Statique</h2>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', background: 'rgba(168,85,247,0.08)', padding: '0.875rem 1.5rem' }}>
              {['Format', 'Budget', 'Leads', 'CPL', 'Revenus estimés'].map(h => (
                <div key={h} style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</div>
              ))}
            </div>
            {data.comparison.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', padding: '1.125rem 1.5rem', background: row.highlight ? 'rgba(168,85,247,0.04)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ color: row.highlight ? AMBER : 'rgba(255,255,255,0.35)', fontWeight: row.highlight ? 700 : 400 }}>{row.format}</div>
                <div style={{ color: row.highlight ? 'white' : 'rgba(255,255,255,0.35)' }}>{row.budget}</div>
                <div style={{ color: row.highlight ? 'white' : 'rgba(255,255,255,0.35)' }}>{row.leads}</div>
                <div style={{ color: row.highlight ? PURPLE : 'rgba(255,255,255,0.35)', fontWeight: row.highlight ? 700 : 400 }}>{row.cpl}</div>
                <div style={{ color: row.highlight ? AMBER : 'rgba(255,255,255,0.35)', fontWeight: row.highlight ? 700 : 400 }}>{row.roi}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', background: 'rgba(168,85,247,0.05)', borderLeft: `3px solid ${PURPLE}`, borderRadius: '0 10px 10px 0' }}>
            <p style={{ color: 'rgba(192,132,252,0.8)', fontStyle: 'italic', fontSize: '0.875rem', lineHeight: 1.65 }}>
              "Le format vidéo IA a généré des leads 2,8x moins chers que le statique pour la même audience, le même budget, la même période. La vidéo n'est plus optionnelle en 2025."
            </p>
          </div>
        </div>

        {/* ── KEY LEARNINGS ── */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: `${PURPLE}80`, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>● Apprentissages</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Ce que cette campagne a prouvé</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {data.keyLearnings.map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', padding: '1.5rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(168,85,247,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'white' }}>{item.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.825rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: 'linear-gradient(135deg, rgba(88,28,135,0.15), rgba(0,0,0,0))', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '20px', padding: '3rem 2.5rem', textAlign: 'center', boxShadow: '0 0 80px -20px rgba(168,85,247,0.15)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: `${PURPLE}80`, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>● Prochaine étape</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Votre compagnie pourrait<br />être la prochaine.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            15 minutes pour voir si ce système peut fonctionner dans votre marché et votre région.
          </p>
          <a href="/#contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #9333ea, #6d28d9)', borderRadius: '999px', color: 'white', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 0 40px -8px rgba(147,51,234,0.5)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 60px -8px rgba(147,51,234,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px -8px rgba(147,51,234,0.5)'; }}
          >
            Prendre rendez-vous →
          </a>
          <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>
            Gratuit · Sans engagement · 15 minutes
          </p>
        </div>

      </div>

      <FilmBar />
    </div>
  );
};

export default CaseStudyPage;