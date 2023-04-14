import React, { useContext, useRef } from "react";
import { GlobalContext, Context } from "../Context/Context";
import exportLinks from "../../links/exportLinks";
import { Formik, Form, Field, ErrorMessage } from "formik";


const FormLogin = () => {
    const {setOpenFormLogin, setOpenRegister} = useContext(GlobalContext);
  const { linkLogin } = exportLinks();
  const formRef = useRef()

  const openFormReg = () => {
    setOpenFormLogin(false)
    setOpenRegister(true)
  }
  
  const closeModal = () => {
    setOpenFormLogin(false)
  }
  
  const onLogin = async (value) => {
    const response = await linkLogin(value)
    
    console.log(response);
  }
  return (
    <Formik
      initialValues = { {
        email: "",
        password: ""
      }}
      onSubmit={ onLogin }
      >
      
      <Form 
        ref = { formRef } className="flex flex-col items-center justify-center gap-5 bg-sky-800 sm:w-96 w-11/12 h-96 m-auto rounded-2xl fixed top-0 right-0 left-0 bottom-0 z-50">
        <p onClick={closeModal} className=" text-white text-xl self-end mr-5 cursor-pointer hover:opacity-50 w-10  p-1 flex justify-center">X</p>
        <h5 className="text-2xl text-white mb-3">Iniciar sesión</h5>
        <Field
          className=" w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Correo electrónico"
          type="email"
          name= "email"
        />
        <Field
          className=" w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md"
          placeholder="Contraseña"
          type="password"
          name="password"
        />
        <button className=" bg-sky-800 rounded-3xl p-2 mt-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold"
        type="submit"
        >
          Iniciar sesión
        </button>
        <p className=" text-white mb-5">Si no estas registrado <span onClick={openFormReg} className=" text-sky-300 underline cursor-pointer">Regístrate</span></p>
      </Form>
    </Formik>
  );
};

export default FormLogin;
