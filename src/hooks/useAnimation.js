import { useState, useEffect, useRef } from 'react';

export const useAnimation = (targets, duration = 2000) => {
  const [counts, setCounts] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Initialiser les compteurs à 0
    const initialCounts = {};
    Object.keys(targets).forEach(key => {
      initialCounts[key] = 0;
    });
    setCounts(initialCounts);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const steps = 60;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            
            const newCounts = {};
            Object.keys(targets).forEach(key => {
              newCounts[key] = Math.min(
                Math.floor((targets[key] / steps) * currentStep),
                targets[key]
              );
            });

            setCounts(newCounts);

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, targets, duration]);

  return { ref, counts, hasAnimated };
};