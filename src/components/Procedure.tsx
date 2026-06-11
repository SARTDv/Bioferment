import { useState } from 'react';
import {
  Beaker,
  FlaskConical,
  Timer,
  Microscope,
  BarChart3,
  ClipboardCheck,
  ChevronRight,
  Check,
} from 'lucide-react';

const Procedure = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Preparación de Soluciones',
      description:
        'Preparación de soluciones madre de café (cafeína 100mg/mL) y té verde (catequinas 50mg/mL) en agua destilada estéril. Estandarización de concentraciones de trabajo.',
      duration: '45 min',
      icon: Beaker,
      details: [
        'Disolver 10g de café molido en 100mL de agua destilada',
        'Preparar infusión de té verde concentrado',
        'Filtrar y esterilizar soluciones',
        'Almacenar en condiciones controladas',
      ],
    },
    {
      title: 'Cultivo de Levaduras',
      description:
        'Activación de Saccharomyces cerevisiae en medio YPD líquido durante 24 horas hasta alcanzar fase exponencial de crecimiento (DO600 ≈ 0.8-1.0).',
      duration: '24 h',
      icon: FlaskConical,
      details: [
        'Inocular levadura en caldo YPD',
        'Incubar a 30°C con agitación',
        'Monitorear densidad óptica',
        'Verificar viabilidad celular',
      ],
    },
    {
      title: 'Inducción de Estrés Oxidativo',
      description:
        'Exposición de cultivos a peróxido de hidrógeno (H₂O₂ 5mM) como agente oxidante controlado, generando condiciones de estrés celular estandarizadas.',
      duration: '30 min',
      icon: Timer,
      details: [
        'Preparar solución de H₂O₂ al 5mM',
        'Añadir a los cultivos de levadura',
        'Incubar en condiciones controladas',
        'Observar cambios morfológicos',
      ],
    },
    {
      title: 'Aplicación de Tratamientos',
      description:
        'Adición de extractos de café y té verde en diferentes concentraciones (control, 25%, 50%, 75%, 100%) a los grupos experimentales según diseño factorial.',
      duration: '60 min',
      icon: Microscope,
      details: [
        'Dividir cultivos en grupos experimentales',
        'Aplicar concentraciones variables',
        'Mantener controles negativos y positivos',
        'Registrar tiempo de exposición exacto',
      ],
    },
    {
      title: 'Medición de CO₂ y Espuma',
      description:
        'Registro sistemático de la producción de CO₂ mediante medición de altura de espuma en cm, indicador directo de actividad metabólica fermentativa.',
      duration: '2 h',
      icon: BarChart3,
      details: [
        'Utilizar tubos de fermentación graduados',
        'Medir altura de espuma cada 15 minutos',
        'Documentar cambios visuales',
        'Calcular tasa de producción de CO₂',
      ],
    },
    {
      title: 'Análisis de Resultados',
      description:
        'Procesamiento estadístico de datos, elaboración de gráficos comparativos y determinación de significancia clínica mediante pruebas ANOVA y Tukey.',
      duration: '3 h',
      icon: ClipboardCheck,
      details: [
        'Tabular todos los datos recolectados',
        'Aplicar análisis estadístico',
        'Generar visualizaciones',
        'Redactar conclusiones finales',
      ],
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section id="procedimiento" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Procedimiento{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experimental
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stepper navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/30'
                        : isCompleted
                          ? 'bg-white/5 border-white/10'
                          : 'bg-white/5 border-transparent hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                            : isCompleted
                              ? 'bg-cyan-500/20'
                              : 'bg-white/10'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <Icon
                            className={`w-4 h-4 ${
                              isActive ? 'text-white' : 'text-zinc-500'
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium truncate ${
                            isActive
                              ? 'text-white'
                              : isCompleted
                                ? 'text-zinc-300'
                                : 'text-zinc-500'
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-zinc-600">{step.duration}</p>
                      </div>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active step content */}
          <div className="flex-1">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500">
                  {steps[activeStep].icon &&
                    (() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-cyan-400 text-sm">{steps[activeStep].duration}</p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              {/* Step details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {steps[activeStep].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-zinc-400 text-sm">{detail}</p>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeStep === 0
                      ? 'text-zinc-600 cursor-not-allowed'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeStep
                          ? 'bg-cyan-400 w-8'
                          : index < activeStep
                            ? 'bg-cyan-400/30'
                            : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeStep === steps.length - 1
                      ? 'text-zinc-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                  }`}
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
