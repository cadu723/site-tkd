import React from 'react';
import { address, city, instagramLink, schedule, whatsappLink } from '../constants/site';

const Contato: React.FC = () => (
  <section id="contato" className="scroll-mt-24 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8">
      <h2 className="text-3xl font-black text-white sm:text-4xl">Contato</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Endereço</p>
          <p className="mt-1 font-semibold text-zinc-100">{address}</p>
          <p className="text-zinc-300">{city}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Horários</p>
          <p className="mt-1 font-semibold text-zinc-100">{schedule}</p>
          <p className="mt-2 text-sm font-semibold text-amber-300">Primeira aula gratuita.</p>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-amber-400 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-950 transition hover:bg-amber-300 sm:w-auto"
        >
          Falar no WhatsApp
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md border border-zinc-600 px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide text-zinc-100 transition hover:border-zinc-400 hover:text-white sm:w-auto"
        >
          Ver Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Contato;
