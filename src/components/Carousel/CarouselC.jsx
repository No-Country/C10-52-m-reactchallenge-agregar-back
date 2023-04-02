import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselC = ({ ourServices }) => {
  const servicesMapping = ourServices.map((service) => (
    <div key={service.nameService} className="flex flex-col items-center">
      <img className=" w-32" src={service.img} alt={service.nameService} />
      <p className=" text-xl font-medium">{service.nameService}</p>
    </div>
  ))

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 568, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel className=" m-auto w-10/12" responsive={responsive} infinite={true}>
      {servicesMapping}
    </Carousel>
  );
};

export default CarouselC;
