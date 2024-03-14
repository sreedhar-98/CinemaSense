import React from "react";
import { netflixLogo } from "../utils/urls";


const Header = () => {
 

  return (
    <div className="flex md:flex-row items-center md:px-6 py-1 w-full absolute bg-gradient-to-b from-black justify-between z-50">
      <img
        src={netflixLogo}
        alt="Logo"
        className="w-32 md:w-40 pl-1 pt-3 mb-3 mt-2"
      ></img>
    </div>
  );
};

export default Header;
