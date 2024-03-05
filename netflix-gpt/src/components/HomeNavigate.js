import React from "react";
import { useNavigate } from "react-router-dom";

const HomeNavigate = ({ inGPTSearch }) => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/browse");
  };
  return (
    <button
      className="md:px-6 md:py-3 px-2 py-1 text-white font-semibold rounded-lg text-xs sm:text-sm md:text-md lg:text-lg border border-white bg-blue-500 mr-4"
      onClick={homeHandler}
    >
      Home
    </button>
  );
};

export default HomeNavigate;
