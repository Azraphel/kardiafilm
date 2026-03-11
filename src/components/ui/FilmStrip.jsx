// components/ui/FilmStrip.jsx - VERSION SIMPLIFIÉE
import React from 'react';

export const FilmStrip = () => {
  return (
    <div className="relative h-16 md:h-20 my-8 overflow-hidden">
      {/* Bande principale */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/30 to-transparent">
        
        {/* Perforations HAUT (visibles) */}
        <div className="absolute top-0 left-0 right-0 flex justify-around px-4">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-4 h-3 bg-black border-2 border-purple-500/60 rounded-sm -mt-1"></div>
            </div>
          ))}
        </div>
        
        {/* Perforations BAS (visibles) */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around px-4">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-4 h-3 bg-black border-2 border-purple-500/60 rounded-sm -mb-1"></div>
            </div>
          ))}
        </div>
        
        {/* Numéros de cadre (optionnel) */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-around px-4 transform -translate-y-1/2 opacity-20">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-purple-400 text-xs font-mono">35mm</span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FilmStrip;