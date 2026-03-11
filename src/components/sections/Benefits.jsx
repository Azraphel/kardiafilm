import React from 'react';
import Card from '../ui/Card';
import { benefits } from '../../data/content';

const Benefits = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voici ce qui change
          </h2>
          <p className="text-xl text-gray-400">
            Concrètement
          </p>
        </div>

        {/* Grille des bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i} className="group">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-amber-600/10 rounded-2xl text-purple-400 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-lg">{benefit.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;