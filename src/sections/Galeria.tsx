import React from 'react';
import { galleryImages } from '../constants/site';

const Galeria: React.FC = () => (
  <section id="galeria" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-white sm:text-4xl">Galeria</h2>
      <p className="mt-3 text-zinc-300">Treinos, superações e momentos marcantes no Dojang.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure key={image} className="group relative overflow-hidden rounded-md border border-zinc-800">
            <img
              src={image}
              alt={`Treino de Taekwondo ${index + 1}`}
              className="h-40 w-full object-cover brightness-75 transition duration-300 group-hover:scale-105 group-hover:brightness-95 sm:h-52"
            />
            <div className="pointer-events-none absolute inset-0 bg-amber-400/0 transition group-hover:bg-amber-400/20" />
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Galeria;
