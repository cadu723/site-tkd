import React from 'react';
import { apostilaImage, whatsappLink } from '../constants/site';

const Apostila: React.FC = () => (
  <section id="apostila" className="scroll-mt-24 bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-zinc-800">
        <img
          src={apostilaImage}
          alt="Capa da apostila oficial de Taekwondo"
          className="h-auto w-full rounded-md object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Apostila</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Apostila Oficial de Taekwondo</h2>
        <p className="mt-4 text-zinc-300">
          Conteúdo organizado para acelerar o aprendizado dos fundamentos, técnicas e princípios: Cortesia, Integridade, Perseverança, Autocontrole e Espírito Indomável.
        </p>
        <p className="mt-4 border-l-2 border-amber-400 pl-4 text-lg font-semibold text-amber-300">
          Base sólida para evolução real.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex rounded-md bg-amber-400 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
        >
          Quero receber informações
        </a>
      </div>
    </div>
  </section>
);

export default Apostila;
