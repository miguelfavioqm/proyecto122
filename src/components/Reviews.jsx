import React from "react";
import { CiUser } from "react-icons/ci";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
const Reviews = () => {
  return (
    <section>
      <h2 className="w-full text-center font-bold">RESEÑAS</h2>
      <div className="w-full flex p-4 flex-wrap">
        <div className="w-full md:w-1/5 flex flex-wrap items-center justify-center">
          <span className="w-full flex items-center justify-center">
            <CiUser className="text-6xl" />
          </span>
          <button className="w-1/2 flex items-center justify-center">
            <FaLongArrowAltLeft className="text-3xl" />
          </button>
          <button className="w-1/2 flex items-center justify-center">
            <FaLongArrowAltRight className="text-3xl" />
          </button>
        </div>
        <div className="md:w-3/4 bg-[#61CC9E]/30 p-4 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            placeat odio quaerat quisquam maxime! Voluptates sed repellat
            recusandae soluta accusamus aspernatur cum laudantium ullam dolorum
            eum, ipsam saepe, totam libero. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ipsa sequi, consectetur eveniet quo
            laboriosam velit suscipit magnam? Mollitia nostrum ex sequi eius!
            Voluptatibus, sapiente neque. Dolorum facilis repellat sit corporis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
