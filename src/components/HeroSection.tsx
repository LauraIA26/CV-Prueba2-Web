import { ArrowRight, FileText, CheckCircle2, Car, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-sky-500/10 to-violet-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Gestión Administrativa · Facturación · Atención al Cliente</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Eficiencia, rigor y cercanía en la{' '}
              <span className="font-heading font-black capitalize tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 border-b-2 border-sky-400/40 pb-0.5">
                Gestión Administrativa
              </span>{' '}
              de tu empresa.
            </h1>

            {/* Professional Brief */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Hola, soy <strong className="text-white font-semibold">Laura Jiménez López</strong>. Especialista en administración de empresas con más de <strong className="text-sky-300 font-semibold">10 años de experiencia comprobada</strong> en control de facturación, emisión de albaranes, atención telefónica, negociación con proveedores e inventario de stock.
            </p>

            {/* Operational Badges (Unboxed Metadata style) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 text-sky-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Media jornada de mañana / adaptable</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Car className="w-4 h-4 text-violet-400" />
                <span>Carnet B (desde 2004)</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Illescas / Parla / Zona Madrid Sur</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contacto"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Contactar para Oportunidad</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Ver & Descargar Curriculum PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor with Portrait in Glass Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 rounded-3xl blur-lg opacity-40 animate-pulse-slow"></div>

            <div className="relative w-full max-w-md bg-[#0d1424] border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-4">
              
              {/* Image Container with referrerPolicy & Zero-Broken-Image fallback */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-700/60 shadow-inner group">
                <img
                  src="/src/assets/images/laura_jimenez_portrait_1793783872408.jpg"
                  alt="Retrato profesional de Laura Jiménez López"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Scrim with Name Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        Laura Jiménez López
                      </h3>
                      <p className="text-xs text-sky-300 font-medium">
                        Gestión Administrativa & Facturación
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 text-xs font-bold shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Strip Inside Card */}
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Titulada Grado Medio FP</span>
                </div>
                <span className="text-slate-500">·</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Informática Office (9 Meses)</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip Below Split Hero (Mandatory Layout Rule) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-[#0f172a]/80 border border-slate-800 p-5 rounded-2xl glow-card-hover transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 tabular-nums">
                +10 Años
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                Trayectoria Laboral Demostrable
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                9+ años continuados en Encuadernación Novo S.L.
              </p>
            </div>

            <div className="bg-[#0f172a]/80 border border-slate-800 p-5 rounded-2xl glow-card-hover transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 tabular-nums">
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                Control de Facturas y Stock
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Albaranes, pedidos, compras e inventario
              </p>
            </div>

            <div className="bg-[#0f172a]/80 border border-slate-800 p-5 rounded-2xl glow-card-hover transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 tabular-nums">
                Ofimática
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                Dominio Microsoft Office
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Excel, Word, ERPs y gestión documental
              </p>
            </div>

            <div className="bg-[#0f172a]/80 border border-slate-800 p-5 rounded-2xl glow-card-hover transition-all">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 tabular-nums">
                Cercanía
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                Atención y Fidelización
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Trato presencial, telefónico y proactivo
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
