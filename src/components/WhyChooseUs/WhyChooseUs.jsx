import React from 'react'

const WhyChooseUs = () => {
    const ourSkills = [
        {
            image: './images/whyChooseUs/heart.svg',
            title: 'Atención profesional',
            info: 'Profesionales altamente capacitados y calificados en resolver su problema dental.'
        },
        {
            image: './images/whyChooseUs/dentist.svg',
            title: 'Personal encantador',
            info: 'Nuestra actitud hace que le dé gusto a usted y su familia contar con nuestros servicios'
        },
        {
            image: './images/whyChooseUs/medicine.svg',
            title: 'Medicina general',
            info: 'En todo momento nuestras recetas las podrá encontrar en cualquier farmacia'
        },
        {
            image: './images/whyChooseUs/calendar.svg',
            title: 'Citas 24/7',
            info: 'Separe su cita en el momento que usted tenga disponibilidad y gustosos le atenderemos'
        }
    ]
  return (
    <section className=' bg-gray-100 mt-20'>
        <h2 className=" text-center text-5xl font-bold pt-20 pb-5">¿Por que elegirnos?</h2>
        <p className='m-auto text-2xl w-6/12'>Nosotros sabemos tus necesidades y nuestro objetivo es que salgas con una hermosa sonrisa</p>
        <div>
            
        </div>
    </section>
  )
}

export default WhyChooseUs