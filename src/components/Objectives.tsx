import { Target, Beaker, Activity, Flame } from 'lucide-react';
import { useState } from 'react';

const Objectives = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const generalObjective = {
    title: 'Objetivo General',
    description:
      'Analizar el efecto de diferentes concentraciones de café y té verde sobre la actividad metabólica de levaduras mediante la observación de fermentación y producción de espuma.',
    icon: Target,
    gradient: 'from-cyan-400 via-teal-400 to-blue-500',
  };

  const specificObjectives = [
    {
      title: '1. Evaluación de Producción de Espuma',
      description:
        'Evaluar la producción de espuma en levaduras expuestas a diferentes concentraciones de café y té verde como indicador de la intensidad metabólica.',
      icon: Beaker,
      gradient: 'from-amber-500 to-yellow-600', // Tonos cálidos (Café)
    },
    {
      title: '2. Comparación de Actividad Fermentativa',
      description:
        'Comparar la actividad fermentativa observada en cada tratamiento experimental para identificar diferencias en el grado de estimulación celular.',
      icon: Activity,
      gradient: 'from-emerald-400 to-green-500', // Tonos vegetales (Té Verde)
    },
    {
      title: '3. Relación con Procesos Bioquímicos',
      description:
        'Relacionar los resultados experimentales con procesos bioquímicos fundamentales como la fermentación y el metabolismo energético a nivel celular.',
      icon: Flame,
      gradient: 'from-cyan-400 to-teal-500', // Tonos cinéticos (Energía)
    },
  ];

  return (
    <section id="objetivos" className="relative py-20 px-4">
      {/* Fondo original restablecido */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-zinc-950" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Objetivos del{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Proyecto
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
        </div>

        {/* General Objective */}
        <div className="mb-12">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${generalObjective.gradient} rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${
                hoveredCard === 0 ? 'opacity-15' : ''
              }`}
            />
            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${generalObjective.gradient}`}>
                  <generalObjective.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {generalObjective.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-base md:text-lg">{generalObjective.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specific Objectives Grid (Adaptado dinámicamente para 3 elementos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specificObjectives.map((objective, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index + 1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${objective.gradient} rounded-xl blur-lg opacity-0 transition-opacity duration-500 ${
                  hoveredCard === index + 1 ? 'opacity-10' : ''
                }`}
              />
              <div className="relative h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${objective.gradient} w-fit`}>
                    <objective.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{objective.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;