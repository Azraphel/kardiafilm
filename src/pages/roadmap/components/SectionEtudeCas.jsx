import Reveal from './Reveal';

export default function SectionEtudeCas() {
  return (
    <section className="rm-section alt" id="preuve">
      <div className="rm-inner">

        <Reveal>
          <div className="rm-section-label">05 — La preuve</div>
          <h2 className="rm-section-titre">
            Le mécanisme testé.<br /><span className="grad-amber">Les résultats documentés.</span>
          </h2>
          <p style={{ marginBottom: '2rem', color: 'var(--texte-doux)', fontSize: '0.96rem' }}>
            Rien ici n'est théorique. Voici ce qui s'est passé quand le système a été activé.
          </p>
        </Reveal>

        <Reveal>
          <div className="rm-proof-card">
            <div className="rm-proof-header">
              <div>
                <div className="rm-proof-company">ProNett</div>
                <div className="rm-proof-meta">Nettoyage de hottes commerciales · Grand Montréal · 30 jours</div>
              </div>
              <div className="rm-proof-roi">
                <div className="rm-proof-roi-number">39x</div>
                <div className="rm-proof-roi-label">ROI</div>
              </div>
            </div>

            <div className="rm-proof-stats">
              <div className="rm-proof-stat">
                <div className="rm-proof-stat-value">33</div>
                <div className="rm-proof-stat-label">Leads générés</div>
              </div>
              <div className="rm-proof-stat">
                <div className="rm-proof-stat-value">7+</div>
                <div className="rm-proof-stat-label">Clients fermés</div>
              </div>
              <div className="rm-proof-stat">
                <div className="rm-proof-stat-value">186$</div>
                <div className="rm-proof-stat-label">Investis en pub</div>
              </div>
            </div>

            <div className="rm-proof-flow">
              <div className="rm-proof-flow-item">
                <span className="value">186$</span>
                <span className="label">investis</span>
              </div>
              <div className="rm-proof-flow-arrow">→</div>
              <div className="rm-proof-flow-item">
                <span className="value">33</span>
                <span className="label">leads</span>
              </div>
              <div className="rm-proof-flow-arrow">→</div>
              <div className="rm-proof-flow-item">
                <span className="value">7+</span>
                <span className="label">clients</span>
              </div>
              <div className="rm-proof-flow-arrow">→</div>
              <div className="rm-proof-flow-item">
                <span className="value">7 500$+</span>
                <span className="label">revenus · 30 jrs</span>
              </div>
            </div>

            <div className="rm-proof-note">
              Ce case study porte sur le nettoyage de hottes — un segment à cycle court qui permet de valider rapidement. Le mécanisme fondamental testé ici — attention chaude + conversion en moins de 5 minutes + rétention systémique — s'applique avec la même puissance au nettoyage commercial, avec des cycles plus longs et des deals significativement plus gros. ProNett est la preuve du mécanisme, pas un cas isolé.
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
