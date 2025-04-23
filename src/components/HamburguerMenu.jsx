 "use client";
// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menú desplegable (tanto para móvil como escritorio) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 absolute left-0 right-0 z-10 transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <Link href="/" className="text-gray-300 py-2" onClick={toggleMenu}>
            Inicio
          </Link>
          <Link
            href="/acerca"
            className="text-gray-300 py-2"
            onClick={toggleMenu}
          >
            Acerca de
          </Link>
          <Link
            href="/servicios"
            className="text-gray-300 py-2"
            onClick={toggleMenu}
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="text-gray-300 py-2"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
