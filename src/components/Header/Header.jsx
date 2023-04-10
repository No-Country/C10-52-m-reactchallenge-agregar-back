import React from "react";
import '../../index.css'



function Header() {
  return (
    <> 
    <div className="bg-[url(./images/header_img/f1.jpg)] bg-no-repeat bg-center bg-cover mx-auto flex flex-col md:flex-row lg:justify-end py-4 px-5 bg-opacity-100" id="fondo"
        >
        <div className="flex flex-col items-start justify-center w-full sm:w-6/12 text-left sm:pl-20" id="header">
            <h1 className="text-5xl font-bold text-white pb-7">Para Sonrisas <br />Saludables</h1>
            <h2 className="text-xl text-white pb-7">Odontología General y Estética Integral</h2>
            <button
                className="bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg"
                    type="button">
                    Requiero una Cita
            </button>
            <h3 className="text-white pt-4">O llamar al  51-990-645-017</h3>
        </div>
        <div className="mx-auto mt-10 w-6/12 hidden sm:flex sm:flex-col sm:items-center" id="header">
            <form className="bg-white shadow-md rounded-3xl pt-6 pb-8 mb-4 w-6/12 px-5">
              <h2 className="text-3xl font-bold mb-4 text-black">Deja un mensaje</h2>
              <h5 className="text-gray-400 pb-3">Nos pondremos en contacto con usted para analizar sus necesidades dentales</h5>
                <div className="mb-4 flex relative justify-end ">
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        
                    />
                 <img src="./images/header_img/User.svg" className="absolute pr-2 pt-2" alt="" />
                </div>
                <div className="mb-4 flex relative justify-end ">
                    <input
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        id="email"
                        type="email"
                        placeholder="Correo"
                    />
                    <img src="./images/header_img/mail.svg" className="absolute pr-2 pt-2" alt="" />
                </div>
                <div className="mb-4 flex relative justify-end">
                <input
                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                    id="name"
                    type="number"
                    placeholder="Número de Celular"
                    />
                    <img src="./images/header_img/PhoneCall.svg" className="absolute pr-2 pt-2" alt="" />
                </div>
                <div className="mb-6 flex relative justify-end ">
                    <textarea
                        className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                        id="message"
                        placeholder="Deja tu Mensaje"
                        >
                    </textarea>
                    <img src="./images/header_img/edit.svg" className="absolute pr-2 pt-2" alt="" />
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
          <div className="container mx-auto flex flex-col md:flex-row justify-around py-4 px-5">
            <div className="mb-4 md:mb-0 flex flex-col items-center">
              <div className="mb-4 md:mb-0 flex flex-col items-center">
                <img src="./images/header_img/clock.svg" alt="" />
                <h4 className="font-bold text-lg mb-2">Horario de Atención</h4>
                <ul>
                  <li className="mt-2">Lun-Sab 09:00-15:00</li>
                </ul>
              </div>
            </div>
            <div className="mb-4 md:mb-0 flex flex-col items-center">
              <img src="./images/header_img/MapPinLineH.svg" className="" alt="" />
              <h4 className="font-bold text-lg mb-2">Ubicación</h4>
              <ul>
                <li className="mt-2">Calle Los Pinos 830 - Lima</li>
              </ul>
            </div>
              <div className="mb-4 md:mb-0 flex flex-col items-center">
                <img src="./images/header_img/PhoneCall.svg" alt="" />
                <h4 className="font-bold text-lg mb-2">Número Telefono</h4>
                <ul>
                  <li className="mt-2">+51 990 645 017</li>
                </ul>
            </div>
          </div>
        </section>
              </>
  );
}

export default Header;