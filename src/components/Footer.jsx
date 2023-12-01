import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#104D32] text-white flex justify-around items-center pb-4 flex-col md:flex-row">
      <div>
        <h4 className="text-xl text-center font-semibold my-4">NAVEGAR</h4>
        <ul className="flex flex-col items-center justify-center gap-2">
          <li>
            <a href="#">INICIO</a>
          </li>
          <li>
            <a href="#">LOCACIONES</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl text-center font-semibold my-4">REDES</h4>
        <ul className="flex flex-col items-center justify-center gap-2">
          <li>
            <a href="#">FACEBOOK</a>
          </li>
          <li>
            <a href="#">TIK TOK</a>
          </li>
          <li>
            <a href="#">INSTAGRAM</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl text-center font-semibold my-4">CONTACTO</h4>
        <div>
          <input type="text" className="p-2 rounded-s-md text-black" />
          <button className="bg-[#15D078] py-2 px-4 rounded-r-md">
            ENVIAR
          </button>
          <p className="text-center">correo@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
