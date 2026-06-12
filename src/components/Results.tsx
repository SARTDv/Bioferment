import React, { useState } from 'react';
import { Clipboard, Eye, FileText, TableProperties, Filter } from 'lucide-react';

const Results = () => {
  // Estado para el filtro interactivo de la tabla
  const [filter, setFilter] = useState<'todos' | 'cafe' | 'te'>('todos');

  // Datos de la tabla
  const data = [
    { name: 'Control', t15: '0,2 cm', t30: '0,4 cm', t45: '0,6 cm', t60: '0,8 cm', obs: 'Pocas burbujas', type: 'control' },
    { name: 'Café bajo', t15: '0,3 cm', t30: '0,5 cm', t45: '0,8 cm', t60: '1,0 cm', obs: 'Espuma moderada', type: 'cafe' },
    { name: 'Café medio', t15: '0,4 cm', t30: '0,8 cm', t45: '1,2 cm', t60: '1,8 cm', obs: 'Más burbujas', type: 'cafe' },
    { name: 'Café alto', t15: '0,6 cm', t30: '1,7 cm', t45: '2,3 cm', t60: '3,5 cm', obs: 'Fermentación más visible', type: 'cafe' },
    { name: 'Té bajo', t15: '0,2 cm', t30: '0,5 cm', t45: '0,8 cm', t60: '1,0 cm', obs: 'Espuma moderada', type: 'te' },
    { name: 'Té medio', t15: '0,4 cm', t30: '0,8 cm', t45: '1,2 cm', t60: '2,7 cm', obs: 'Incremento progresivo', type: 'te' },
    { name: 'Té alto', t15: '0,5 cm', t30: '1,5 cm', t45: '2,0 cm', t60: '3,0 cm', obs: 'Alta formación de espuma', type: 'te' },
  ];

  // Filtrado lógico de los datos
  const filteredData = data.filter((item) => {
    if (filter === 'todos') return true;
    if (filter === 'cafe') return item.type === 'cafe' || item.type === 'control';
    if (filter === 'te') return item.type === 'te' || item.type === 'control';
    return true;
  });

  return (
    <section id="resultados" className="relative py-20 px-4">
      {/* Fondo degradado oscuro original */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-slate-950" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados y{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Discusión
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full" />
        </div>

        {/* Bloque: Recolección de Datos y Resultados Directos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <Clipboard className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-white">Recolección de Datos</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              La recolección de datos se realizó mediante observación directa durante el proceso de fermentación. 
              La variable principal evaluada fue la altura de la espuma producida en cada tratamiento, medida en 
              centímetros mediante una regla graduada. También se registró la presencia de burbujas y los cambios 
              observados a lo largo del tiempo experimental.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 text-teal-400">
              <Eye className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-white">Resultados</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Durante el experimento se observó formación de espuma en todas las muestras. A medida que avanzó 
              el tiempo de fermentación, la altura de la espuma aumentó progresivamente.
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed mt-3 pt-3 border-t border-white/5">
              Los tratamientos con concentraciones más altas de café y té verde presentaron una mayor formación 
              de espuma en comparación con el grupo control y las concentraciones bajas. Además, se observó una 
              mayor presencia de burbujas en estos tratamientos, indicando una actividad fermentativa más evidente.
            </p>
          </div>
        </div>

        {/* NUEVA SECCIÓN: Tabla Interactiva de Datos */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 text-cyan-400">
              <TableProperties className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-white">Registro de Altura de Espuma (cm)</h3>
            </div>
            
            {/* Filtros Interactivos */}
            <div className="flex items-center gap-2 bg-zinc-900/80 p-1 rounded-xl border border-white/5 self-start sm:self-auto">
              <Filter className="w-3.5 h-3.5 text-zinc-500 ml-2 hidden sm:block" />
              <button
                onClick={() => setFilter('todos')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  filter === 'todos' ? 'bg-cyan-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter('cafe')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  filter === 'cafe' ? 'bg-cyan-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Café
              </button>
              <button
                onClick={() => setFilter('te')}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  filter === 'te' ? 'bg-cyan-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Té
              </button>
            </div>
          </div>

          {/* Contenedor Responsive para la tabla */}
          <div className="overflow-x-auto rounded-xl border border-white/5">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-white/5 text-zinc-300 font-medium border-b border-white/10">
                  <th className="p-4 text-cyan-400 font-semibold">Tratamiento</th>
                  <th className="p-4">15 min</th>
                  <th className="p-4">30 min</th>
                  <th className="p-4">45 min</th>
                  <th className="p-4">60 min</th>
                  <th className="p-4 text-teal-400 font-semibold">Observaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {filteredData.map((row, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-cyan-500/5 transition-colors group"
                  >
                    <td className="p-4 font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {row.name}
                    </td>
                    <td className="p-4">{row.t15}</td>
                    <td className="p-4">{row.t30}</td>
                    <td className="p-4">{row.t45}</td>
                    <td className="p-4 font-semibold text-zinc-100">{row.t60}</td>
                    <td className="p-4 text-zinc-400 group-hover:text-zinc-300 italic transition-colors">
                      {row.obs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bloque: Análisis y Discusión de Resultados */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <div className="flex items-center gap-3 mb-6 text-amber-400">
            <FileText className="w-5 h-5" />
            <h3 className="text-xl font-semibold text-white">Análisis y Discusión de Resultados</h3>
          </div>
          <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
            <p>
              La formación de espuma observada durante el experimento estuvo asociada a la producción de 
              dióxido de carbono generada por las levaduras durante la fermentación. El incremento progresivo 
              de la espuma a lo largo del tiempo indica que las levaduras mantuvieron actividad metabólica 
              durante todo el periodo de observación.
            </p>
            <p>
              Los tratamientos con mayores concentraciones de café y té verde mostraron una producción de espuma 
              superior a la observada en el grupo control, lo que sugiere que los compuestos presentes en estas 
              sustancias influyeron en el proceso fermentativo. Aunque el experimento no permite determinar 
              mecanismos bioquímicos específicos, sí evidencia diferencias observables entre los tratamientos 
              evaluados.
            </p>
            <p>
              Los resultados obtenidos demuestran que la concentración de los compuestos utilizados puede 
              modificar la respuesta fermentativa de las levaduras, permitiendo comparar el comportamiento de 
              los distintos tratamientos bajo condiciones controladas.
            </p>
          </div>
        </div>

        {/* Bloque: Conclusiones */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
          <h3 className="text-lg font-semibold text-white mb-6">Conclusiones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Las levaduras permitieron observar de manera sencilla y experimental el proceso de fermentación mediante la formación de espuma y burbujas.',
              'Las concentraciones más altas de café y té verde presentaron una mayor producción de espuma en comparación con el grupo control y las concentraciones bajas.',
              'La fermentación constituye un modelo biológico adecuado para analizar la influencia de compuestos bioactivos presentes en bebidas de consumo cotidiano.',
              'El uso de levaduras permitió estudiar experimentalmente cambios observables en la actividad fermentativa bajo diferentes tratamientos y condiciones controladas.',
            ].map((conclusion, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-950/40 border border-white/5">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex-shrink-0 font-bold text-xs">
                  {index + 1}
                </div>
                <p className="text-zinc-300 text-sm leading-normal">{conclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;