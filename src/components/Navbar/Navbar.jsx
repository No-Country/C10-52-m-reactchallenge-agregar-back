import React, { useState } from 'react';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón del menú hamburguesa */}
      <button
        type="button"
        className="block md:hidden text-blue-sky focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icono de hamburguesa */}
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path
            className={`${isOpen ? 'hidden' : 'block'}`}
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Icono de cierre */}
          <path
            className={`${isOpen ? 'block' : 'hidden'}`}
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {/* Contenido del menú hamburguesa */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="bg-blue-blue text-white mt-2">
          <li className="px-3 py-2 hover:bg-gray-700">Servicios</li>
          <li className="px-3 py-2 hover:bg-gray-700">Contacto</li>
          <li className="px-3 py-2 hover:bg-gray-700">Login</li>
          <li className="px-3 py-2 hover:bg-gray-700">Register</li>
        </ul>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-white text-2xl font-bold"><span className='text-blue-sky'>Citas</span> <span className='text-blue-blue'>Dental</span></a>
          </div>
          {/* Menú de navegación de escritorio */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li><a href="#" className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a></li>
              <li><a href="#" className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a></li>
              <li><a href="#" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-sky">Login</a></li>
              <li><a href="#" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-blue">Register</a></li>
            </ul>
          </div>
          {/* Menú hamburguesa para móviles */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;