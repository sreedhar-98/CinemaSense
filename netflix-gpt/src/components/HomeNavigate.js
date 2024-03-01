import React from "react";
import { useNavigate } from "react-router-dom";
import { clearMovies } from "../utils/gptSearchSlice";
import { useDispatch } from "react-redux";

const HomeNavigate = ({ inGPTSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const homeHandler = () => {
    navigate("/browse");
    if (inGPTSearch) dispatch(clearMovies());
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
