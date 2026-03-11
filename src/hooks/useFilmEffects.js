import { useEffect } from 'react';

export const useFilmEffects = () => {
  useEffect(() => {
    // Crée l'overlay de vignette (effet vieux film)
    const vignette = document.createElement('div');
    vignette.className = 'film-vignette';
    document.body.appendChild(vignette);

    // Crée le grain de film
    const grain = document.createElement('div');
    grain.className = 'film-grain';
    document.body.appendChild(grain);

    // Nettoie à la destruction
    return () => {
      vignette.remove();
      grain.remove();
    };
  }, []);
};