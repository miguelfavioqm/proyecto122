import React from "react";

const Card = ({ title, url }) => {
  return (
    <div
      className="overflow-hidden flex items-center justify-around flex-col md:w-1/4 h-60 rounded-lg w-full"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h2 className="bg-[#61CC9E]/30 px-2 py-2 text-white">{title}</h2>
      <button className="bg-[#15D078] px-4 py-1 text-white font-bold rounded-xl">
        ADQUIRIR
      </button>
    </div>
  );
};

export default Card;
