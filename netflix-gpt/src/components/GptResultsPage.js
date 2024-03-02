import React from "react";
import "react-circular-progressbar/dist/styles.css";
import SearchMovieCard from "./SearchMovieCard";

import { ShimmerContentBlock } from "react-shimmer-effects";
import { useSelector } from "react-redux";
import BrowseHeader from "./BrowseHeader";
import HomeNavigate from "./HomeNavigate";

const GptResultsPage = () => {
  const movies = useSelector((store) => store.gptSearch?.movies);
  return (
    <div className="bg-black min-h-screen flex flex-col gap-3">
     <BrowseHeader childComponent={<HomeNavigate inGPTSearch={true}/>} />
      <div className="relative">
        <h1 className="text-white md:text-2xl text-lg font-bold md:mx-8 md:mt-[10%] mx-2 mt-[20%]">
          Recommended
        </h1>
        {movies ? (
          <div className="flex flex-col">
            {movies.map((movie) => (
              <SearchMovieCard movie={movie} key={movie?.id} isAdd={true} />
            ))}
          </div>
        ) : (
          <div className="md:mx-2 my-[3%] w-[85%]">
            {[...Array(5)].map(() => (
              <ShimmerContentBlock
                title
                text
                cta
                thumbnailWidth={370}
                thumbnailHeight={470}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GptResultsPage;
