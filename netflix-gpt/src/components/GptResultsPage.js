import React from "react";
import UserIcon from "./UserIcon";
import { netflixLogo } from "../utils/urls";

import "react-circular-progressbar/dist/styles.css";
import SearchMovieCard from "./SearchMovieCard";

const GptResultsPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-3">
      <div className="sticky z-[70] top-0 w-full">
        <div className="absolute bg-gradient-to-b from-black w-full">
          <img
            src={netflixLogo}
            alt="Logo"
            className="w-32 md:w-40  pl-1 pt-3  mb-3 mt-2"
          ></img>
        </div>
        <div className="flex absolute md:w-[55%] items-center md:right-4 md:my-5 justify-end md:gap-3 my-3 right-0 w-[70%] gap-0">
          <div className="md:mr-[8%] mr-[6%]">
            <UserIcon />
          </div>
        </div>
      </div>
      <SearchMovieCard />
    </div>
  );
};

export default GptResultsPage;
