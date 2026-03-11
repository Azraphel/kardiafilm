import React from 'react';
import Card from '../ui/Card';
import { screenshots } from '../../data/content';

const Screenshots = () => {
  return (
    <section className="section-slide-up relative z-20 py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pas des promesses.<br />Des vraies conversations.
          </h2>
        </div>

        {/* Grille des screenshots */}
        <div className="grid md:grid-cols-3 gap-6">
          {screenshots.map((item, idx) => (
            <Card key={idx} variant="dashed" className="p-6">
              <div 
                className="aspect-[9/16] rounded-xl border border-purple-500/20 mb-4 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${item.img}')`,
                }}
              ></div>
              <p className="text-sm text-gray-400 text-center">{item.label}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Screenshots;