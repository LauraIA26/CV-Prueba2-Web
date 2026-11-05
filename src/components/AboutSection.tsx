import { UserCheck, Shield, Target, Award, CheckCircle2, Car, Clock, MapPin, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-[#070a12] relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-widest uppercase">
            <span>Perfil Profesional & Valores</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Mí
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Una trayectoria asentada sobre el compromiso, la atención al detalle y la capacidad de responder con eficacia ante cualquier reto administrativo.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Bio & Values */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <UserCheck className="w-6 h-6 text-sky-400" />
                <span>Perfil y Filosofía de Trabajo</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Con una sólida formación técnica en <strong className="text-white">Gestión Administrativa</strong> y formación continuada en <strong className="text-white">Informática "Office"</strong>, mi experiencia abarca desde el control administrativo cotidiano hasta la gestión compleja de proveedores, facturación y atención directa a clientes.
                </p>
                <p>
                  A lo largo de más de 9 años al frente de tareas administrativas en <strong className="text-sky-300">Encuadernación Novo S.L.</strong> y mi reciente etapa en <strong className="text-sky-300">Tintas La Sagra</strong>, he demostrado una capacidad constante para mantener el orden documental, anticiparme a las necesidades del taller o de la tienda, y resolver incidencias con agilidad y amabilidad.
                </p>
                <p>
                  Me defino como una persona <strong className="text-white">responsable, organizada, constante y proactiva</strong>. Disfruto trabajando en equipo, aprendiendo nuevos programas informáticos de gestión y asegurando que cada factura, albarán o pedido esté correctamente registrado y tramitado sin errores.
                </p>
              </div>

              {/* Practical Logistics Bar */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-medium text-[10px]">PREFERENCIA</span>
                    <span className="font-semibold text-white">Media Jornada / Mañanas</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <Car className="w-4 h-4 text-violet-400 shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-medium text-[10px]">MOVILIDAD</span>
                    <span className="font-semibold text-white">Carnet B (2004)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-slate-400 font-medium text-[10px]">UBICACIÓN</span>
                    <span className="font-semibold text-white">Illescas / Parla / Madrid Sur</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#0f172a]/60 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rigurosidad Documental</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Control detallado de albaranes, IVA, vencimientos y facturas sin margen de error.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Negociación de Stock</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Gestión fluida con proveedores, materias primas y reposición de materiales.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Empatía y Atención</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Trato cercano y profesional tanto telefónico como en mostrador y copistería.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f172a]/60 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Iniciativa y Prospección</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Capacidad comercial para el seguimiento de clientes y apertura de nuevas vías.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Workplace Card with generated asset */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0d1424] border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-4">
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700/60 shadow-lg group">
                <img
                  src="/src/assets/images/laura_workspace_hero_1793783872775.jpg"
                  alt="Entorno de trabajo administrativo y gestión documental"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Entorno Operativo
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Organización Integral del Puesto
                  </h4>
                </div>
              </div>

              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-3">
                <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Compromiso Laboral
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Incorporación inmediata o adaptable según necesidades.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Facilidad para aprender nuevas plataformas informáticas y ERPs.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Gran ética laboral, puntualidad y actitud colaboradores.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
