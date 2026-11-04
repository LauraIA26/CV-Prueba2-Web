import { useState } from 'react';
import { FileText, PackageCheck, Headphones, Monitor, CheckCircle, Sparkles, Shield, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/cvData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-sky-400" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-violet-400" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-400" />;
      case 'Monitor': return <Monitor className="w-6 h-6 text-blue-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="competencias" className="py-20 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-widest uppercase">
            <span>Habilidades Operativas & Conocimientos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competencias Clave
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Habilidades comprobadas en gestión documental, facturación, almacén, atención al cliente y herramientas de ofimática.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                activeCategory === idx
                  ? 'bg-gradient-to-br from-[#0f172a] via-[#0d1424] to-[#1a233d] border-sky-500/50 glow-card shadow-xl scale-[1.02]'
                  : 'bg-[#0f172a]/50 border-slate-800/80 hover:bg-[#0f172a]/90 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {getCategoryIcon(cat.iconName)}
                </div>
                {activeCategory === idx && (
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Skills Detail List */}
          <div className="lg:col-span-7 bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                {getCategoryIcon(SKILL_CATEGORIES[activeCategory].iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {SKILL_CATEGORIES[activeCategory].title}
                </h3>
                <p className="text-xs text-slate-400">
                  {SKILL_CATEGORIES[activeCategory].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-sky-400" />
                      {skill.name}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded ${
                      skill.level === 'Experto'
                        ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                        : 'bg-violet-500/10 text-violet-400 border border-violet-500/30'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  {skill.description && (
                    <p className="text-xs text-slate-400 pl-6">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Desk Photo & Highlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="relative bg-[#0d1424] border border-slate-800 rounded-2xl p-4 shadow-xl flex-1 flex flex-col">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700/60 shadow-lg group mb-4">
                <img
                  src="/src/assets/images/laura_admin_desk_1793783872951.jpg"
                  alt="Gestión de facturación y albaranes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider">
                    Formación Continuada
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Manejo Ágil de Programas Ofimáticos
                  </h4>
                </div>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800/80 space-y-2 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs font-semibold text-violet-400">
                  <Cpu className="w-4 h-4" />
                  <span>Adaptabilidad de Software</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Experiencia previa en programas de facturación, bases de datos y gestión de archivos. Capacidad comprobada para asimilar rápidamente cualquier ERP o software corporativo específico.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
