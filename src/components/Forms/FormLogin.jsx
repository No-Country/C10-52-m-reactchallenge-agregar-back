import React from "react";

const openRegister = () => {

}

const FormLogin = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-5 bg-sky-800 sm:w-96 h-80 m-auto rounded-2xl absolute top-0 right-0 left-0 bottom-0 z-50">
      <h5 className="text-2xl text-white mb-3">Iniciar sesion</h5>
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Correo electronico"
        type="email"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Contrasena"
        type="password"
      />
      <button className=" bg-sky-800 rounded-3xl p-2 mt-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold">
        Iniciar sesion
      </button>
      <p className=" text-white">Si no estas registrado <span onClick={openRegister} className=" text-sky-300 underline cursor-pointer">Regístrate</span></p>
    </form>
  );
};

export default FormLogin;
