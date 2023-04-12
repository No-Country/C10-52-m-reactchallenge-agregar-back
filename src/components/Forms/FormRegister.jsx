import React from "react";

const FormRegister = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-5 bg-sky-800 w-96 h-auto m-auto rounded-2xl absolute top-0 right-0 left-0 bottom-0">
      <h5 className="text-2xl text-white">Regístrate</h5>
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Nombre"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Apellido"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Correo electronico"
        type="email"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Celular"
        type="text"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Contrasena"
        type="password"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
        placeholder="Repetir contrasena"
        type="password"
      />
      <button className=" bg-sky-800 rounded-3xl p-2 mt-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold">
        Registrarme
      </button>
    </form>
  );
};

export default FormRegister;
