import React from "react";
import CarouselC from "../Carousel/CarouselC";

const OurServices = () => {
  const ourServices = [
    {
      img: "./images/ourServices/Fillings.svg",
      nameService: "Fillings",
    },
    {
      img: "./images/ourServices/braces.svg",
      nameService: "braces",
    },
    {
      img: "./images/ourServices/dentures.svg",
      nameService: "Dentures",
    },
    {
      img: "./images/ourServices/dentalCrown.svg",
      nameService: "Dental crown",
    },
    {
      img: "./images/ourServices/rct.svg",
      nameService: "RCT",
    },
    {
      img: "./images/ourServices/dentalImplants.svg",
      nameService: "Implants",
    }
  ]

  return (
    <section>
      <h1 className=" text-center text-6xl font-bold mt-8">
        Nuestros servicios
      </h1>
      <p className="text-center text-xl">
        Conoce todas nuestras especialidades
      </p>
      <div className=" mt-20">
        <CarouselC ourServices={ourServices} />
      </div>
      <div className=" flex justify-center mt-14 sm:mt-28">
        <button className=" bg-sky-600 rounded-3xl p-2 w-60 sm:w-72 text-white hover:bg-sky-800 font-semibold">
          Agendar cita
        </button>
      </div>
    </section>
  );
};

export default OurServices;
