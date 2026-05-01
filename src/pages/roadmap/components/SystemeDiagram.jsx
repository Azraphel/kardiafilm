// components/SystemeDiagram.jsx
// version: 1=tout en ?, 2=Référence révélée, 3=Crédibilité, 4=Publicité, 5=Conversion

const ARROW = (id, color) => (
  <marker key={id} id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </marker>
);

const DIM = 'rgba(255,255,255,0.2)';
const VIO = '#7c3aed';
const AMB = '#f59e0b';
const VIO_MUTE = 'rgba(124,58,237,0.35)';

export default function SystemeDiagram({ version = 1 }) {
  const v = version;

  // Nœuds révélés selon version
  const refRevealed  = v >= 2;
  const credRevealed = v >= 3;
  const pubRevealed  = v >= 4;
  const convRevealed = v >= 5;

  // Couleurs dynamiques
  const refColor  = refRevealed  ? VIO : 'rgba(255,255,255,0.1)';
  const credColor = credRevealed ? VIO : 'rgba(255,255,255,0.1)';
  const pubColor  = pubRevealed  ? VIO : 'rgba(255,255,255,0.1)';
  const convColor = convRevealed ? AMB : 'rgba(255,255,255,0.1)';

  const refFill  = refRevealed  ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.03)';
  const credFill = credRevealed ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.03)';
  const pubFill  = pubRevealed  ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.03)';
  const convFill = convRevealed ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.03)';

  const refTextColor  = refRevealed  ? '#a855f7' : 'rgba(255,255,255,0.2)';
  const credTextColor = credRevealed ? '#a855f7' : 'rgba(255,255,255,0.2)';
  const pubTextColor  = pubRevealed  ? '#a855f7' : 'rgba(255,255,255,0.2)';
  const convTextColor = convRevealed ? AMB       : 'rgba(255,255,255,0.2)';

  // Flèches
  const arrowRef  = refRevealed  ? 'url(#as-vio)' : 'url(#as-dim)';
  const arrowCred = credRevealed ? 'url(#as-vio)' : 'url(#as-dim)';
  const arrowPub  = pubRevealed  ? 'url(#as-vio)' : 'url(#as-dim)';
  const arrowConv = convRevealed ? 'url(#as-amb)' : 'url(#as-dim)';

  // Épaisseur flèche sous-cercles
  const refW  = refRevealed  ? 1 : 0.5;
  const credW = credRevealed ? 1 : 0.5;
  const pubW  = pubRevealed  ? 1 : 0.5;
  const convW = convRevealed ? 1.2 : 0.5;

  // "Attention" apparaît dès v2
  const attLabel = v >= 2 ? 'Attention' : '?';
  const attFontSize = v >= 2 ? 12 : 20;
  const attColor = v >= 2 ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.3)';
  const attStroke = v >= 2 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)';

  return (
    <div className="rm-systeme-diag">
    <svg width="100%" viewBox="0 0 680 300" style={{ display: 'block' }}>
      <defs>
        {ARROW('as-dim', DIM)}
        {ARROW('as-vio', VIO)}
        {ARROW('as-amb', AMB)}
      </defs>

      {/* Système */}
      <circle cx="150" cy="150" r="55" fill="rgba(124,58,237,0.12)" stroke={VIO} strokeWidth="1.5"/>
      <text x="150" y="154" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="14" fontWeight="500" fill="white">Système</text>

      {/* → Conversion (haut) */}
      <line x1="198" y1="112" x2="316" y2="72" stroke={convRevealed ? AMB : DIM} strokeWidth={convW} markerEnd={arrowConv}/>
      <circle cx="360" cy="58" r="36" fill={convFill} stroke={convColor} strokeWidth={convRevealed ? 1.5 : 0.5}/>
      <text x="360" y="64" textAnchor="middle" fontFamily="'DM Sans',sans-serif"
        fontSize={convRevealed ? 11 : 20} fontWeight={convRevealed ? "500" : "400"} fill={convTextColor}>
        {convRevealed ? 'Conversion' : '?'}
      </text>

      {/* → Attention (milieu) */}
      <line x1="205" y1="155" x2="310" y2="165" stroke={DIM} strokeWidth="1" markerEnd="url(#as-dim)"/>
      <circle cx="356" cy="168" r="44" fill="rgba(255,255,255,0.04)" stroke={attStroke} strokeWidth="0.8"/>
      <text x="356" y="172" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize={attFontSize} fill={attColor}>
        {attLabel}
      </text>

      {/* → Référence */}
      <line x1="398" y1="142" x2="506" y2="82" stroke={refRevealed ? VIO : DIM} strokeWidth={refW} markerEnd={arrowRef}/>
      <circle cx="536" cy="68" r="30" fill={refFill} stroke={refColor} strokeWidth={refRevealed ? 1.5 : 0.5}/>
      <text x="536" y="65" textAnchor="middle" fontFamily="'DM Sans',sans-serif"
        fontSize={refRevealed ? 10 : 16} fontWeight={refRevealed ? "500" : "400"} fill={refTextColor}>
        {refRevealed ? 'Référence' : '?'}
      </text>

      {/* → Crédibilité */}
      <line x1="400" y1="168" x2="506" y2="168" stroke={credRevealed ? VIO : DIM} strokeWidth={credW} markerEnd={arrowCred}/>
      <circle cx="538" cy="168" r="30" fill={credFill} stroke={credColor} strokeWidth={credRevealed ? 1.5 : 0.5}/>
      <text x="538" y="165" textAnchor="middle" fontFamily="'DM Sans',sans-serif"
        fontSize={credRevealed ? 9 : 16} fontWeight={credRevealed ? "500" : "400"} fill={credTextColor}>
        {credRevealed ? 'Crédibilité' : '?'}
      </text>

      {/* → Publicité */}
      <line x1="398" y1="194" x2="504" y2="246" stroke={pubRevealed ? VIO : DIM} strokeWidth={pubW} markerEnd={arrowPub}/>
      <circle cx="536" cy="262" r="30" fill={pubFill} stroke={pubColor} strokeWidth={pubRevealed ? 1.5 : 0.5}/>
      <text x="536" y="259" textAnchor="middle" fontFamily="'DM Sans',sans-serif"
        fontSize={pubRevealed ? 9 : 16} fontWeight={pubRevealed ? "500" : "400"} fill={pubTextColor}>
        {pubRevealed ? 'Publicité' : '?'}
      </text>
    </svg>
    </div>
  );
}
