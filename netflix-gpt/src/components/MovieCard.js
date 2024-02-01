import React from "react";
import star from "../utils/Svg/star.svg";

const MovieCard = () => {
  const url =
    "https://image.tmdb.org/t/p/w780" + "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg";
  return (
    <div className="relative h-screen flex flex-col justify-center left-[50%]">
      <div className="absolute group bg-black flex flex-col gap-1 hover:scale-150 duration-200 rounded-md w-40 max-w-44">
        <img src={url} alt="Img" className="object-cover"></img>
        <div className="relative hidden group-hover:block bg-slate-800">
          <div className="flex flex-col  gap-1 mx-2 justify-between">
            <span className="text-xl text-white">
              Aquaman Part 2 (The Two Thrones)
            </span>
            <div className="flex gap-1 mr-2 flex-wrap mb-2">
              <img src={star} alt="starlogo" className="w-4 h-4"></img>
              <span className="text-xs  text-white">7.2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
