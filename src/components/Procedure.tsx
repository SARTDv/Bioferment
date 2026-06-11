import { useState } from 'react';
import { Beaker, Layers, FlaskConical, Timer, BarChart3, ClipboardCheck, ChevronRight, Check } from 'lucide-react';

const Procedure = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Materiales y Reactivos',
      description:
        'Preparación y estandarización del instrumental de medición casero y los insumos biológicos y alimenticios necesarios para el montaje experimental.',
      duration: 'Montaje inicial',
      icon: Beaker,
      details: [
        'Materiales: 7 botellas plásticas transparentes, vaso precipitado, termómetro, cronómetro, regla graduada y cucharas medidoras.',
        'Reactivos: Agua tibia, azúcar, levadura seca, café soluble y té verde.',
      ],
    },
    {
      title: 'Diseño de la Muestra',
      description:
        'Estructuración del diseño experimental factorial compuesto por un grupo de control de referencia y seis tratamientos evaluados por duplicado para garantizar confiabilidad.',
      duration: '7 tratamientos × 2',
      icon: Layers,
      details: [
        'Grupo Control: Únicamente agua tibia, azúcar y levadura.',
        'Tratamientos de Café: 3 concentraciones diferenciadas (Baja: 0.25 cuch., Media: 0.50 cuch., Alta: 1.00 cuch.).',
        'Tratamientos de Té Verde: 3 concentraciones basadas en tiempo de infusión (Baja: 1 min, Media: 3 min, Alta: 5 min).',
        'Población: Muestras biológicas activas sometidas a idénticas condiciones de temperatura y volumen.',
      ],
    },
    {
      title: 'Activación del Medio Vivo',
      description:
        'Preparación del entorno base para la fermentación anaeróbica idéntica dentro de cada una de las siete botellas plásticas transparentes limpias.',
      duration: '15 min',
      icon: FlaskConical,
      details: [
        'Disponer las 7 botellas plásticas etiquetadas secuencialmente.',
        'Verificar que el agua se encuentre tibia mediante el termómetro.',
        'Dosificar rigurosamente 50 mL de agua tibia en cada unidad.',
        'Adicionar una cucharada de azúcar y media cucharada de levadura seca por botella.',
      ],
    },
    {
      title: 'Dosificación de Estimulantes',
      description:
        'Adición controlada de los compuestos activos metabólicos (cafeína y catequinas) a sus respectivos envases de tratamiento según el diseño factorial establecido.',
      duration: '15 min',
      icon: Timer,
      details: [
        'Mantener la botella control aislada sin adición de estimulantes externos.',
        'Incorporar el café soluble directamente en polvo en las proporciones de 0.25, 0.50 y 1 cucharada.',
        'Preparar las infusiones de té verde con cronómetro en mano y verterlas uniformemente.',
        'Garantizar la homogeneidad de las mezclas mediante agitación leve inicial.',
      ],
    },
    {
      title: 'Cinética y Medición de Espuma',
      description:
        'Monitoreo sistemático de la velocidad de fermentación a intervalos fijos utilizando la regla graduada para registrar la dinámica cinética celular.',
      duration: '60 min',
      icon: BarChart3,
      details: [
        'Dejar reposar y activar los sistemas biológicos durante 1 hora completa.',
        'Realizar mediciones estrictas a los 0, 15, 30, 45 y 60 minutos de haber iniciado.',
        'Medir en centímetros la altura exacta de la capa de espuma formada con la regla.',
        'Registrar visualmente la intensidad y presencia de burbujas de gas liberadas.',
      ],
    },
    {
      title: 'Procesamiento y Réplicas',
      description:
        'Consolidación de los datos empíricos obtenidos y repetición secuencial del proceso para neutralizar variables externas aleatorias.',
      duration: 'Fase de análisis',
      icon: ClipboardCheck,
      details: [
        'Tabular la evolución de la altura de la espuma en función del tiempo para cada botella.',
        'Ejecutar el experimento por segunda vez bajo las mismas directrices exactas (duplicado).',
        'Contrastar promedios entre el grupo de control, los niveles de café y los niveles de té verde.',
        'Relacionar las alturas máximas de espuma obtenidas con el rendimiento energético celular.',
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
      {/* Fondo original y animaciones intactas */}
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
          {/* Stepper navigation lateral */}
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

          {/* Active step card container */}
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

              <p className="text-zinc-300 leading-relaxed mb-8 text-base">
                {steps[activeStep].description}
              </p>

              {/* Grid interactiva de detalles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {steps[activeStep].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-zinc-400 text-sm leading-normal">{detail}</p>
                  </div>
                ))}
              </div>

              {/* Botones de navegación inferiores */}
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