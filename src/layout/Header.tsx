import React from 'react';
import { dojoName, navItems, whatsappLink } from '../constants/site';

const Header: React.FC = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/90 bg-zinc-950/90 backdrop-blur">
    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 flex-wrap gap-4">
      <a href="#inicio" className="text-base font-extrabold tracking-[0.18em] text-amber-400 sm:text-lg">
        {dojoName}
      </a>
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-zinc-200 transition-colors hover:text-amber-400"
          >
            {item.label}
          </a>
        ))}
      </nav> 
    </div>
  </header>
);

export default Header;
