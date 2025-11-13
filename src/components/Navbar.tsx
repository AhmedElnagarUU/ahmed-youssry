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
    <nav className={`fixed top-4 left-4 right-4 z-50 bg-slate-900/80 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 ${scrolled ? 'rounded-2xl' : 'rounded-lg'} mx-auto max-w-7xl`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Ahmed Youssry</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-blue-500/20">
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors py-2"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-white text-slate-900 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
