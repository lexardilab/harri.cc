 "use client";
// components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú cuando se hace clic en cualquier lugar
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Solo agregamos el listener cuando el menú está abierto
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    // Limpieza del event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Detiene la propagación del clic en el botón para evitar que se cierre inmediatamente
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Evita que los clics dentro del menú cierren el menú
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className=" text-black p-4 relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          
          {/* Botón hamburguesa */}
          <div>
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-30 relative"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span 
                className={`block w-6 h-0.5 ${isOpen ? 'bg-black' : 'bg-black'} transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 ${isOpen ? 'bg-black' : 'bg-black'} transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 ${isOpen ? 'bg-black' : 'bg-black'} transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú a pantalla completa */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white z-10 flex items-center justify-center overflow-auto transition-all duration-300 ease-in-out"
          onClick={handleMenuClick}
        >
          <div className="container mx-auto flex flex-col items-center space-y-8 py-20">
            <Link 
              href="/" 
              className="text-3xl font-medium text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/journal" 
              className="text-3xl font-medium text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Journal
            </Link>
            <Link 
              href="/servicios" 
              className="text-3xl font-medium text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              href="/contacto" 
              className="text-3xl font-medium text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </>
  );
}