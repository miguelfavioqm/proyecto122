import React from "react";
import img from "../assets/madidiZ5.jpg";
const Carrousel = () => {
  return (
    <section className="md:h-[70vh] container p-0 -z-10">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="w-full md:h-[70vh]" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img} className="w-full md:h-[70vh]" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img} className="w-full md:h-[70vh]" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
