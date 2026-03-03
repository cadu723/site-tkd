import React from 'react';
import { whatsappLink } from '../constants/site';

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-zinc-950 shadow-lg shadow-zinc-950/40 transition hover:scale-105 hover:bg-amber-300"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M19.05 4.94A9.86 9.86 0 0 0 12.03 2a9.93 9.93 0 0 0-8.57 14.95L2 22l5.2-1.36a9.92 9.92 0 0 0 4.83 1.24h.01A9.96 9.96 0 0 0 22 11.94a9.86 9.86 0 0 0-2.95-7Zm-7.02 15.25a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.08.81.82-3-.2-.31A8.26 8.26 0 0 1 3.8 11.9a8.28 8.28 0 0 1 8.24-8.22 8.18 8.18 0 0 1 5.86 2.43 8.2 8.2 0 0 1 2.43 5.84 8.28 8.28 0 0 1-8.3 8.24Zm4.53-6.2c-.25-.13-1.5-.74-1.73-.83-.23-.08-.4-.12-.56.13-.17.25-.65.83-.8 1-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.04-1.25a7.62 7.62 0 0 1-1.42-1.77c-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48a.94.94 0 0 0-.69.31c-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.04 2.67.13.17 1.8 2.75 4.36 3.75.61.26 1.1.42 1.48.54.62.2 1.2.17 1.65.1.5-.07 1.5-.61 1.7-1.2.21-.58.21-1.08.15-1.2-.05-.12-.22-.19-.48-.31Z" />
    </svg>
  </a>
);

export default WhatsAppButton;
