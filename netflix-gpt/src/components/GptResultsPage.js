import React from "react";
import UserIcon from "./UserIcon";
import { netflixLogo } from "../utils/urls";

import "react-circular-progressbar/dist/styles.css";
import SearchMovieCard from "./SearchMovieCard";
import { useDispatch, useSelector } from "react-redux";
import { ShimmerContentBlock } from "react-shimmer-effects";
import { useNavigate } from "react-router-dom";
import { clearMovies } from "../utils/gptSearchSlice";


const GptResultsPage = () => {

  const movies= useSelector((store)=>store.gptSearch?.movies);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const homeHandler=()=>{
    navigate('/browse');
    dispatch(clearMovies());
  }
  //console.log(movies);
  //if(!movies) return;
  
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
          <button className="md:px-6 md:py-3 px-2 py-1 text-white font-semibold rounded-lg text-xs sm:text-sm md:text-md lg:text-lg border border-white bg-blue-500 mr-4"
          onClick={homeHandler}>Home</button>
          <div className="md:mr-[8%] mr-[6%]">
            <UserIcon />
          </div>
        </div>
      </div>
      <div className="relative">
      <h1 className="text-white md:text-2xl text-lg font-bold md:mx-8 md:mt-[10%] mx-2 mt-[20%]">Recommended</h1>
      {movies?(<div className="flex flex-col">
        {movies.map((movie)=>(
          <SearchMovieCard movie={movie} key={movie?.id}/>
        ))}
      </div>) : ( <div className='md:mx-2 my-[3%] w-[85%]'>
      {[...Array(5)].map(()=> (
         <ShimmerContentBlock
         title
         text
         cta
         thumbnailWidth={370}
         thumbnailHeight={470}
       />
      ))}
     
    </div>)}
      
      </div>
      
      
    </div>
  );
};

export default GptResultsPage;
