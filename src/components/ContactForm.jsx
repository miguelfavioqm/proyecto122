import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/mail.json";
import Footer from "./Footer";
const ContactForm = () => {
  return (
    <section className="flex items-center justify-center flex-col md:flex-row">
      <div className="flex items-center justify-center">
        <Lottie
          className="w-10/12"
          animationData={groovyWalkAnimation}
          loop={true}
        />
      </div>
      <div>
        <form
          action=""
          className="flex flex-wrap gap-2 md:justify-end items-start justify-center"
        >
          <ul className="flex gap-3 flex-col">
            <li>
              <label htmlFor="nombre">NOMBRE</label>
            </li>
            <li>
              <label htmlFor="correo">CORREO</label>
            </li>
            <li>
              <label htmlFor="telefono">TELEFONO</label>
            </li>
            <li>
              <label htmlFor="mensaje">MENSAJE</label>
            </li>
          </ul>
          <ul className="flex gap-3 flex-col ">
            <li>
              <input id="nombre" type="text" className="md:w-96 w-full" />
            </li>
            <li>
              <input id="correo" type="email" className="md:w-96 w-full" />
            </li>
            <li>
              <input id="telefono" type="text" className="md:w-96 w-full" />
            </li>
            <li>
              <textarea
                id="mensaje"
                name=""
                className="md:w-96 w-full resize-none h-40"
              ></textarea>
            </li>
          </ul>
          <button
            type="submit"
            className="block w-1/3 bg-[#15D078] text-white rounded-md"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
