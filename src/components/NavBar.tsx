import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Conceptos', href: '#conceptos' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Procedimiento', href: '#procedimiento' },  
  { label: 'Resultados', href: '#resultados' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2 text-white font-bold text-sm hover:text-emerald-400 transition-colors"
        >
          <Zap size={20} className="text-emerald-400" />
          <span className="hidden sm:inline">BioFerment</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-2"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-6 pb-4">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition-all text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}