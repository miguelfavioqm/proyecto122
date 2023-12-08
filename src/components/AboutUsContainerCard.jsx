import React from "react";
import Navigation from "./Navigation";
import { GiArchiveResearch } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
import { IoTicketSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
const AboutUsContainerCard = () => {
  return (
    <section className="px-8 py-4 flex items-center justify-center gap-4">
      <div
        className="h-[80vh] w-full md:w-1/2 rounded-2xl p-1 justify-center flex flex-col"
        style={{
          backgroundImage: `url(https://c8.alamy.com/compes/hyj0dw/vista-vertical-de-una-canoa-en-la-selva-amazonica-en-brasil-hyj0dw.jpg)`,
          backgroundSize: `cover`,
        }}
      >
        <Navigation bg="bg-[#15D078]"></Navigation>
        <p className="bg-white/80 p-4 rounded-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptas
          porro esse laboriosam praesentium, aliquid dolorum maiores officia
          aspernatur debitis quo eum eveniet aut assumenda natus nihil? Rem,
          numquam neque.
        </p>
      </div>
      <div className="w-2/5 flex flex-col gap-2">
        <div className="bg-[#3CCA8F] p-3 rounded-xl flex justify-around items-center ">
          <span className="bg-white h-20 w-20 rounded-full p-2 flex items-center justify-center">
            <GiArchiveResearch className="text-5xl" />
          </span>

          <p className="bg-white/80 w-3/4 p-2 rounded-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga,
            provident aperiam similique at ratione perspiciatis expedita
          </p>
        </div>
        <div className="bg-[#3CCA8F] p-3 rounded-xl flex justify-around items-center ">
          <span className="bg-white h-20 w-20 rounded-full p-2 flex items-center justify-center">
            <FaWallet className="text-5xl" />
          </span>

          <p className="bg-white/80 w-3/4 p-2 rounded-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga,
            provident aperiam similique at ratione perspiciatis expedita
          </p>
        </div>
        <div className="bg-[#3CCA8F] p-3 rounded-xl flex justify-around items-center ">
          <span className="bg-white h-20 w-20 rounded-full p-2 flex items-center justify-center">
            <CgSandClock className="text-5xl" />
          </span>

          <p className="bg-white/80 w-3/4 p-2 rounded-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga,
            provident aperiam similique at ratione perspiciatis expedita
          </p>
        </div>
        <div className="bg-[#3CCA8F] p-3 rounded-xl flex justify-around items-center ">
          <span className="bg-white h-20 w-20 rounded-full p-2 flex items-center justify-center">
            <IoTicketSharp className="text-5xl" />
          </span>

          <p className="bg-white/80 w-3/4 p-2 rounded-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga,
            provident aperiam similique at ratione perspiciatis expedita
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContainerCard;
