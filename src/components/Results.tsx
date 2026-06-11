import { useState } from 'react';
import { Play, Download, BarChart3, Table, TrendingUp } from 'lucide-react';

const Results = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [activeView, setActiveView] = useState<'table' | 'chart'>('chart');

  const simulateAnalysis = () => {
    setIsLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2500);
  };

  const experimentalData = [
    { grupo: 'Control Negativo', tratamiento: 'Sin oxidante', concentracion: '0%', co2_cm: 8.2, inhibicion: 100 },
    { grupo: 'Control Positivo', tratamiento: 'H₂O₂ solo', concentracion: '5mM', co2_cm: 3.1, inhibicion: 0 },
    { grupo: 'Café Bajo', tratamiento: 'Cafeína + H₂O₂', concentracion: '25%', co2_cm: 4.2, inhibicion: 22 },
    { grupo: 'Café Medio', tratamiento: 'Cafeína + H₂O₂', concentracion: '50%', co2_cm: 5.1, inhibicion: 41 },
    { grupo: 'Café Alto', tratamiento: 'Cafeína + H₂O₂', concentracion: '75%', co2_cm: 5.8, inhibicion: 56 },
    { grupo: 'Café Máximo', tratamiento: 'Cafeína + H₂O₂', concentracion: '100%', co2_cm: 6.2, inhibicion: 65 },
    { grupo: 'Té Bajo', tratamiento: 'Catequinas + H₂O₂', concentracion: '25%', co2_cm: 4.8, inhibicion: 35 },
    { grupo: 'Té Medio', tratamiento: 'Catequinas + H₂O₂', concentracion: '50%', co2_cm: 5.9, inhibicion: 57 },
    { grupo: 'Té Alto', tratamiento: 'Catequinas + H₂O₂', concentracion: '75%', co2_cm: 6.7, inhibicion: 74 },
    { grupo: 'Té Máximo', tratamiento: 'Catequinas + H₂O₂', concentracion: '100%', co2_cm: 7.4, inhibicion: 87 },
  ];

  const maxValue = Math.max(...experimentalData.map((d) => d.co2_cm));

  return (
    <section id="resultados" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-slate-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experimentales
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Loading state */}
        {isLoading && !showResults && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-cyan-500/20 rounded-full" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" />
            </div>
            <p className="text-zinc-400 mt-6 mb-8">Cargando datos del laboratorio...</p>
            <button
              onClick={simulateAnalysis}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              <Play className="w-5 h-5" />
              Simular Análisis
            </button>
          </div>
        )}

        {/* Processing state */}
        {!isLoading && !showResults && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative mb-6">
              <div className="w-20 h-20 border-4 border-cyan-500/20 rounded-full" />
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin" />
              <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>
            <p className="text-zinc-300 text-lg">Procesando datos experimentales...</p>
            <p className="text-zinc-500 text-sm mt-2">Analizando marcadores de estrés oxidativo</p>
          </div>
        )}

        {/* Results display */}
        {showResults && (
          <div className="space-y-8">
            {/* Stats summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-zinc-500 text-sm mb-1">Mejor Resultado</p>
                <p className="text-2xl font-bold text-cyan-400">87%</p>
                <p className="text-xs text-zinc-500">Té Verde 100%</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-zinc-500 text-sm mb-1">Café Máximo</p>
                <p className="text-2xl font-bold text-blue-400">65%</p>
                <p className="text-xs text-zinc-500">Inhibición</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-zinc-500 text-sm mb-1">Diferencia</p>
                <p className="text-2xl font-bold text-emerald-400">22%</p>
                <p className="text-xs text-zinc-500">Té vs Café</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-zinc-500 text-sm mb-1">Muestras</p>
                <p className="text-2xl font-bold text-white">10</p>
                <p className="text-xs text-zinc-500">Grupos analizados</p>
              </div>
            </div>

            {/* View toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 p-1 rounded-lg bg-white/5 border border-white/10">
                <button
                  onClick={() => setActiveView('chart')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeView === 'chart'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Gráfico
                </button>
                <button
                  onClick={() => setActiveView('table')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeView === 'table'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Table className="w-4 h-4" />
                  Tabla
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300">
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>

            {/* Chart view */}
            {activeView === 'chart' && (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Producción de CO₂ (cm de espuma) - Actividad Metabólica
                </h3>

                <div className="space-y-3">
                  {experimentalData.map((data, index) => {
                    const isGreenTea = data.tratamiento.includes('Catequinas');
                    const isCoffee = data.tratamiento.includes('Cafeína');
                    const isControl = data.grupo.includes('Control');

                    let barColor = 'bg-zinc-500';
                    let textColor = 'text-zinc-400';

                    if (isGreenTea) {
                      barColor = 'bg-gradient-to-r from-emerald-500 to-green-400';
                      textColor = 'text-emerald-400';
                    } else if (isCoffee) {
                      barColor = 'bg-gradient-to-r from-amber-600 to-orange-500';
                      textColor = 'text-amber-400';
                    } else if (data.grupo.includes('Negativo')) {
                      barColor = 'bg-gradient-to-r from-cyan-500 to-blue-400';
                      textColor = 'text-cyan-400';
                    } else if (data.grupo.includes('Positivo')) {
                      barColor = 'bg-gradient-to-r from-red-500 to-rose-400';
                      textColor = 'text-red-400';
                    }

                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-36 text-right">
                          <p className="text-sm text-zinc-400 truncate">{data.grupo}</p>
                        </div>
                        <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden relative">
                          <div
                            className={`h-full ${barColor} rounded-lg transition-all duration-700 ease-out`}
                            style={{ width: `${(data.co2_cm / maxValue) * 100}%` }}
                          />
                          <span className="absolute inset-0 flex items-center justify-end pr-3 text-sm font-medium text-white">
                            {data.co2_cm} cm
                          </span>
                        </div>
                        <div className="w-16 text-right">
                          <span className={`text-sm font-medium ${textColor}`}>
                            {data.inhibicion}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-cyan-500 to-blue-400" />
                    <span className="text-xs text-zinc-400">Control Negativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500 to-rose-400" />
                    <span className="text-xs text-zinc-400">Control Positivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-600 to-orange-500" />
                    <span className="text-xs text-zinc-400">Café (Cafeína)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-emerald-500 to-green-400" />
                    <span className="text-xs text-zinc-400">Té Verde (Catequinas)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Table view */}
            {activeView === 'table' && (
              <div className="overflow-x-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-sm font-semibold text-cyan-400">
                        Grupo Experimental
                      </th>
                      <th className="text-left p-4 text-sm font-semibold text-cyan-400">
                        Tratamiento
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-cyan-400">
                        Concentración
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-cyan-400">
                        CO₂ (cm)
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-cyan-400">
                        Inhibición %
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {experimentalData.map((data, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors duration-200"
                      >
                        <td className="p-4 text-sm text-white font-medium">{data.grupo}</td>
                        <td className="p-4 text-sm text-zinc-400">{data.tratamiento}</td>
                        <td className="p-4 text-sm text-zinc-400 text-center">
                          {data.concentracion}
                        </td>
                        <td className="p-4 text-sm text-white text-center font-mono">
                          {data.co2_cm.toFixed(1)}
                        </td>
                        <td className="p-4 text-center">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                              data.inhibicion >= 70
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : data.inhibicion >= 40
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : data.inhibicion >= 20
                                    ? 'bg-amber-500/20 text-amber-400'
                                    : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {data.inhibicion}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Conclusions */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-white mb-4">Conclusiones Preliminares</h4>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    El <strong className="text-emerald-400">té verde (catequinas)</strong> mostró
                    mayor capacidad de protección antioxidante con hasta 87% de inhibición del daño
                    oxidativo.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    El <strong className="text-amber-400">café (cafeína)</strong> presentó efectos
                    protectores moderados, alcanzando un 65% de inhibición en la concentración
                    máxima.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    La actividad metabólica (producción de CO₂) correlaciona positivamente con la
                    protección antioxidante en ambos compuestos.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
