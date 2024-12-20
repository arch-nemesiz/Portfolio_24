import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useProfileContext } from "@/app/contexts/context";
import data from "../../../public/components/data/index.json";

const NavBar = () => {
  const { shortName } = data;
  const { dispatch } = useProfileContext();

  const openNav = () => dispatch({ type: "OPEN_NAV" });

  return (
    <div className="w-full fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto px-[1rem] h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          {shortName}
          <span className="mx-1 text-yellow-300">here!</span>
        </h1>
        <a href="#home" className="nav-link">
          HOME
        </a>
        <a href="#about" className="nav-link">
          ABOUT
        </a>
        <a href="#services" className="nav-link">
          SERVICES
        </a>
        <a href="#projects" className="nav-link">
          PROJECT & REVIEW
        </a>
        <a href="#footer" className="nav-link">
          CONTACT
        </a>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
