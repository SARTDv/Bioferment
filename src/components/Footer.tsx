import { GraduationCap, FlaskConical, Atom, BookOpen, MessageSquare, Leaf } from 'lucide-react';

const Footer = () => {
  const authors = [
    { name: 'Laura Isabel Moncayo', role: 'Investigadora Principal' },
    { name: 'Juan Sebastián Muñoz', role: 'Co-investigador' },
    { name: 'Jose Manuel Jiménez', role: 'Co-investigador' },
    { name: 'Alejandro Muñoz', role: 'Programador' },
  ];

  const subjects = [
    { name: 'Biología', icon: FlaskConical, color: 'text-emerald-400' },
    { name: 'Química', icon: Atom, color: 'text-blue-400' },
    { name: 'Sistemas', icon: MessageSquare, color: 'text-purple-400' },
    { name: 'Lenguaje', icon: BookOpen, color: 'text-amber-400' },
  ];

  return (
    <footer className="relative py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Institution info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Colegio Champagnat</h4>
                <p className="text-zinc-500 text-sm">Grado Undécimo • 2026</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Investigación científica desarrollada como proyecto interdisciplinario en el área de
              ciencias naturales y matemáticas.
            </p>
          </div>

          {/* Authors */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-cyan-400" />
              Equipo de Investigación
            </h4>
            <ul className="space-y-3">
              {authors.map((author, index) => (
                <li key={index} className="group">
                  <p className="text-white text-sm font-medium">{author.name}</p>
                  <p className="text-zinc-500 text-xs">{author.role}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Áreas Involucradas
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map((subject, index) => {
                const Icon = subject.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <Icon className={`w-4 h-4 ${subject.color}`} />
                    <span className="text-zinc-300 text-sm">{subject.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              Proyecto de Investigación Científica • Junio 2026
            </p>
          </div>

          <p className="text-center text-zinc-600 text-xs mt-6">
            Influencia de Compuestos Estimulantes Naturales en el Estrés Oxidativo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
