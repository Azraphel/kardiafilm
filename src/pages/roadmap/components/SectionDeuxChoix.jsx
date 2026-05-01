import Reveal from './Reveal';

export default function SectionDeuxChoix() {
  return (
    <section className="rm-cta" id="admissibilite">
      <div className="rm-inner">

        <Reveal>
          <div className="rm-cta-tag">06 — Tes deux choix</div>
          <h2 className="rm-cta-titre">
            Tu connais maintenant<br /><span className="grad-violet">le système complet.</span>
          </h2>
          <p className="rm-cta-intro">
            Six phases. Ce que chacune demande. Comment la traverser. Rien ici n'est théorique — c'est le chemin que des compagnies de nettoyage commercial ont emprunté pour passer de 3 000$ à 50 000$+ par mois.
          </p>
        </Reveal>

        <Reveal>
          <div className="rm-cta-guarantee">
            <div className="rm-cta-guarantee-label">La Garantie Kardia™</div>
            <h3>5 à 10 nouveaux contrats commerciaux signés dans les 90 premiers jours — ou on continue sans frais additionnels jusqu'à ce qu'on l'atteigne.</h3>
            <p>Plus un pipeline industriel actif qui chasse tes plus gros prospects en arrière-plan pendant 6 à 12 mois. Les premiers contrats industriels se ferment typiquement à partir du mois 6-12, en raison du cycle de vente B2B long propre à ce segment.</p>
            <p className="rm-fine-print">Si on n'atteint pas l'objectif commercial dans les 90 jours, on continue sans frais additionnels jusqu'à ce qu'on l'atteigne.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-cta-split">
            <div className="rm-cta-option rm-cta-diy">
              <div className="rm-cta-option-label">Option 1</div>
              <h4>Construire par toi-même</h4>
              <p>C'est faisable. Beaucoup l'ont fait. Ça prend typiquement 18 à 24 mois pour atteindre la Phase 5, avec les erreurs coûteuses qui viennent avec — mauvaise agence, budget brûlé sans système de conversion, leads perdus faute de suivi.</p>
            </div>
            <div className="rm-cta-option rm-cta-kardia">
              <div className="rm-cta-option-label">Option 2</div>
              <h4>Le Système Kardia™</h4>
              <p>Les quatre piliers intégrés — acquisition, conversion en moins de 5 minutes, rétention systémique, pipeline industriel long-terme — activés en 30 à 90 jours. Conçu spécifiquement pour les compagnies de nettoyage commercial à la Phase 3 et au-delà.</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-cta-criteria">
            <h4>Ce système est fait pour toi si :</h4>
            <div className="rm-criteria-list">
              <div className="rm-criteria-item">Tu génères 10 000$/mois ou plus de façon stable</div>
              <div className="rm-criteria-item">Tu as une équipe minimale (toi + au moins un employé ou sous-traitant régulier)</div>
              <div className="rm-criteria-item">Tu veux scaler sans simplement travailler plus d'heures</div>
              <div className="rm-criteria-item">Tu es prêt à implanter un système — pas juste acheter de la pub</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <a href="https://kardiagrowth.com" className="rm-cta-btn">
            Vérifier mon admissibilité au Système Kardia™
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </Reveal>

        <Reveal>
          <div className="rm-cta-not-ready">
            <strong>Tu n'es pas encore à la Phase 3 ?</strong> Continue le roadmap par phase. Bouche-à-oreille structuré, présence en ligne crédible, premiers systèmes opérationnels. Quand tu atteins la Phase 3, tu sauras exactement quoi faire — et tu sauras pourquoi ce système a du sens à ce stade précis.
          </div>
        </Reveal>

      </div>
    </section>
  );
}
