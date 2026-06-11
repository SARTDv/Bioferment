import { useState } from 'react';
import {
  Zap,
  Shield,
  Coffee,
  Dna,
  Flame,
  Atom,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Concepts = () => {
  const [expandedConcept, setExpandedConcept] = useState<number | null>(0);

  const concepts = [
    {
      title: 'Estrés Oxidativo',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      content: `El estrés oxidativo es un desequilibrio entre la producción de especies reactivas del oxígeno (ROS) y la capacidad del organismo para neutralizarlas o reparar el daño resultante. Cuando los radicales libres superan las defensas antioxidantes, se produce daño en lípidos, proteínas y ADN, comprometiendo la viabilidad celular.

En este estudio, la levadura Saccharomyces cerevisiae expuesta a peróxido de hidrógeno simula condiciones de estrés oxidativo que permiten evaluar la efectividad de compuestos protectores.`,
    },
    {
      title: 'Antioxidantes (Catequinas)',
      icon: Shield,
      gradient: 'from-emerald-400 to-green-500',
      content: `Las catequinas son flavonoides polifenólicos presentes principalmente en el té verde (Camellia sinensis), con potente actividad antioxidante. Las principales catequinas incluyen epigalocatequina galato (EGCG), epigalocatequina (EGC), epicatequina galato (ECG) y epicatequina (EC).

Su mecanismo de acción incluye la donación de electrones a radicales libres, quelación de metales pro-oxidantes y modulación de enzimas antioxidantes endógenas como superóxido dismutasa y catalasa.`,
    },
    {
      title: 'Cafeína',
      icon: Coffee,
      gradient: 'from-amber-600 to-yellow-500',
      content: `La cafeína (1,3,7-trimetilxantina) es un alcalide presente en café, té y guaraná con efectos farmacológicos diversos. Más allá de su conocida acción como estimulante del sistema nervioso central, la cafeína exhibe propiedades antioxidantes inherentes.

Estudios demuestran que la cafeína puede inhibir la peroxidación lipídica, secuestrar radicales hidroxilo y modular la expresión de factores de transcripción relacionados con la respuesta antioxidante celular (Nrf2).`,
    },
    {
      title: 'Modelos Celulares',
      icon: Dna,
      gradient: 'from-purple-400 to-indigo-500',
      content: `Saccharomyces cerevisiae es un organismo modelo eucariota ampliamente utilizado en investigación biológica por su similitud genética y metabólica con células humanas, ciclo celular conservado, facilidad de manipulación genética y rápido tiempo de generación.

En estudios de estrés oxidativo, S. cerevisiae permite evaluar mecanismos de protección celular, respuestas adaptativas y toxicidad de compuestos en un sistema biológico completo pero controlable.`,
    },
    {
      title: 'Fermentación',
      icon: Flame,
      gradient: 'from-rose-400 to-pink-500',
      content: `La fermentación alcohólica es un proceso metabólico anaeróbico donde la glucosa se transforma en etanol y CO₂, liberando energía. En levaduras, este proceso es catalizado por enzimas específicas y la producción de CO₂ es un indicador directo de actividad metabólica.

La medición de espuma (CO₂) permite cuantificar indirectamente la viabilidad y el estado metabólico de las células bajo diferentes condiciones experimentales, correlacionándolo con el nivel de estrés oxidativo.`,
    },
    {
      title: 'Radicales Libres',
      icon: Atom,
      gradient: 'from-cyan-400 to-blue-500',
      content: `Los radicales libres son especies químicas con electrones desapareados, altamente reactivas. Principalmente incluyen el anión superóxido (O₂⁻), radical hidroxilo (OH•) y peróxido de hidrógeno (H₂O₂), agrupados como especies reactivas del oxígeno (ROS).

Aunque cumplen funciones fisiológicas importantes (señalización celular, respuesta inmune), su acumulación excesiva genera daño oxidativo en biomoléculas, contribuyendo al envejecimiento y diversas patologías.`,
    },
  ];

  const toggleConcept = (index: number) => {
    setExpandedConcept(expandedConcept === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-zinc-950" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conceptos{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clave
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Fundamentos científicos que sustentan la investigación
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            const isExpanded = expandedConcept === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleConcept(index)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${concept.gradient}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">{concept.title}</span>
                  </div>
                  <div
                    className={`p-2 rounded-lg bg-white/5 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-2">
                      <div className="ml-14 p-4 rounded-lg bg-white/5 border-l-2 border-cyan-400/50">
                        <p className="text-zinc-300 leading-relaxed text-sm whitespace-pre-line">
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
