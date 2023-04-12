const GeneralOdoltology = () => {
    return (
      <div>
          <h5 className="text-center text-5xl font-bold pt-20 pb-5">Odontología General</h5>
          <div className=" w-full flex flex-col sm:flex-row mt-10 mb-20">
              <div className="w-full sm:w-6/12 flex justify-end items-start h-full">
                  <img className=" w-11/12 m-auto sm:w-9/12 rounded-3xl sm:mr-8" src="./images/generalOdol/consultorio.svg" alt="" />
              </div>
              <div className="w-full sm:w-6/12">
                  <p className=" text-2xl w-full sm:w-9/12 px-5">Brindamos la atención preventiva esencial para toda su familia y ofrecemos los servicios dentales avanzados necesarios para solucionar problemas dentales comunes. Nuestros servicios de odontología general incluyen:</p>
                  <div className="flex flex-col mt-8">
                      <div className=" flex items-center mb-5 px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Chequeos dentales y Limpieza</p>
                      </div>
                      <div className="flex items-center mb-5 px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Extracciones dentales</p>
                      </div>
                      <div className="flex items-center px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Mantenimiento Periódico</p>
                      </div>
                  </div>
              </div>
          </div>
          {/*  <form className="flex flex-col items-center justify-center gap-5 bg-sky-800 w-96 h-96 m-auto rounded-2xl absolute top-0 right-0 left-0 bottom-0">
          <h5 className="text-2xl text-white">Registrese</h5>
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
        </form> */}
      </div>
    )
  }
  
  export default GeneralOdoltology