import React from 'react';
import { pillars } from '../constants/site';

const Sobre: React.FC = () => (
  <section id="sobre" className="scroll-mt-24 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-white sm:text-4xl">Sobre o Dojo</h2>
      <p className="mt-4 max-w-3xl text-zinc-300">
        Nossa metodologia une tradição marcial e didática moderna para formar atletas e cidadãos com postura, autocontrole e excelência técnica.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 transition hover:border-amber-400/40"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/90 font-black text-zinc-950">
              {item.title[0]}
            </div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Sobre;
