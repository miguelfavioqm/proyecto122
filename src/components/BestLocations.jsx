import React from "react";
import img from "../assets/imgbarco.jpg";
import img2 from "../assets/barcoatardecer.jpg";
const BestLocations = () => {
  return (
    <section className="container p-0 flex flex-col gap-2">
      <div className="flex p-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        <h3 className="w-1/4 text-center text-xl">
          MEJOR LOCACION <br /> LAGO TITICACA
        </h3>
        <p className="w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          perferendis distinctio ullam dolorum reprehenderit quod, eius
          voluptate, ducimus totam magni perspiciatis fugiat ipsa consectetur
          animi iure? Nobis, molestias? Porro, maiores?
        </p>
      </div>
      <div className="flex p-4 w-full flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        <img src={img} alt="" className="w-3/4 max-h-80" />
        <p className="md:w-1/4 p-2 text-justify flex items-center justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          perferendis distinctio ullam dolorum reprehenderit quod, eius
          voluptate, ducimus totam magni perspiciatis fugiat ipsa consectetur
          animi iure? Nobis, molestias? Porro, maiores?
        </p>
      </div>
      <div className="flex p-4 w-full flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-0">
        <p className="md:w-1/4 p-2 flex items-center text-justify justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          perferendis distinctio ullam dolorum reprehenderit quod, eius
          voluptate, ducimus totam magni perspiciatis fugiat ipsa consectetur
          animi iure? Nobis, molestias? Porro, maiores?
        </p>
        <img src={img2} alt="" className="w-3/4 max-h-80" />
      </div>
    </section>
  );
};

export default BestLocations;
