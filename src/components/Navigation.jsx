import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const Navigation = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="bg-[#104D32]/50 text-white w-4/5 md:w-1/2 rounded-full p-6 h-12 flex items-center justify-center text-xs md:text-base">
        <ul className="flex w-full justify-evenly items-center font-medium">
          <li>
            <a className="flex items-center md:gap-2 justify-center" href="#">
              <CiCalendarDate className="text-2xl" />
              FECHA
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-10 w-[1px] bg-white"></div>
          </li>
          <li>
            <a className="flex items-center md:gap-2 justify-center" href="#">
              <CiWallet className="text-2xl" />
              PRECIO
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-10 w-[1px] bg-white"></div>
          </li>
          <li>
            <a className="flex items-center md:gap-2 justify-center" href="#">
              <CiSearch className="text-2xl" />
              BUSCAR
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
