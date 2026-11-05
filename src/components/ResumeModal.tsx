import { X, Printer, Download, Mail, Phone, MapPin, Car, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCES, EDUCATION_ITEMS, SKILL_CATEGORIES } from '../data/cvData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-[#0f172a] border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col my-auto">
        
        {/* Modal Toolbar (Fixed Header) */}
        <div className="sticky top-0 z-20 bg-[#0f172a]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-bold text-white tracking-wide">
              Curriculum Vitae - Laura Jiménez López
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-sky-300 hover:text-white bg-sky-950 border border-sky-800 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Resume Content */}
        <div id="printable-resume" className="p-6 sm:p-10 space-y-8 bg-[#0b0f19] text-slate-200">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Laura Jiménez López
              </h1>
              <p className="text-sky-400 text-base font-semibold mt-1">
                Auxiliar Administrativa & Especialista en Gestión Documental
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono text-slate-300 shrink-0">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Illescas (Toledo) / Parla</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-800 text-[11px] text-slate-400">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>Carnet B (2004) · Disponibilidad Mañana</span>
              </div>
            </div>
          </div>

          {/* Experiencia Laboral Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Experiencia Laboral
            </h2>

            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-base font-bold text-white">
                      {exp.role} — <span className="text-sky-300 font-semibold">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formación Académica Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              Formación Académica
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[11px] font-mono text-sky-400 font-semibold">{edu.year}</span>
                  <h3 className="text-sm font-bold text-white">{edu.title}</h3>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Competencias Clave */}
          <div className="space-y-4 pt-2">
            <h2 className="text-lg font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Competencias Principales
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                ✔ Facturación & Albaranes
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                ✔ Proveedores & Stock
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                ✔ Atención Presencial/Tfno
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
                ✔ Microsoft Office & ERP
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
