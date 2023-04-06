import React from "react";
// import img1 from "../../../public/images/f1.jpg"
import '../../index.css'

function ContactForm() {
  return (
    <> 
    <div className="bg-[url(./images/header/f1.jpg)] bg-no-repeat bg-center bg-cover mx-auto flex flex-col md:flex-row justify-center py-4 px-5 bg-black relative" id="fondo"
        
        >
        <div className="mx-auto w-1/2 text-left " id="header">
            <h1 className="text-5xl font-bold text-white">Para Sonrisas <br />Saludables</h1>
            <h2 className="text-xl text-white">Odontología General y Estética <br />Integral</h2>
            <button
                className="bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg"
                    type="button">
                    Requiero una Cita
            </button>
            <h3 className="text-white">O llamar al  51-990-645-017</h3>
        </div>
        <div className="mx-auto ml-auto mr-16 mt-10 w-11/12 md:w-1/2 lg:w-1/4 " id="header">
            <h2 className="text-xl font-bold mb-4">Deja un mensaje</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                        >
                        Nombre y Apellido
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Ingresa tu nombre completo"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email"
                        >
                        Correo
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                    />
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                    >
                    Celular
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="number"
                    placeholder="Ingresa tu número de celular"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                        >
                        Mensaje
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Escribe tu mensaje aquí"
                        >
                    </textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline text-xl "
                        type="button"
                        >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
              </div>
        <section className="">
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-4 px-5">
        <div className="mb-4 md:mb-0 ">
          <h4 className="font-bold text-lg mb-2">Horario de Atención</h4>
          <ul>
            <li className="mt-2">Lun-Sab 09:00-15:00</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-lg mb-2">Ubicación</h4>
          <ul>
            <li className="mt-2">123, Calle London</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Correo</h4>
          <ul>
            <li className="mt-2">info@sonrisas.com</li>
          </ul>
        </div>
                <div>
          <h4 className="font-bold text-lg mb-2">Número Telefono</h4>
          <ul>
            <li className="mt-2">123456789</li>
          </ul>
        </div>
      </div>
    </section>
              </>
  );
}

export default ContactForm;