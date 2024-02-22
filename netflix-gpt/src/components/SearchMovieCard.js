import React from "react";
import addIcon from "../utils/Svg/addIcon.svg";
import { CircularProgressbar } from "react-circular-progressbar";

const SearchMovieCard = () => {
  return (
    <div className="relative md:mx-8 md:mt-[10%] mx-2 mt-[20%]">
      <h1 className="text-white md:text-2xl text-lg font-bold">Recommended</h1>
      <div className="md:mx-2 my-[5%] w-[55%] border border-blue-700 rounded-lg">
        <div className="flex gap-4 md:mx-3 mx-2 items-center">
          <img
            src="https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
            alt="posterImage"
            className="md:w-32 md:h-48 w-20 h-36"
          ></img>

          <div className="flex flex-col gap-1 my-2">
            <h1 className="text-white text-xl font-bold">
              The Shawshank Redemption (1994)
            </h1>
            <div className="flex gap-1 text-white text-sm">
              <span className=""> 10/14/1994 </span>
              <p>⚪ Drama, Crime</p>
            </div>
            <div className="flex gap-2 text-white mt-6 items-center">
              <div className="w-28 flex gap-2 items-center">
                <CircularProgressbar value={87} text={"87%"} />
                <span className="text-sm">User Score</span>
              </div>
              <div className="group/icon relative flex flex-col gap-2 items-center ml-4">
                <img src={addIcon} alt="message-box" className="w-7 h-7"></img>
                <div className="absolute bg-[#aaaaaa] rounded-sm -top-6 w-28 text-center hidden group-hover/icon:block">
                  <p className="text-black text-sm">Add to My List</p>
                </div>
              </div>
            </div>
            <div className="text-white text-lg mt-5 ml-4">
              <h1 className="font-bold">Overview</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieCard;
