import { useState, useEffect } from 'react';
import { FlaskConical, Atom, Microscope } from 'lucide-react';

const Hero = () => {
  const [inhibitionRate, setInhibitionRate] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const increment = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setInhibitionRate(current);
      if (current >= 87) {
        clearInterval(timer);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-zinc-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Institution badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <Microscope className="w-4 h-4 text-cyan-400" />
          <span className="text-zinc-400 text-sm font-medium tracking-wide">Colegio Champagnat • Grado Undécimo • 2026</span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Influencia de compuestos estimulantes naturales sobre la actividad
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            metabólica de levaduras como modelo biológico experimental
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Análisis del efecto antioxidante y metabólico de <span className="text-cyan-400">cafeína</span> y{' '}
          <span className="text-blue-400">catequinas</span> en modelos celulares de Saccharomyces cerevisiae
        </p>

        {/* Animated counter card */}
        <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3 text-zinc-400 text-sm font-medium uppercase tracking-wider">
            <FlaskConical className="w-5 h-5 text-cyan-400" />
            <span>Inhibición del Estrés Oxidativo</span>
            <Atom className="w-5 h-5 text-blue-400" />
          </div>

          <div className="relative">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {inhibitionRate}%
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full" />
          </div>

          <p className="text-zinc-500 text-xs max-w-xs">
            Simulación de efectividad antioxidante basada en compuestos naturales
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1 mx-auto">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
