import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-500 to-violet-600 flex items-center justify-center text-white text-xs font-black shadow-md">
              LJ
            </span>
            <div>
              <span className="text-sm font-bold text-white tracking-wide">
                Laura Jiménez López
              </span>
              <span className="block text-[11px] text-slate-500">
                Gestión Administrativa · Facturación · Atención al Cliente
              </span>
            </div>
          </div>

          {/* Quick Footer Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-300">
            <a href="#inicio" className="hover:text-sky-400 transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="hover:text-sky-400 transition-colors">
              Sobre Mí
            </a>
            <a href="#experiencia" className="hover:text-sky-400 transition-colors">
              Experiencia
            </a>
            <a href="#competencias" className="hover:text-sky-400 transition-colors">
              Competencias
            </a>
            <a href="#formacion" className="hover:text-sky-400 transition-colors">
              Formación
            </a>
            <a href="#contacto" className="hover:text-sky-400 transition-colors">
              Contacto
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 text-sky-400" />
            <span className="text-[11px] font-semibold">Arriba</span>
          </button>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Laura Jiménez López. Todos los derechos reservados. Portfolio Profesional.
          </p>
          <p className="flex items-center gap-1">
            Diseño profesional moderno para gestión administrativa
          </p>
        </div>

      </div>
    </footer>
  );
}
