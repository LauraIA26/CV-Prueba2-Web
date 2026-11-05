import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Car, FileText, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export default function ContactSection({ onOpenResumeModal }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    schedulePreference: 'Mañana',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        schedulePreference: 'Mañana',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-20 bg-[#090d16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 via-sky-500/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-widest uppercase">
            <span>Oportunidades Laborales & Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contactar con Laura
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            ¿Buscas una auxiliar administrativa responsable, proactiva y con experiencia sólida? Ponte en contacto directamente para concertar una entrevista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Logistics Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-sky-400" />
                Vías Directas de Contacto
              </h3>

              {/* Contact Channels */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\./g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Teléfono Directo
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-sky-300 font-mono tracking-wide">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Oportunidad%20Laboral%20Administrativa%20-%20Laura%20Jiménez`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-violet-300 truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Launcher */}
                <a
                  href={`https://wa.me/34${PERSONAL_INFO.phone.replace(/\./g, '')}?text=Hola%20Laura,%20te%20contacto%20tras%20ver%20tu%20portfolio%20profesional`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Mensaje Inmediato
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300">
                      Enviar mensaje por WhatsApp
                    </span>
                  </div>
                </a>

              </div>

              {/* Logistics Overview Box */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Disponibilidad & Movilidad:
                </span>
                
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <span><strong>Jornada:</strong> Preferiblemente media jornada / mañana.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-violet-400 shrink-0" />
                    <span><strong>Movilidad:</strong> Carnet de conducir Tipo B (2004) y vehículo.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Zona:</strong> Illescas (Toledo), Parla, Madrid Sur.</span>
                  </div>
                </div>
              </div>

              {/* Download CV CTA button */}
              <button
                onClick={onOpenResumeModal}
                className="w-full py-3 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Abrir & Imprimir Curriculum PDF</span>
              </button>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/40 rounded-xl mb-6 text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong className="block font-bold">¡Mensaje Enviado con Éxito!</strong>
                  <span>Muchas gracias. Laura revisará la propuesta y se pondrá en contacto muy pronto.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Enviar una Propuesta u Oferta de Empleo
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tu Nombre o Responsable de Selección *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María García"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Empresa / Organización
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Encuadernaciones Madrid S.L."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Correo Electrónico de Contacto *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej. 600 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Horario / Tipo de Jornada Propuesto
                </label>
                <select
                  value={formData.schedulePreference}
                  onChange={(e) => setFormData({ ...formData, schedulePreference: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="Mañana">Media Jornada de Mañana (Preferente)</option>
                  <option value="Completa">Jornada Completa</option>
                  <option value="Tarde">Media Jornada de Tarde</option>
                  <option value="Eventual">Trabajos Eventuales / Sustituciones</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Detalles de la Oferta o Mensaje *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe brevemente el puesto de gestión administrativa o atención al cliente, ubicación y condiciones..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensaje a Laura</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
