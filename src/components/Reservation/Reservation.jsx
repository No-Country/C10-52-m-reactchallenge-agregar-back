import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Reservation = () => {
    const {openReservation, setOpenReservation} = useContext(GlobalContext)
    const closeModalReservation = () => {
        setOpenReservation(!openReservation)
    }
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 w-w-modal-reservation h-h-modal-reservation m-auto z-50 rounded-xl">
      <div className="w-full flex justify-end  ">
        <p onClick={closeModalReservation} className="mr-5 mt-4 text-2xl text-black hover:text-gray-400 cursor-pointer">
          X
        </p>
      </div>
      <h6 className=" text-center">
      <span className="text-black text-2xl sm:text-3xl font-bold ml-4 mr-1">
          Bienvenido
        </span> <span className="text-blue-blue text-2xl sm:text-3xl font-bold ml-1 mr-2">
          Santiago
        </span>
        <span className="text-black text-2xl sm:text-3xl font-bold ml-1 mr-2">
          a
        </span>
        <span className="text-blue-sky text-2xl sm:text-3xl font-bold ml-2 mr-2">
          Citas
        </span>
        <span className="text-blue-blue text-2xl sm:text-3xl font-bold">
          Dental
        </span>
      </h6>
      <div className="mt-5 ">
        
      </div>
    </section>
  );
};

export default Reservation;
