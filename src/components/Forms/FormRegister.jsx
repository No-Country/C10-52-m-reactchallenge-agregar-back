import React from "react";

const FormRegister = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-4 bg-sky-800 w-96 h-5/6 m-auto rounded-2xl right-0 top-0 bottom-0 left-0 fixed">
      <p className=" text-white text-xl flex self-end mr-5 cursor-pointer">X</p>
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
        placeholder="Contraseña"
        type="password"
      />
      <input
        className=" w-8/12 rounded-lg p-1"
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
