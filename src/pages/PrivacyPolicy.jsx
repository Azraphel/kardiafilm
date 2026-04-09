// pages/PrivacyPolicy.jsx
// Route : /politique-de-confidentialite
// Dans App.jsx : <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />

import React, { useEffect } from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.35rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
      {title}
    </h2>
    <div style={{ fontSize: 'clamp(0.875rem,2vw,0.975rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85 }}>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#050508', color: 'white', fontFamily: 'sans-serif' }}>

      {/* Nav simple */}
      <div style={{ padding: '1.25rem clamp(1rem,4vw,2rem)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: 'white', fontFamily: 'monospace' }}>K</div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Kardia <span style={{ color: '#a855f7' }}>Growth</span></span>
        </a>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>Politique de confidentialité</span>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,1.5rem) clamp(4rem,8vw,6rem)' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            ● Kardia Growth
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Qui nous sommes">
          <p>Kardia Growth est une entreprise basée au Québec, Canada, spécialisée dans l'installation de systèmes de réceptionniste IA pour les compagnies de nettoyage. Vous pouvez nous rejoindre à l'adresse suivante : <a href="mailto:stephane@kardiagrowth.com" style={{ color: '#a855f7', textDecoration: 'none' }}>stephane@kardiagrowth.com</a></p>
        </Section>

        <Section title="2. Informations que nous collectons">
          <p style={{ marginBottom: '1rem' }}>Lorsque vous interagissez avec notre site ou nos services, nous pouvons collecter les informations suivantes :</p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong style={{ color: 'white' }}>Informations de contact</strong> — nom, adresse courriel, numéro de téléphone fournis via notre formulaire de réservation (Calendly).</li>
            <li><strong style={{ color: 'white' }}>Informations commerciales</strong> — nom de votre compagnie, secteur d'activité, besoins exprimés lors de nos échanges.</li>
            <li><strong style={{ color: 'white' }}>Données de navigation</strong> — adresse IP, type de navigateur, pages visitées, durée des sessions (via des outils d'analyse anonymisés).</li>
          </ul>
        </Section>

        <Section title="3. Comment nous utilisons vos informations">
          <p style={{ marginBottom: '1rem' }}>Nous utilisons vos informations uniquement pour :</p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Répondre à vos demandes et planifier des appels de consultation.</li>
            <li>Vous fournir les services convenus (installation et gestion du système IA).</li>
            <li>Améliorer notre site web et nos services.</li>
            <li>Vous envoyer des communications relatives à votre dossier (confirmations, suivis).</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Nous ne vendons jamais vos données à des tiers. Jamais.</p>
        </Section>

        <Section title="4. Partage des informations">
          <p style={{ marginBottom: '1rem' }}>Vos informations peuvent être partagées uniquement avec :</p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong style={{ color: 'white' }}>Calendly</strong> — pour la gestion des rendez-vous. Politique de confidentialité disponible sur calendly.com.</li>
            <li><strong style={{ color: 'white' }}>Prestataires techniques</strong> — hébergement et outils nécessaires au fonctionnement du service, liés par des obligations de confidentialité.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Aucun partage à des fins publicitaires ou commerciales avec des tiers.</p>
        </Section>

        <Section title="5. Cookies et suivi">
          <p>Notre site peut utiliser des cookies essentiels au bon fonctionnement des pages. Aucun cookie publicitaire ou de profilage n'est utilisé sans votre consentement explicite. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur à tout moment.</p>
        </Section>

        <Section title="6. Conservation des données">
          <p>Vos données sont conservées uniquement le temps nécessaire pour vous fournir nos services, ou selon les obligations légales applicables au Québec. Sur demande, nous pouvons supprimer vos données dans un délai de 30 jours.</p>
        </Section>

        <Section title="7. Vos droits (Loi 25 — Québec)">
          <p style={{ marginBottom: '1rem' }}>Conformément à la Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (Loi 25), vous avez le droit de :</p>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Accéder aux renseignements personnels que nous détenons sur vous.</li>
            <li>Demander la correction de renseignements inexacts.</li>
            <li>Demander la suppression de vos données (droit à l'oubli).</li>
            <li>Retirer votre consentement à tout moment.</li>
            <li>Déposer une plainte auprès de la Commission d'accès à l'information du Québec.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Pour exercer ces droits, contactez-nous à : <a href="mailto:stephane@kardiagrowth.com" style={{ color: '#a855f7', textDecoration: 'none' }}>stephane@kardiagrowth.com</a></p>
        </Section>

        <Section title="8. Sécurité">
          <p>Nous prenons des mesures raisonnables pour protéger vos informations contre tout accès non autorisé, divulgation ou altération. Cependant, aucune transmission de données sur Internet n'est 100% sécurisée.</p>
        </Section>

        <Section title="9. Modifications de cette politique">
          <p>Nous pouvons mettre à jour cette politique de confidentialité occasionnellement. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous encourageons à la consulter périodiquement.</p>
        </Section>

        <Section title="10. Nous contacter">
          <p>Pour toute question concernant cette politique ou le traitement de vos données personnelles :</p>
          <div style={{ marginTop: '1rem', padding: '1.25rem 1.5rem', background: '#100d22', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '12px' }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: 'white' }}>Kardia Growth</strong><br />
              Québec, Canada<br />
              <a href="mailto:stephane@kardiagrowth.com" style={{ color: '#a855f7', textDecoration: 'none' }}>stephane@kardiagrowth.com</a><br />
              <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>kardiagrowth.com</a>
            </p>
          </div>
        </Section>

        {/* Back */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(168,85,247,0.7)', textDecoration: 'none', fontFamily: 'monospace', letterSpacing: '0.06em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a855f7'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(168,85,247,0.7)'}
          >
            ← Retour au site
          </a>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;