import React from "react";
import CarouselC from "../Carousel/CarouselC";

const WhyChooseUs = () => {
  const ourSkills = [
    {
      image: "./images/whyChooseUs/heart.svg",
      title: "Atención profesional",
      info: "Profesionales altamente capacitados y calificados en resolver su problema dental.",
    },
    {
      image: "./images/whyChooseUs/dentist.svg",
      title: "Personal encantador",
      info: "Nuestra actitud hace que le dé gusto a usted y su familia contar con nuestros servicios",
    },
    {
      image: "./images/whyChooseUs/medicine.svg",
      title: "Medicina general",
      info: "En todo momento nuestras recetas las podrá encontrar en cualquier farmacia",
    },
    {
      image: "./images/whyChooseUs/calendar.svg",
      title: "Citas 24/7",
      info: "Separe su cita en el momento que usted tenga disponibilidad y gustosos le atenderemos",
    },
  ];
  return (
    <section className=" bg-gray-100 mt-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold pt-20 pb-8 text-center">¿Por que elegirnos?</h2>
      <p className="m-auto text-2xl w-10/12 text-center">
        Nosotros sabemos tus necesidades y nuestro objetivo es que salgas con
        una hermosa sonrisa
      </p>
      <CarouselC ourSkills={ourSkills} watchMobile={1} watchTablet={3} watchDesktop={4} wSkills={'w-full'} />

{/*       <div className="flex flex-col sm:flex sm:flex-row sm:justify-between w-10/12 m-auto my-14">
        <div className="flex flex-col items-center mb-14">
          <img className=" w-20" src="./images/whyChooseUs/heart.svg" alt="" />
          <h3 className="text-center font-bold py-3">Professional Care</h3>
          <p className="text-center w-60">
            PRofesionales altamente capacitados y calificados en resolver su
            problema dental.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-20" src="./images/whyChooseUs/heart.svg" alt="" />
          <h3 className="text-center font-bold py-3">Professional Care</h3>
          <p className="text-center w-60">
            PRofesionales altamente capacitados y calificados en resolver su
            problema dental.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-20" src="./images/whyChooseUs/heart.svg" alt="" />
          <h3 className="text-center font-bold py-3">Professional Care</h3>
          <p className="text-center w-60">
            PRofesionales altamente capacitados y calificados en resolver su
            problema dental.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-20" src="./images/whyChooseUs/heart.svg" alt="" />
          <h3 className="text-center font-bold py-3">Professional Care</h3>
          <p className="text-center w-60">
            PRofesionales altamente capacitados y calificados en resolver su
            problema dental.
          </p>
        </div>
      </div> */}

      <button className=" bg-sky-600 rounded-3xl p-2 w-60 sm:w-72 text-white hover:bg-sky-800 font-semibold mb-20">
        Separe su cita
      </button>
    </section>
  );
};

export default WhyChooseUs;
