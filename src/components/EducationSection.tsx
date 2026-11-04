import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, Building } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/cvData';

export default function EducationSection() {
  return (
    <section id="formacion" className="py-20 bg-[#070a12] relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-widest uppercase">
            <span>Titulaciones & Estudios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formación Académica
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formación reglada especializada en administración de empresas y capacitación intensiva en programas informáticos de oficina.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.type === 'fp'
                  ? 'bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#121c35] border-sky-500/40 glow-card'
                  : 'bg-[#0f172a]/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-3 rounded-xl border ${
                      item.type === 'fp'
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400'
                        : item.type === 'course'
                        ? 'bg-violet-500/10 border-violet-500/30 text-violet-400'
                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    }`}
                  >
                    {item.type === 'fp' ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : item.type === 'course' ? (
                      <Award className="w-6 h-6" />
                    ) : (
                      <BookOpen className="w-6 h-6" />
                    )}
                  </div>

                  <span className="text-xs font-semibold text-sky-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mt-1">
                    <Building className="w-3.5 h-3.5 text-violet-400" />
                    {item.institution}
                  </p>
                  {item.duration && (
                    <span className="inline-block mt-2 text-[11px] font-semibold text-violet-300 bg-violet-950/60 px-2.5 py-0.5 rounded border border-violet-800/60">
                      {item.duration}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Conocimientos Clave:
                  </span>
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
