import { useState } from 'react';
import { Activity, Coffee, Flame, Dna, Leaf, ChevronDown } from 'lucide-react';

const Concepts = () => {
  const [expandedConcept, setExpandedConcept] = useState<number | null>(0);

  const concepts = [
    {
      title: 'Actividad Metabólica',
      icon: Activity,
      gradient: 'from-cyan-400 to-blue-500',
      content: `El metabolismo comprende el conjunto de reacciones celulares que realizan los organismos para producir la energía necesaria para su supervivencia. En esta investigación, la actividad metabólica se analizará mediante la observación directa de la fermentación de la levadura, incluyendo la formación de espuma y burbujas de gas.

Según Gerard J. Tortora y Bryan Derrickson (2013), el metabolismo energético es fundamental para el funcionamiento celular básico y la homeostasis del organismo.`,
    },
    {
      title: 'Cafeína',
      icon: Coffee,
      gradient: 'from-amber-600 to-yellow-600',
      content: `La cafeína es un estimulante natural presente principalmente en el café. Este compuesto alcaloide es capaz de modificar distintos procesos metabólicos y fisiológicos dependiendo de la concentración consumida en el medio celular.

Donald Voet, Judith G. Voet y Charlotte W. Pratt (2016) señalaron que la cafeína posee una marcada actividad biológica relacionada con cambios inducidos en el metabolismo celular.`,
    },
    {
      title: 'Fermentación',
      icon: Flame,
      gradient: 'from-rose-500 to-orange-500',
      content: `La fermentación es un proceso metabólico utilizado por microorganismos como la levadura para producir energía en ausencia de oxígeno (condiciones anaeróbicas). Durante este proceso catabólico, se generan de manera medible dióxido de carbono (CO₂), espuma y energía celular.

David L. Nelson y Michael M. Cox (2017) afirmaron que la fermentación constituye una de las principales actividades metabólicas y vías de obtención de energía de la levadura.`,
    },
    {
      title: 'Levadura (Modelo Biológico)',
      icon: Dna,
      gradient: 'from-purple-500 to-indigo-500',
      content: `La levadura (Saccharomyces cerevisiae) es un microorganismo unicelular eucariota ampliamente utilizado en investigaciones bioquímicas debido a su alta capacidad de fermentación y su equivalencia en procesos celulares básicos. Este organismo permite observar y cuantificar de manera sencilla distintos procesos metabólicos en el laboratorio.

Neil A. Campbell y Jane B. Reece (2007) indicaron que la levadura representa un modelo biológico sumamente efectivo para estudiar y comprender el metabolismo celular.`,
    },
    {
      title: 'Té Verde (Catequinas)',
      icon: Leaf,
      gradient: 'from-emerald-400 to-green-500',
      content: `El té verde contiene compuestos bioactivos y potentes antioxidantes conocidos como catequinas. Estas moléculas polifenólicas están directamente relacionadas con la generación de respuestas metabólicas y adaptaciones celulares en los organismos vivos cuando se introducen en sus suministros alimenticios tradicionales.

Jeremy M. Berg, John L. Tymoczko y Lubert Stryer (2015) describen que los compuestos bioactivos vegetales interactúan con las vías bioquímicas modificando el rendimiento metabólico celular.`,
    },
  ];

  const toggleConcept = (index: number) => {
    setExpandedConcept(expandedConcept === index ? null : index);
  };

  return (
    <section id="conceptos" className="relative min-h-screen py-8 px-4 flex items-center">
      {/* Mantenemos el fondo original del componente */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-zinc-950" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Section header - más compacto */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Marco{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Conceptual
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto text-xs md:text-sm">
            Fundamentos científicos y autores que sustentan el diseño experimental del proyecto
          </p>
        </div>

        {/* Acordeones de Conceptos - espacio reducido entre ellos */}
        <div className="space-y-3">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            const isExpanded = expandedConcept === index;

            return (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleConcept(index)}
                  className="w-full p-3 flex items-center justify-between gap-3 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${concept.gradient}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white tracking-wide">{concept.title}</span>
                  </div>
                  <div
                    className={`p-1.5 rounded-lg bg-white/5 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-cyan-400" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 pb-3 pt-1">
                      <div className="ml-0 md:ml-11 p-3 rounded-lg bg-white/[0.02] border-l-2 border-cyan-500/40">
                        <p className="text-zinc-300 leading-relaxed text-xs whitespace-pre-line font-normal">
                          {concept.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Concepts;