import './roadmap.css';
import { useEffect, useState } from 'react';

import Hero                  from './components/Hero';
import SectionDouleur        from './components/SectionDouleur';
import SectionLevier         from './components/SectionLevier';
import SectionAttentionIntro from './components/SectionAttentionIntro';
import SectionPhases         from './components/SectionPhases';
import SectionEtudeCas       from './components/SectionEtudeCas';
import SectionDeuxChoix      from './components/SectionDeuxChoix';

const NAV_SECTIONS = [
  { id: 'hero',          title: 'Accueil' },
  { id: 'douleur',       title: 'La douleur' },
  { id: 'levier',        title: 'Le levier' },
  { id: 'attention',     title: "L'attention" },
  { id: 'phase1',        title: 'Phase 1 — Fondations' },
  { id: 'phase2',        title: 'Phase 2 — Stabilisation' },
  { id: 'phase3',        title: 'Phase 3 — Acquisition' },
  { id: 'phase4',        title: 'Phase 4 — Système' },
  { id: 'phase5',        title: 'Phase 5 — Machine' },
  { id: 'phase6',        title: 'Phase 6 — Industriel' },
  { id: 'preuve',        title: 'La preuve' },
  { id: 'admissibilite', title: 'Tes deux choix' },
];

function PhaseNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = NAV_SECTIONS.findIndex(s => s.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="rm-phase-nav" aria-label="Navigation phases">
      {NAV_SECTIONS.map((s, i) => (
        <a
          key={s.id}
          className={`rm-phase-nav-dot${i === active ? ' active' : ''}`}
          title={s.title}
          href={`#${s.id}`}
          onClick={e => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </nav>
  );
}

export default function Roadmap() {
  return (
    <div className="rm-root">
      <PhaseNav />

      <nav className="rm-nav">
        <a href="https://kardiagrowth.com" className="rm-nav-logo">
          Kardia <span>Growth</span>
        </a>
        <a href="#admissibilite" className="rm-nav-cta">
          Vérifier mon admissibilité
        </a>
      </nav>

      <Hero />
      <SectionDouleur />
      <SectionLevier />
      <SectionAttentionIntro />
      <SectionPhases />
      <SectionEtudeCas />
      <SectionDeuxChoix />

      <footer className="rm-footer">
        <div className="rm-inner">
          <div className="rm-footer-logo"><span className="grad-violet">Kardia</span> Growth</div>
          <p>© 2026 Kardia Growth · Montréal, Québec</p>
        </div>
      </footer>
    </div>
  );
}
