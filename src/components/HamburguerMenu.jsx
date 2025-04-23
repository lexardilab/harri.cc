 // components/HamburgerMenu.js
 "use client"; // Necesario para componentes interactivos en Next.js 13+

 import { useState, useEffect } from 'react';
 import Link from 'next/link';
 
 const HamburgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
   
   // Cierra el menú si se hace clic fuera de él
   useEffect(() => {
     const handleClickOutside = (event) => {
       const menu = document.getElementById('mobile-menu');
       const hamburger = document.getElementById('hamburger-button');
       
       if (isOpen && menu && hamburger && 
           !menu.contains(event.target) && 
           !hamburger.contains(event.target)) {
         setIsOpen(false);
       }
     };
     
     document.addEventListener('mousedown', handleClickOutside);
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [isOpen]);
   
   // Evita scroll cuando el menú está abierto
   useEffect(() => {
     if (isOpen) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = 'unset';
     }
     
     return () => {
       document.body.style.overflow = 'unset';
     };
   }, [isOpen]);
   
   // Maneja la apertura/cierre del menú
   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };
   
   // Cierra el menú después de hacer clic en un enlace
   const handleLinkClick = () => {
     setIsOpen(false);
   };
   
   return (
     <>
       {/* Botón de hamburguesa */}
       <button 
         id="hamburger-button"
         className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
         onClick={toggleMenu}
         aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
         aria-expanded={isOpen}
       >
         <span 
           className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
             isOpen ? 'transform rotate-45 translate-y-1.5' : ''
           }`}
         />
         <span 
           className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
             isOpen ? 'opacity-0' : ''
           }`}
         />
         <span 
           className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
             isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
           }`}
         />
       </button>
       
       {/* Fondo oscuro al abrir el menú */}
       {isOpen && (
         <div 
           className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
           onClick={() => setIsOpen(false)}
         />
       )}
       
       {/* Menú móvil */}
       <div 
         id="mobile-menu"
         className={`fixed top-0 right-0 h-full w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
           isOpen ? 'translate-x-0' : 'translate-x-full'
         } lg:hidden`}
       >
         <div className="flex justify-end p-4">
           <button 
             onClick={() => setIsOpen(false)}
             className="text-gray-600 hover:text-gray-900"
             aria-label="Cerrar menú"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
         </div>
         
         <nav className="mt-8">
           <ul className="space-y-4">
             <li>
               <Link 
                 href="/" 
                 className="block px-6 py-2 hover:bg-gray-100 transition-colors"
                 onClick={handleLinkClick}
               >
                 Inicio
               </Link>
             </li>
             <li>
               <Link 
                 href="/servicios" 
                 className="block px-6 py-2 hover:bg-gray-100 transition-colors"
                 onClick={handleLinkClick}
               >
                 Servicios
               </Link>
             </li>
             <li>
               <Link 
                 href="/acerca" 
                 className="block px-6 py-2 hover:bg-gray-100 transition-colors"
                 onClick={handleLinkClick}
               >
                 Acerca de
               </Link>
             </li>
             <li>
               <Link 
                 href="/contacto" 
                 className="block px-6 py-2 hover:bg-gray-100 transition-colors"
                 onClick={handleLinkClick}
               >
                 Contacto
               </Link>
             </li>
           </ul>
         </nav>
       </div>
       
       {/* Menú de escritorio (visible solo en pantallas grandes) */}
       <nav className="hidden lg:block">
         <ul className="flex space-x-8">
           <li>
             <Link href="/" className="text-gray-700 hover:text-gray-900">
               Inicio
             </Link>
           </li>
           <li>
             <Link href="/servicios" className="text-gray-700 hover:text-gray-900">
               Servicios
             </Link>
           </li>
           <li>
             <Link href="/acerca" className="text-gray-700 hover:text-gray-900">
               Acerca de
             </Link>
           </li>
           <li>
             <Link href="/contacto" className="text-gray-700 hover:text-gray-900">
               Contacto
             </Link>
           </li>
         </ul>
       </nav>
     </>
   );
 };
 
 export default HamburgerMenu;
 
 