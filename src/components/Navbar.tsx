'use client';

import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 bg-slate-900/30 backdrop-blur-md border border-red-500/30 transition-all duration-300 ${scrolled ? 'rounded-2xl bg-slate-900/50' : 'rounded-lg'} mx-auto max-w-7xl shadow-[0_0_20px_rgba(239,68,68,0.1)]`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Ahmed Youssry</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-red-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-slate-300 hover:text-red-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-red-400 transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-red-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-red-500/30">
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-slate-300 hover:text-red-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="block w-full text-left text-slate-300 hover:text-red-400 transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-slate-300 hover:text-red-400 transition-colors py-2"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-red-500 text-white px-4 py-2 rounded-lg transition-colors font-medium hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
