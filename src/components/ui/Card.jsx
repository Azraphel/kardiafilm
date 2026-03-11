import React from 'react';

// ===== CARD DE BASE =====
const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-gradient-to-br from-purple-900/10 via-black to-black border border-purple-500/20',
    stats: 'bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20',
    problem: 'bg-red-500/5 border border-red-500/20',
    dashed: 'bg-gradient-to-br from-purple-900/20 to-black border-4 border-purple-500/30'
  };

  return (
    <div 
      className={`rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-purple-500/40 ${variants[variant]} ${className}`}
      style={variant === 'dashed' ? { borderStyle: 'dashed' } : {}}
      {...props}
    >
      {children}
    </div>
  );
};

// ===== CASE STUDY CARD (SPÉCIAL) =====
export const CaseStudyCard = ({ study, index }) => {
  const isFirst = index === 0;
  const bgClass = isFirst 
    ? 'from-orange-900/40 via-gray-900 to-black' 
    : 'from-blue-900/40 via-gray-900 to-black';

  return (
    <div className="group relative overflow-hidden rounded-3xl border-4 border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:scale-105 min-h-[350px] md:min-h-[400px] h-auto md:h-[400px]">
      
      {/* Film strip top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-500/20 to-transparent flex items-center justify-around px-2">
        {[...Array(12)].map((_, idx) => (
          <div key={idx} className="w-1.5 h-4 bg-purple-500/40 rounded-sm" />
        ))}
      </div>
      
      {/* Background avec pattern */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgClass}`}>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: isFirst
                ? 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
                : 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>
      
      {/* Contenu */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 pt-16 pb-16">
        
        {/* Icone */}
        <div className="mb-auto">
          <div className="p-3 bg-purple-500/10 rounded-xl inline-block mb-4 text-purple-400 backdrop-blur-sm border border-purple-500/20">
            {study.icon}
          </div>
        </div>

        {/* Texte */}
        <div>
          <div className="text-purple-400 text-xs font-medium mb-2 uppercase tracking-wider">
            {study.industry}
          </div>
          <h3 className="text-2xl font-bold mb-4 md:mb-6">{study.company}</h3>

          {/* Résultats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 p-4 md:p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-purple-500/20">
            <div>
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                {study.results.leads}
              </div>
              <div className="text-xs text-gray-400 mt-1">appels</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                {study.results.period}
              </div>
              <div className="text-xs text-gray-400 mt-1">période</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                {study.results.cost}
              </div>
              <div className="text-xs text-gray-400 mt-1">par appel</div>
            </div>
          </div>
          
          {/* Traduction business */}
          <div className="mt-4 pt-4 border-t border-purple-500/20">
            <p className="text-sm text-gray-300">
              {isFirst
                ? "Résultat : des demandes de soumission entrantes, sans suivi manuel."
                : "Résultat : des appels de clients prêts à réserver."}
            </p>
          </div>
        </div>
      </div>

      {/* Film strip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-500/20 to-transparent flex items-center justify-around px-2">
        {[...Array(12)].map((_, idx) => (
          <div key={idx} className="w-1.5 h-4 bg-purple-500/40 rounded-sm" />
        ))}
      </div>
    </div>
  );
};

export default Card;