import React, { useContext, useState } from 'react';
import { Link } from "react-scroll";
import { GlobalContext } from '../Context/Context';

const Navbar = () => {
  const {openFormLogin, setOpenFormLogin, openRegister, setOpenRegister} = useContext(GlobalContext)
  const [menuMobile, setMenuMobile] = useState(false)
  const openNavMobile = () => {
    setMenuMobile(!menuMobile)
  };

  const openLogin = () => {
    setOpenFormLogin(!openFormLogin)
  }
  const openReg = () => {
    setOpenRegister(!openRegister)
  }

  return (
    <header>
      <div className="mx-auto w-full flex h-auto items-center justify-end p-3 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex items-center ">
          <img src="./images/navBar_img/logoDentist.svg" alt="" />
          <span className='text-blue-sky text-2xl sm:text-3xl font-bold ml-4 mr-3'>Citas</span> <span className='text-blue-blue text-2xl sm:text-3xl font-bold'>Dental</span>
        </div>
        <div className=" w-full">
          <ul className=' justify-end items-center hidden sm:flex gap-10'>
            <li>Servicios</li>
            <li>Contacto</li>
            <button onClick={openLogin} className=" bg-blue-sky rounded-3xl text-xl w-32 h-12 sm:w-36 text-white hover:bg-sky-300 hover:text-white font-semibold shadow-slate-500 shadow-md">
              Login
            </button>
            <button onClick={openReg} className=" bg-blue-blue rounded-3xl text-xl w-32 h-12 sm:w-36 text-white hover:bg-sky-800 hover:text-white font-semibold shadow-slate-500 shadow-md">
            Registro
            </button>
          </ul>
          <div className="flex items-center justify-end gap-4">
            {
              <button
                onClick={openNavMobile}
                className="block rounded bg-blue-sky p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            }
          </div>
        </div>
      </div>

      <div className={`${menuMobile ? 'fixed bg-indigo-900 top-0 right-0 left-0 bottom-0' : 'hidden'}`}>
        <div className="flex justify-end">
          <p onClick={openNavMobile} className="text-white h-0 pr-5 pt-5 text-2xl">X</p>
        </div>
        <ul className="flex flex-col items-center justify-around h-full text-sm">
          <li>
            <Link
              onClick={openNavMobile}
              to="Services"
              smooth={true}
              className="text-gray-500 transition hover:text-white cursor-pointer font-bold text-4xl"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              onClick={openNavMobile}
              to="Proyects"
              smooth={true}
              className="text-gray-500 transition hover:text-white cursor-pointer font-bold text-4xl"
            >
              Registro
            </Link>
          </li>
          <li>
            <Link
              onClick={openNavMobile}
              to="Contact"
              smooth={true}
              className="text-gray-500 transition hover:text-white cursor-pointer font-bold text-4xl"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
