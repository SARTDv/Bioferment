import { Target, Beaker, FlaskConical, BarChart3, Microscope } from 'lucide-react';
import { useState } from 'react';

const Objectives = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const generalObjective = {
    title: 'Objetivo General',
    description:
      'Analizar el efecto antioxidante y metabólico de los estimulantes naturales (café y té verde) en las levaduras Saccharomyces cerevisiae, evaluando su capacidad para inhibir el estrés oxidativo y modulando la actividad metabólica.',
    icon: Target,
    gradient: 'from-cyan-400 to-blue-500',
  };

  const specificObjectives = [
    {
      title: 'Medición de Actividad Metabólica',
      description:
        'Medir la actividad metabólica mediante el registro sistemático de CO₂ producido (espuma en cm) en tratamientos con diferentes concentraciones de cafeína y catequinas.',
      icon: Beaker,
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Comparación de Sustancias',
      description:
        'Comparar la efectividad antioxidante entre el café (cafeína) y el té verde (catequinas) en la protección celular contra agentes oxidantes.',
      icon: FlaskConical,
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      title: 'Análisis de Concentraciones',
      description:
        'Determinar las concentraciones óptimas de cada compuesto estimulante que maximicen la protección antioxidante sin afectar negativamente la viabilidad celular.',
      icon: BarChart3,
      gradient: 'from-cyan-400 to-teal-500',
    },
    {
      title: 'Análisis Bioquímico',
      description:
        'Evaluar los marcadores bioquímicos de estrés oxidativo y correlacionarlos con los cambios observados en la actividad fermentativa de las levaduras.',
      icon: Microscope,
      gradient: 'from-blue-400 to-cyan-500',
    },
  ];

  return (
    <section id="objetivos" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Objetivos de la{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Investigación
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
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
                hoveredCard === 0 ? 'opacity-20' : ''
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
                  <p className="text-zinc-400 leading-relaxed">{generalObjective.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specific Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specificObjectives.map((objective, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index + 1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${objective.gradient} rounded-xl blur-lg opacity-0 transition-opacity duration-500 ${
                  hoveredCard === index + 1 ? 'opacity-15' : ''
                }`}
              />
              <div className="relative h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${objective.gradient}`}>
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
