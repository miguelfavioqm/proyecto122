import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="h-20 bg-[#CBDAB0]/20 flex items-center p-4 justify-between md:justify-normal">
      <span className="w-1/5 flex md:items-center md:justify-center">
        <img className="md:w-14 w-10" src={logo} alt="LOGO" />
      </span>
      <button
        onClick={() => {
          setMenu(!menu);
        }}
        className="text-5xl md:hidden"
      >
        <IoMenu />
      </button>
      {menu && (
        <div className="bg-[#CBDAB0]/20 w-full h-screen fixed top-0 right-0">
          <nav className="h-full">
            <ul className="font-medium text-lg flex flex-col justify-center items-center h-full gap-4">
              <li>
                <Link
                  to={`nosotros`}
                  onClick={() => setMenu(!menu)}
                  className="hover:underline"
                >
                  NOSOTROS
                </Link>
              </li>
              <li>
                <Link
                  to={`servicios`}
                  onClick={() => setMenu(!menu)}
                  className="hover:underline"
                >
                  SERVICIOS
                </Link>
              </li>
              <li>
                <Link
                  to={`tours`}
                  onClick={() => setMenu(!menu)}
                  className="hover:underline"
                >
                  TOURS
                </Link>
              </li>
              <li>
                <Link
                  to={`contacto`}
                  onClick={() => setMenu(!menu)}
                  className="hover:underline"
                >
                  CONTACTO
                </Link>
              </li>
              <li>
                <div className="flex gap-4">
                  <button className="border-[1px] border-black rounded-full px-4 py-1 hover:bg-[#104D32]/50 hover:text-white font-semibold">
                    ES/EN
                  </button>
                  <button className="border-[1px] border-black rounded-full px-4 py-1 hover:bg-[#104D32]/50 hover:text-white font-semibold">
                    LOGIN
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="md:flex w-4/5 justify-around hidden ">
        <nav>
          <ul className="flex items-center gap-4 font-medium text-lg">
            <li>
              <Link
                to={`nosotros`}
                onClick={() => setMenu(!menu)}
                className="hover:underline"
              >
                NOSOTROS
              </Link>
            </li>
            <div className="h-8 w-[1px] bg-black"></div>
            <li>
              <Link
                to={`servicios`}
                onClick={() => setMenu(!menu)}
                className="hover:underline"
              >
                SERVICIOS
              </Link>
            </li>
            <div className="h-8 w-[1px] bg-black"></div>
            <li>
              <Link
                to={`tours`}
                onClick={() => setMenu(!menu)}
                className="hover:underline"
              >
                TOURS
              </Link>
            </li>
            <div className="h-8 w-[1px] bg-black"></div>
            <li>
              <Link
                to={`contacto`}
                onClick={() => setMenu(!menu)}
                className="hover:underline"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <button className="border-[1px] border-black rounded-full px-4 py-1 hover:bg-[#104D32]/50 hover:text-white font-semibold">
            ES/EN
          </button>
          <button className="border-[1px] border-black rounded-full px-4 py-1 hover:bg-[#104D32]/50 hover:text-white font-semibold">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
