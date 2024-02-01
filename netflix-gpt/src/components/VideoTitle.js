import React from "react";
import Play from "../utils/Svg/Play.svg";
import MoreInfo from "../utils/Svg/MoreInfo.svg";
import Genres from "../utils/Genres.json";

const VideoTitle = ({ original_title, overview, genre_ids }) => {
  const genres_list = Genres.genres;
  const genres=genre_ids.map(id=>{
    let genre=genres_list.find(item=>item.id===id);
    return genre?.name; 
  }).join(',');
  return (
    <div className="sm:flex flex-col absolute mt-[10%] hidden sm:mt-[20%] md:mt-[30%] ml-[10%] w-[50%] md:w-[90%] gap-1 md:gap-2 z-50">
      <div className="flex flex-col gap-1 md:gap-2 rounded-lg bg-gradient-to-r from-black  w-[40%] px-4 md:px-10 group duration-1000 hover:scale-125 hover:-translate-y-4">
        <h1 className="text-white md:text-xl lg:text-3xl font-bold uppercase pt-2">
          {original_title}
        </h1>
        <p className="text-white text-[15px] font-semibold pb-4">
          {genres}
        </p>
        <p className="text-white text-[10px] font-semibold pb-4 hidden group-hover:block">
          {overview}
        </p>
      </div>
      <div className="md:flex gap-2 md:gap-4 hidden">
        <button className="bg-black text-xs md:text-[16px] hover:text-black duration-300 hover:bg-white px-1 md:px-3 md:py-1 text-white font-semibold rounded-md">
          <div className="flex gap-1 items-center">
            <img src={Play} alt="PlayIcon" className="w-6 h-6"></img>
            Play
          </div>
        </button>
        <button className="bg-black/50 text-xs md:text-[16px] hover:bg-black/70 px-1 md:px-3 md:py-1 text-white font-semibold rounded-md">
          <div className="flex gap-1 items-center">
            <img src={MoreInfo} alt="MoreInfoLogo" className="w-6 h-6"></img>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
