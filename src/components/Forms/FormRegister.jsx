import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormRegister = () => {
  const {openRegister, setOpenRegister} = useContext(GlobalContext);
  const { linkRegister } = exportLinks();
  const formRef = useRef()

  const closeModal = () => {
    setOpenRegister(!openRegister)
  }

  const validationForm = Yup.object({
    name: Yup.string().required(
    <p className=" text-red-500 font-bold text-sm">Ingresa tu nombre</p>
  ),
  lastName: Yup.string().required(
    <p className=" text-red-500 font-bold text-sm">Ingresa tu apellido</p>
  ),
  email: Yup.string()
      .email(
        <p className="text-red-500 font-bold text-sm">
          Formato de e-mail invalido
        </p>
      )
      .required(<p className="text-red-500 font-bold text-sm">Ingresa tu correo</p>),
  phoneNumber: Yup.string().required(
    <p className=" text-red-500 font-bold text-sm">Ingresa tu teléfono</p>
  ),password: Yup.string().required(
    <p className=" text-red-500 font-bold text-sm">Ingresa tu contraseña</p>
  ),
  password2: Yup.string().required(
    <p className=" text-red-500 font-bold text-sm">Reingresa tu contraseña</p>
  )
    
  });

  const sendEmail = (value) => {
    console.log(value);
  };
  return (

    <Formik
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        password2: ""
      }}
      onSubmit={sendEmail}
      validationSchema={validationForm}
    >
      <Form
        className="flex flex-col items-center justify-center w-11/12 bg-gradient-form sm:w-96 h-full sm:h-5/6 m-auto rounded-2xl right-0 sm:top-0 bottom-0 left-0 fixed"
      >

      <p onClick={closeModal} className=" text-white text-xl self-end sm:mt-0 mr-5 cursor-pointer hover:opacity-50">X</p>
      <h5 className="text-2xl text-white -mt-4">Regístrate</h5>
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-4"
          type="text"
          name="name"
          placeholder="Nombre"
        />
        <ErrorMessage name="name" />
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
          type="text"
          name="lastName"
          placeholder="Apellido"
        />
        <ErrorMessage name="lastName" />
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
          type="email"
          name="email"
          placeholder="Correo electrónico"
        />
        <ErrorMessage name="email" />
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
          type="number"
          name="phoneNumber"
          placeholder="Celular"
        />
        <ErrorMessage name="phoneNumber" />
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
          type="password"
          name="password"
          placeholder="Contraseña"
        />
        <ErrorMessage name="password" />
      <Field
          className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
          type="password"
          name="password2"
          placeholder="Reingresa tu Contraseña"
        />
        <ErrorMessage name="password2" />
      <input
          onClick={sendEmail}
          type="submit"
          className="bg-sky-600 sm:bg-transparent  rounded-3xl p-2 w-60 sm:w-72 text-white sm:hover:bg-sky-600 font-semibold cursor-pointer mt-1"
          value="Registrarme"
        />

      </Form>
    </Formik>
  );
};

export default FormRegister;
