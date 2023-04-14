import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const FormLogin = () => {
const {setOpenFormLogin, setOpenRegister} = useContext(GlobalContext)

  const openFormReg = () => {
    setOpenFormLogin(false)
    setOpenRegister(true)
  }

  const closeModal = () => {
    setOpenFormLogin(false)
  }
  return (
    <form className="flex flex-col items-center justify-center gap-5 bg-sky-800 sm:w-96 w-11/12 h-96 m-auto rounded-2xl fixed top-0 right-0 left-0 bottom-0 z-50">
       <p onClick={closeModal} className=" text-white text-xl self-end mr-5 cursor-pointer hover:opacity-50 w-10  p-1 flex justify-center">X</p>
      <h5 className="text-2xl text-white mb-3">Iniciar sesión</h5>
      <input
        className=" w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Correo electrónico"
        type="email"
      />
      <input
        className=" w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md"
        placeholder="Contraseña"
        type="password"
      />
      <button className=" bg-sky-800 rounded-3xl p-2 mt-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold">
        Iniciar sesión
      </button>
      <p className=" text-white mb-5">Si no estas registrado <span onClick={openFormReg} className=" text-sky-300 underline cursor-pointer">Regístrate</span></p>
    </form>
  );
};

export default FormLogin;
