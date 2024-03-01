import React from "react";
import addIcon from "../utils/Svg/addIcon.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import { poster_Path } from "../utils/urls";

const SearchMovieCard = ({movie}) => {
  if(movie?.metadata){
    movie=movie.metadata;
  }
  return (
      <div className="relative md:mx-2 my-[3%] w-[85%] border border-blue-700 rounded-lg">
        <div className="md:flex md:flex-row flex-col gap-4 md:mx-3 mx-2 items-center justify-between" id="description">
          <img
            src={poster_Path+movie?.poster_path}
            alt="posterImage"
            className="md:w-[30%] md:h-72 w-40 h-45"
          ></img>

          <div className="flex flex-col gap-1 my-2 w-[70%]">
            <h1 className="text-white md:text-xl text-sm font-bold">
              {`${movie?.original_title} (${parseInt(movie?.release_date)})`}
            </h1>
            <div className="flex gap-1 text-white md:text-sm text-xs">
              <span className=""> {movie?.release_date} </span>
              <p>⚪ {movie?.genre_ids}</p>
            </div>
            <div className="flex gap-4 text-white mt-6 items-center">
              <div className="w-20 md:w-28 flex gap-2 items-center">
                <CircularProgressbar value={parseInt(movie?.vote_average)*10} text={`${parseInt(movie?.vote_average)*10}%`} />
                <span className="md:text-sm text-xs">User Score</span>
              </div>
              <div className="group/icon relative flex flex-col gap-2 items-center ml-4">
                <img src={addIcon} alt="message-box" className="md:w-7 md:h-7 h-4 w-4"></img>
                <div className="absolute bg-[#aaaaaa] rounded-sm -top-6 w-28 text-center hidden group-hover/icon:block">
                  <p className="text-black text-sm">Add to My List</p>
                </div>
              </div>
            </div>
            <div className="text-white text-lg mt-5 flex flex-col gap-2">
              <h1 className="font-bold">Overview</h1>
              <div className="w-[100%] ">
              <p className="md:text-base text-sm" >
                  {movie?.overview}
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SearchMovieCard;
