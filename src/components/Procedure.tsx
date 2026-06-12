import { useState } from 'react';
import { Beaker, Layers, FlaskConical, Timer, BarChart3, ClipboardCheck, ChevronRight, Check, Camera, ChevronDown, ChevronUp } from 'lucide-react';

const Procedure = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const steps = [
    {
      title: 'Materiales y Reactivos',
      description: 'Preparación y estandarización del instrumental de medición casero y los insumos necesarios.',
      duration: 'Montaje inicial',
      icon: Beaker,
      details: [
        'Materiales: 7 botellas plásticas transparentes, vaso, termómetro, cronómetro y regla.',
        'Reactivos: Agua tibia, azúcar, levadura seca, café soluble y té verde.',
      ],
    },
    {
      title: 'Diseño de la Muestra',
      description: 'Estructuración del diseño experimental factorial: grupo control y seis tratamientos por duplicado.',
      duration: '7 tratamientos × 2',
      icon: Layers,
      details: [
        'Grupo Control: Únicamente agua tibia, azúcar y levadura.',
        'Café: 3 concentraciones (Baja: 0.25 cuch., Media: 0.50 cuch., Alta: 1.00 cuch.).',
        'Té Verde: 3 tiempos de infusión (Baja: 1 min, Media: 3 min, Alta: 5 min).',
      ],
    },
    {
      title: 'Activación del Medio Vivo',
      description: 'Preparación del entorno base para la fermentación anaeróbica idéntica dentro de las botellas.',
      duration: '15 min',
      icon: FlaskConical,
      details: [
        'Disponer y etiquetar las 7 botellas plásticas secuencialmente.',
        'Dosificar rigurosamente 50 mL de agua tibia (verificar temp. con termómetro).',
        'Adicionar una cucharada de azúcar y media de levadura seca por botella.',
      ],
    },
    {
      title: 'Dosificación de Estimulantes',
      description: 'Adición controlada de los compuestos activos metabólicos (cafeína y catequinas) según el diseño.',
      duration: '15 min',
      icon: Timer,
      details: [
        'Mantener la botella control aislada sin adición de estimulantes.',
        'Incorporar café soluble directamente e infusiones de té verde controladas con cronómetro.',
        'Garantizar la homogeneidad mediante una agitación leve inicial.',
      ],
    },
    {
      title: 'Cinética y Medición',
      description: 'Monitoreo sistemático de la velocidad de fermentación a intervalos fijos midiendo la espuma.',
      duration: '60 min',
      icon: BarChart3,
      details: [
        'Dejar reposar y activar los sistemas biológicos durante 1 hora completa.',
        'Realizar mediciones estrictas a los 0, 15, 30, 45 y 60 minutos.',
        'Medir en centímetros la altura exacta de la capa de espuma con la regla.',
      ],
    },
    {
      title: 'Procesamiento y Réplicas',
      description: 'Consolidación de los datos empíricos obtenidos y repetición secuencial para neutralizar variables.',
      duration: 'Fase de análisis',
      icon: ClipboardCheck,
      details: [
        'Tabular la evolución de la altura de la espuma en función del tiempo.',
        'Ejecutar el experimento por segunda vez bajo las mismas directrices (duplicado).',
        'Contrastar promedios y relacionar la altura con el rendimiento energético.',
      ],
    },
  ];

  // Datos de ejemplo para las fotografías generales del proceso
  const photos = [
    { url: '/images/foto1.jpg', desc: 'Estandarización de insumos y reactivos base.' },
    { url: '/images/foto2.jpg', desc: 'Montaje del diseño factorial en botellas.' },
    { url: '/images/foto3.jpg', desc: 'Monitoreo de la cinética de la espuma.' },
    { url: '/images/foto4.jpg', desc: 'Registro de datos y fase de duplicado.' },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <section id="procedimiento" className="relative min-h-screen py-10 px-4 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header más compacto */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Procedimiento{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experimental
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Bloque principal */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Navegación lateral compacta */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-1.5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/30'
                        : isCompleted
                          ? 'bg-white/5 border-white/10'
                          : 'bg-white/5 border-transparent hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                            : isCompleted
                              ? 'bg-cyan-500/20'
                              : 'bg-white/10'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-3 h-3 text-cyan-400" />
                        ) : (
                          <Icon className={`w-3 h-3 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-medium truncate ${isActive ? 'text-white' : isCompleted ? 'text-zinc-300' : 'text-zinc-500'}`}>
                          {step.title}
                        </p>
                      </div>
                      {isActive && <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta de información reducida */}
          <div className="flex-1">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500">
                    {steps[activeStep].icon && (() => {
                      const IconComponent = steps[activeStep].icon;
                      return <IconComponent className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{steps[activeStep].title}</h3>
                    <p className="text-cyan-400 text-xs">{steps[activeStep].duration}</p>
                  </div>
                </div>

                <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                  {steps[activeStep].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-zinc-400 text-xs leading-tight">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controles inferiores compactos */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                <button
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeStep === 0 ? 'text-zinc-600 cursor-not-allowed' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Anterior
                </button>

                <div className="flex items-center gap-1.5">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === activeStep ? 'bg-cyan-400 w-4' : index < activeStep ? 'bg-cyan-400/30' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeStep === steps.length - 1
                      ? 'text-zinc-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                  }`}
                >
                  Siguiente
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Abatible de Fotografías */}
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          <button
            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
            className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-white/5"
          >
            <div className="flex items-center gap-2 text-white">
              <Camera className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Fotografías del Proceso General</span>
            </div>
            {isGalleryOpen ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>

          {isGalleryOpen && (          <div className="p-4 border-t border-white/10 bg-zinc-950/40 flex flex-col items-center">
              {/* Contenedor Principal del Slider */}
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-zinc-900 group">
                
                {/* Imagen Activa */}
                <img
                  src={photos[activePhoto].url}
                  alt={`Registro experimental ${activePhoto + 1}`}
                  className="w-full h-full object-cover animate-fadeIn"
                  key={activePhoto} // El key fuerza la animación al cambiar de imagen
                />

                {/* Capa de gradiente inferior para la descripción */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-4 pt-12">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 block mb-1">
                    Fotografía {activePhoto + 1} de {photos.length}
                  </span>
                  <p className="text-xs text-zinc-200 leading-snug dynamic-balance">
                    {photos[activePhoto].desc}
                  </p>
                </div>

                {/* Botón Flecha Izquierda */}
                <button
                  onClick={() => setActivePhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-950/60 border border-white/10 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity hover:bg-cyan-500 hover:border-cyan-400"
                  aria-label="Imagen anterior"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>

                {/* Botón Flecha Derecha */}
                <button
                  onClick={() => setActivePhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-950/60 border border-white/10 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity hover:bg-cyan-500 hover:border-cyan-400"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Indicadores de Puntos Inferiores (Dots) */}
              <div className="flex items-center gap-1.5 mt-3">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhoto(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activePhoto 
                        ? 'bg-cyan-400 w-5' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
  
        </div>
      </div>
    </section>
  );
};

export default Procedure;