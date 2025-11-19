"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Sobre', path: '#sobre' },
    { name: 'Tecnologias', path: '#tecnologias' },
    { name: 'Projetos', path: '#projetos' },
    { name: 'Contato', path: '#contato' },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Atualiza a seção ativa imediatamente
      setActiveSection(path.substring(1));
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Quando 50% da seção está visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observar todas as seções
    navItems.forEach((item) => {
      const section = document.querySelector(item.path);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Limpar observer ao desmontar
      navItems.forEach((item) => {
        const section = document.querySelector(item.path);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="bg-black text-gray-300 py-3 px-6 fixed w-full z-50 md:py-4 ">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center ">
        <ul className="flex space-x-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.path)}
                className={`hover:text-blue-500 transition-colors px-4 py-1 rounded-lg cursor-pointer ${
                  activeSection === item.path.substring(1) ? 'text-blue-500 font-medium ' : ''
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={toggleMenu}
          className="text-gray-300 focus:outline-none p-2 -mr-2"
          aria-label="Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none p-3 -mr-3"
            aria-label="Fechar menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[80%]">
          <ul className="space-y-2 text-center w-full max-w-xs">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`text-2xl hover:text-white transition-colors w-full py-4 px-6 rounded-lg   ${
                    activeSection === item.path.substring(1) ? 'text-blue-500 font-medium ' : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}