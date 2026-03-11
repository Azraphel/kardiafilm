import React from 'react';
import Card from '../ui/Card';
import { problemItems } from '../../data/content';

const Problem = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Colonne de gauche - Texte */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Le problème avec la plupart des vidéos
            </h2>
            <div className="space-y-4 text-gray-400">
              <p className="text-lg">
                Vous payez pour des vidéos. Vous avez des vues.
              </p>
              <p className="text-lg">
                Mais votre téléphone ne sonne pas.
              </p>
            </div>
          </div>

          {/* Colonne de droite - Liste des problèmes */}
          <div className="space-y-4">
            {problemItems.map((item, i) => (
              <Card key={i} variant="problem" className="flex items-start gap-4 p-4 hover:border-red-500/40">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{item}</p>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;