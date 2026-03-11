// components/ui/StatsCounter.jsx
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';

const StatsCounter = () => {
  const [counts, setCounts] = useState({ leads: 0, record: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animation des compteurs
          const duration = 2000; // 2 secondes
          const steps = 60;
          const leadsIncrement = 90 / steps;
          const recordIncrement = 127 / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            setCounts({
              leads: Math.min(Math.floor(leadsIncrement * currentStep), 90),
              record: Math.min(Math.floor(recordIncrement * currentStep), 127)
            });

            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 } // Se déclenche quand 30% visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { number: `${counts.leads}+`, label: "Leads par mois" },
    { number: counts.record, label: "Record d'une campagne" },
    { number: "24/7", label: "Le système travaille" }
  ];

  return (
    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, i) => (
        <Card key={i} variant="stats" className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
            {stat.number}
          </div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCounter;