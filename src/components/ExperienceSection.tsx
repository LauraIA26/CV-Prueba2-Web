import { useState } from 'react';
import { Briefcase, Calendar, Building2, ChevronRight, CheckCircle, Tag, Filter } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/cvData';
import { WorkExperience } from '../types';

export default function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'admin' | 'customer_service' | 'commercial' | 'training'>('all');
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <section id="experiencia" className="py-20 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-widest uppercase">
            <span>Trayectoria y Responsabilidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiencia Laboral
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Más de una década desempañando funciones de gestión administrativa, control de facturación, proveedores, albaranes y atención directa al cliente.
          </p>
        </div>

        {/* Filter Buttons (Segmented Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="p-1.5 bg-[#0f172a] border border-slate-800 rounded-xl flex flex-wrap gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Todas ({WORK_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilter('admin')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'admin'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Gestión Administrativa
            </button>
            <button
              onClick={() => setFilter('customer_service')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'customer_service'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Atención al Cliente
            </button>
            <button
              onClick={() => setFilter('training')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'training'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Prácticas F.C.T.
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 lg:ml-32 space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-[#090d16] flex items-center justify-center transition-transform group-hover:scale-110 ${
                  exp.isHighlighted
                    ? 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/30'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Main Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  exp.isHighlighted
                    ? 'bg-gradient-to-br from-[#0f172a] via-[#0d1424] to-[#11192e] border-sky-500/40 glow-card'
                    : 'bg-[#0f172a]/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                      {exp.isHighlighted && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                          Puesto Destacado
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                      <Building2 className="w-4 h-4 text-violet-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-sky-300 hover:text-white bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/60 rounded-lg transition-all flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Detalles</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags (Clean Unboxed Metadata / Soft Badges) */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-slate-500" /> Competencias:
                  </span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal for Experience Detail View */}
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0f172a] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-sky-400">
                    {selectedExperience.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedExperience.role}
                  </h3>
                  <p className="text-sm font-medium text-violet-400 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-4 h-4" />
                    {selectedExperience.company}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Funciones y Responsabilidades Principales
                </h4>
                <ul className="space-y-3">
                  {selectedExperience.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  Cerrar Ventana
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
