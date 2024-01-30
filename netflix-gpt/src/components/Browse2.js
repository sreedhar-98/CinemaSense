import React from "react";
import Header from "./Header";
import { netflixLogo, userIcons } from "../utils/urls";
//import UserIcon1 from "./UserIcon1";
import UserIcon from "./UserIcon";

const Browse = () => {
  return (
    <div className="flex justify-between items-center bg-black">
      <img
        src={netflixLogo}
        alt="NetflixLogo"
        className="w-32 pl-1 pt-3 my-2 mx-6"
      ></img>
      <div className="flex gap-4 ">
        <UserIcon/>
      </div>
    </div>
  );
};

export default Browse;
