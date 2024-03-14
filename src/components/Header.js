import React from "react";
import { netflixLogo } from "../utils/urls";


const Header = () => {
 

  return (
    <div className="absolute bg-gradient-to-b from-black w-full">
      <img
        src={netflixLogo}
        alt="Logo"
        className="w-32 md:w-40 pl-1 pt-3 mb-3 mt-2"
      ></img>
    </div>
  );
};

export default Header;
