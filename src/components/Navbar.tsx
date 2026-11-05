import { useState, useEffect } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-500 to-violet-600 flex items-center justify-center text-white text-sm font-black shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              LJ
            </span>
            <span className="font-heading">
              Laura <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400 font-extrabold">Jiménez</span>
            </span>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href="#inicio"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Sobre Mí
            </a>
            <a
              href="#experiencia"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Experiencia
            </a>
            <a
              href="#competencias"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Competencias
            </a>
            <a
              href="#formacion"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Formación
            </a>
            <a
              href="#contacto"
              className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              Ver Curriculum
            </button>
            <a
              href="#contacto"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-sky-500/40 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg"
              title="Ver CV"
            >
              <FileText className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 bg-[#0d1424] border border-slate-800 rounded-2xl shadow-2xl space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3 font-medium text-sm text-slate-300">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#sobre-mi"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Sobre Mí
              </a>
              <a
                href="#experiencia"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Experiencia Laboral
              </a>
              <a
                href="#competencias"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Competencias y Habilidades
              </a>
              <a
                href="#formacion"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Formación Académica
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-sky-400 transition-colors"
              >
                Contacto
              </a>
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                Ver Curriculum Completo
              </button>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <Mail className="w-4 h-4" />
                Contactar Ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
