import React from "react";
import "react-circular-progressbar/dist/styles.css";
import SearchMovieCard from "./SearchMovieCard";

import { ShimmerContentBlock } from "react-shimmer-effects";
import BrowseHeader from "./BrowseHeader";
import HomeNavigate from "./HomeNavigate";
import { useGetAiMoviesQuery } from "../utils/list_api";
import { useLocation, useNavigate } from "react-router-dom";

const GptResultsPage = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const prompt=location['state']?.prompt;
  if(!prompt) navigate('/browse');
  const {data,isFetching,isError} = useGetAiMoviesQuery(prompt);
  if(isError) return (<div>Error....</div>);

  return (
    <div className="bg-black min-h-screen flex flex-col gap-3">
     <BrowseHeader childComponent={<HomeNavigate inGPTSearch={true}/>} />
      <div className="relative">
        <h1 className="text-white md:text-2xl text-lg font-bold md:mx-8 md:mt-[10%] mx-2 mt-[20%]">
          Recommended
        </h1>
        {!isFetching ? (
          <div className="flex flex-col">
            {data?.body?.data?.matches?.map((movie) => (
              <SearchMovieCard movie={movie} key={movie?.id} isAdd={true} id={movie?.id} />
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
