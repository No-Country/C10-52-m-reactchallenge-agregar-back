import React, { useContext, useRef } from "react";
import { GlobalContext, Context } from "../Context/Context";
import exportLinks from "../../links/exportLinks";
import { Formik, Form, Field } from "formik";

const FormRegister = () => {
  const {openRegister, setOpenRegister} = useContext(GlobalContext);
  const { linkRegister } = exportLinks();
  const formRef = useRef()

  const closeModal = () => {
    setOpenRegister(!openRegister)
  }
  
  const onRegister = async (value) => {
    // console.log(value);
    const response = await linkRegister(value)
    console.log(response);
  }
  return (
    <Formik
      initialValues = { {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }}
      onSubmit = { onRegister }
    >
      
      <Form 
        ref = { formRef } className="flex flex-col items-center justify-center gap-4 bg-sky-800 sm:w-96 h-auto sm:h-5/6 m-auto rounded-2xl right-0 sm:top-0 bottom-0 left-0 fixed">
        <p onClick={closeModal} className=" text-white text-xl self-end sm:mt-0 mr-5 cursor-pointer hover:opacity-50 w-10 p-2 flex justify-center">X</p>
        <h5 className="text-2xl text-white">Regístrate</h5>
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Nombre"
          type="text"
          name= "firstName"
        />
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Apellido"
          type="text"
          name = "lastName"
        />
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Correo electrónico"
          type="email"
          name= "email"
        />
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Celular"
          type="text"
          name= "celular"
        />
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Contraseña"
          type="password"
          name= "password"
        />
        <Field
          className=" w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Repetir contraseña"
          type="password"
          name= "passwordRepeat"
        />
        <button className=" bg-sky-800 rounded-3xl p-2 my-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold"
        type="submit"
        >
          Registrarme
        </button>
      </Form>
    </Formik>
  );
};

export default FormRegister;
