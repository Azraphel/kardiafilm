import Reveal from './Reveal';

export default function SectionAttentionIntro() {
  return (
    <section className="rm-section" id="attention">
      <div className="rm-inner">
        <Reveal>
          <div className="rm-section-label">03 — Comprendre l'attention</div>
          <h2 className="rm-section-titre">
            Deux types d'attention.<br /><span className="grad-violet">Une seule qui scale.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="rm-att-grid">
            <div className="rm-att-card rm-att-froide">
              <h4>Attention froide</h4>
              <div className="rm-att-stat">Conversion ~2%</div>
              <ul>
                <li>Porte-à-porte</li>
                <li>Cold email</li>
                <li>Cold call</li>
                <li>Interruption</li>
                <li>Temps élevé par client</li>
              </ul>
            </div>
            <div className="rm-att-card rm-att-chaude">
              <h4>Attention chaude</h4>
              <div className="rm-att-stat">Conversion 10–20%</div>
              <ul>
                <li>Référence</li>
                <li>Crédibilité en ligne</li>
                <li>Publicité ciblée</li>
                <li>Prospect vient vers vous</li>
                <li>Cycle de vente plus court</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Tu commences avec le froid parce que c'est accessible immédiatement. Mais tu construis vers le chaud — parce que c'est là que la croissance accélère vraiment. Le roadmap qui suit te montre comment construire cette attention chaude concrètement, <strong>phase par phase.</strong></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
