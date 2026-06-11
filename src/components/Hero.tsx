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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo original restablecido */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-zinc-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      {/* Animaciones de fondo originales */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        {/* Badge de Institución */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <Microscope className="w-4 h-4 text-cyan-400" />
          <span className="text-zinc-400 text-sm font-medium tracking-wide">Colegio Champagnat • Grado Undécimo • 2026</span>
        </div>

        {/* Título Llamativo y Lógico con los Colores */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Influencia de Estimulantes Naturales sobre la{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Actividad Metabólica
          </span>
        </h1>

        {/* Introducción ultra-corta modificada para máxima retención de lectura */}
          <p className="text-md md:text-lg text-zinc-400 max-w-3xl mx-auto mb-10">
            ¿Cómo alteran el metabolismo las bebidas cotidianas? Analizamos el impacto de la{' '}
            <span className="text-amber-400 font-semibold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">cafeína</span> (café) y las{' '}
            <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">catequinas</span> (té verde) sobre las vías bioquímicas de producción energética. Utilizando{' '}
            <span className="text-cyan-400 font-medium">levadura</span> como modelo vivo, medimos los cambios indirectos de su actividad celular a través de la tasa de{' '}
            <span className="text-teal-400 font-semibold">fermentación</span> y el desprendimiento visible de{' '}
            <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">CO₂</span>.
          </p>

        {/* Tarjeta de Contador Dinámico */}
        <div className="inline-flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl relative group">
  
          <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-semibold uppercase tracking-wider">
            <FlaskConical className="w-3 h-3 text-cyan-400" />
            <span>Máxima Eficiencia de Fermentación</span>
            <Atom className="w-3 h-3 text-teal-400" />
          </div>

          <div className="relative">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent font-mono">
              {inhibitionRate}%
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full" />
          </div>

          <p className="text-zinc-400 text-[10px] max-w-xs leading-relaxed text-center">
            Tasa máxima de asimilación de sustratos y actividad celular en matrices vegetales optimizadas.
          </p>

          <div className="text-[9px] text-zinc-500 font-mono tracking-tight pt-1.5 border-t border-white/5 w-full text-center">
            Ref: Reis, Kosińska-Cagnazzo & Schmitt et al.
          </div>
        </div>

        {/* Indicador de Scroll */}
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