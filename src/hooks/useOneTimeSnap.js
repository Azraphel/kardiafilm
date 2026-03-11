import { useEffect, useRef } from 'react';

export const useOneTimeSnap = () => {
  const hasSnapped = useRef(false);

  useEffect(() => {
    const statsSection = document.querySelector('#resultats');
    if (!statsSection || hasSnapped.current) return;

    const handleScroll = () => {
      // Ne snap qu'UNE SEULE fois dans toute la session
      if (hasSnapped.current) {
        window.removeEventListener('scroll', handleScroll);
        return;
      }

      const scrollY = window.scrollY;
      const statsTop = statsSection.offsetTop;
      const distance = statsTop - scrollY;

      // Quand on arrive pour la PREMIÈRE fois près des stats
      if (distance > 100 && distance < 400) {
        hasSnapped.current = true;
        
        // Snap direct, pas de douceur
        window.scrollTo({
          top: statsTop,
          behavior: 'smooth'
        });

        // Retire l'événement après le snap
        setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};