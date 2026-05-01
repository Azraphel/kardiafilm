// components/ModalCEO.jsx
import { useEffect } from 'react';

const CONTENU = {
  houston: {
    tag: 'Psychologie de la croissance',
    titre: 'La stratégie de Drew Houston — Dropbox',
    paragraphes: [
      <>Drew Houston n'a pas inventé le partage de fichiers. Dropbox avait des dizaines de concurrents au moment de son lancement. Ce qu'il a compris, c'est une vérité fondamentale sur le comportement humain : <strong>les gens font confiance aux recommandations de leurs pairs infiniment plus qu'à n'importe quelle publicité.</strong></>,
      <>Le problème de Dropbox était mathématique. Ils dépensaient entre 233$ et 388$ pour acquérir un nouveau client en publicité — pour un produit à 99$/an. Les chiffres ne fonctionnaient pas. En analysant leurs données, ils ont réalisé qu'un tiers de leurs utilisateurs venaient déjà de recommandations naturelles, sans programme officiel, sans incitatif.</>,
      <>Houston a posé une question simple : <strong>que se passerait-il si on rendait ce comportement plus facile et plus rentable pour celui qui le fait ?</strong> La réponse : offrir de l'espace de stockage supplémentaire à quiconque recommande un ami. Pas d'argent. Pas de commission. Juste quelque chose de valeur pour les deux parties.</>,
      <>Résultat : 3 900% de croissance en 15 mois. Ils n'ont pas inventé quelque chose de nouveau. Ils ont systématisé ce qui existait déjà.</>,
      <>Pour ton entreprise de nettoyage commercial, le principe est identique. Tes clients satisfaits parlent probablement déjà de toi à leurs collègues gestionnaires d'immeubles. La question c'est de savoir si tu rends ce comportement aussi facile et aussi naturel que possible — ou si tu le laisses se produire au hasard.</>,
    ],
  },
  sharp: {
    tag: 'Psychologie de la croissance',
    titre: 'La stratégie de Isadore Sharp — Four Seasons',
    paragraphes: [
      <>En 1961, Isadore Sharp frappait des portes dans une industrie hôtelière où tout le monde faisait les mêmes promesses. Il a compris quelque chose que très peu d'entrepreneurs saisissent : <strong>la confiance ne s'affirme pas, elle se démontre.</strong></>,
      <>Au lieu de dire qu'il offrait un service exceptionnel, il a décidé que la preuve serait visible avant même la conversation. Des standards documentés. Des garanties réelles. Une réputation construite méthodiquement, une propriété à la fois.</>,
      <>Le principe derrière cette approche : <strong>les gens ne se souviennent pas de ce qu'on leur dit — ils se souviennent de ce qu'ils ont vu.</strong> Une page Google avec 80 avis positifs et des before/after réels dit infiniment plus que n'importe quel argument de vente.</>,
      <>Sharp comprenait aussi que la crédibilité crée un effet de levier sur tous les autres canaux. Chaque nouveau prospect qui entend parler de Four Seasons par un ami vérifie ce qu'on lui a dit. S'il trouve la preuve, la vente est à moitié faite. S'il ne trouve rien, le doute s'installe.</>,
      <>La crédibilité que tu construis aujourd'hui — chaque avis demandé, chaque before/after documenté — c'est un actif qui s'accumule. Contrairement à la publicité qui s'arrête dès que tu arrêtes de payer, la crédibilité continue de travailler pour toi même quand tu dors.</>,
    ],
  },
  jobs: {
    tag: 'Psychologie de la croissance',
    titre: 'La stratégie de Steve Jobs — Apple',
    paragraphes: [
      <>En janvier 1984, Apple a diffusé une publicité au Super Bowl qui n'a montré aucun ordinateur. Aucun spec technique. Aucune liste de fonctionnalités. Juste une femme qui court et brise un écran géant. Le conseil d'administration voulait l'annuler. Jobs l'a imposée. Et cette pub est devenue l'une des plus mémorables de l'histoire de la publicité.</>,
      <><strong>Ce que Jobs avait compris, c'est que la publicité ne sert pas à expliquer ce que tu fais.</strong> Elle sert à créer une émotion, une appartenance, une perception. Les gens n'achètent pas des ordinateurs. Ils achètent une version d'eux-mêmes qu'ils veulent devenir.</>,
      <>La pub "1984" ne parlait pas du Macintosh. Elle parlait de liberté contre conformité. Elle positionnait Apple non pas comme un fabricant d'ordinateurs, mais comme un mouvement. Et des millions de personnes qui n'avaient jamais entendu parler du Mac ont voulu en faire partie.</>,
      <>Pour ton entreprise de nettoyage commercial, ce principe s'applique directement. Ta pub ne devrait pas montrer des employés qui nettoient. Elle devrait montrer le gestionnaire d'immeuble qui dort bien la nuit parce qu'il sait que son bâtiment est entre bonnes mains. La tranquillité d'esprit, pas le processus.</>,
      <>La publicité compresse le temps. Ce qui prendrait des mois à construire naturellement peut se produire en semaines. Mais seulement si elle crée une émotion — <strong>pas juste une information.</strong></>,
    ],
  },
};

export default function ModalCEO({ id, onClose }) {
  const data = CONTENU[id];

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="rm-modal-overlay" onClick={onClose}>
      <div className="rm-modal" onClick={e => e.stopPropagation()}>
        <button className="rm-modal-close" onClick={onClose}>✕</button>
        <div className="rm-modal-tag">{data.tag}</div>
        <div className="rm-modal-titre">{data.titre}</div>
        <div className="rm-modal-corps">
          {data.paragraphes.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}
