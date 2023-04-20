import React, { useEffect, useState } from "react";
import { HiUser } from 'react-icons/hi';

const MainUser = () => {
    const [openMainUser, setOpenMainUser] = useState(false)

    const openMain = () => {
        setOpenMainUser(!openMainUser)
    }

    const tokken = localStorage.getItem("tokenDentApp")
    const userSignUp = JSON.parse(localStorage.getItem("userDentApp"))
    
    const closeSesion = () => {
      localStorage.removeItem("tokenDentApp")
      localStorage.removeItem("userDentApp")
      setOpenMainUser(!openMainUser)
    }
    console.log(tokken);
    useEffect(() => {
      
    }, [openMainUser])

    
  return (

<>
    {
      tokken && 
      <div className="relative">
      <button
              onClick={openMain}
              type="button"
              className=" flex shrink-0 items-center rounded-lg transition"
            >
              <span className="sr-only">Menu</span>
              <HiUser className=" text-2xl text-green-600" />
      
              <p className="ml-2 hidden text-left text-xs sm:block">
                <strong className="block text-lg font-medium">{`${userSignUp.firstName} ${userSignUp.lastName}`}</strong>
      
              </p>
      
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              
            </button>
      
        <div
          className={`${openMainUser ? 'null' : 'hidden'} absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`}
          role="menu"
        >
      
          <div className="p-2">
           {/*  <form method="POST" action="#"> */}
              <button
                /* type="submit" */
                onClick={closeSesion}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                role="menuitem"
              >
                Cerrar sesión
              </button>
           {/*  </form> */}
          </div>
        </div>
      </div>
    }
</>
  );
};

export default MainUser;
