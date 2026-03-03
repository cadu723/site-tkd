import React from 'react';
import { heroImage, dojoName, whatsappLink } from '../constants/site';

const Hero: React.FC = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8"
  >
    <img
      src={heroImage}
      alt="Treino de Taekwondo"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-zinc-950/80" />
    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:4px_4px]" />
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="max-w-4xl p-8 bg-zinc-950/70 rounded-xl border border-amber-400/20 shadow-lg">
        <p className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-zinc-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
          Cortesia • Integridade • Perseverança
        </p>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          taekwondo é disciplina, caráter e evolução
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-200 sm:text-lg">
          No {dojoName}, cada treino fortalece técnica, foco e autocontrole. Comece sua jornada.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-amber-400 px-6 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300"
          >
            Agendar aula experimental
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-200/70 bg-zinc-900/40 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
