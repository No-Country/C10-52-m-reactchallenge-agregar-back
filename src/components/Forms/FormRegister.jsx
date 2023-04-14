import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const FormRegister = () => {
  const {openRegister, setOpenRegister} = useContext(GlobalContext)

  const closeModal = () => {
    setOpenRegister(!openRegister)
  }
  return (
    <form className="flex flex-col items-center justify-center gap-4 bg-sky-800 sm:w-96 h-auto sm:h-5/6 m-auto rounded-2xl right-0 sm:top-0 bottom-0 left-0 fixed">
      <p onClick={closeModal} className=" text-white text-xl self-end sm:mt-0 mr-5 cursor-pointer hover:opacity-50 w-10 p-2 flex justify-center">X</p>
      <h5 className="text-2xl text-white">Regístrate</h5>
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Nombre"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Apellido"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Correo electrónico"
        type="email"
      />
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Celular"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Contraseña"
        type="password"
      />
      <input
        className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Repetir contraseña"
        type="password"
      />
      <button className=" bg-sky-800 rounded-3xl p-2 my-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold">
        Registrarme
      </button>
    </form>
  );
};

export default FormRegister;
