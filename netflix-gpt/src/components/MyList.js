import React from "react";
import SearchMovieCard from "./SearchMovieCard";
import { ShimmerContentBlock } from "react-shimmer-effects";
import BrowseHeader from "./BrowseHeader";
import HomeNavigate from "./HomeNavigate";
import { useGetMoviesDataQuery } from "../utils/list_api";
import { useSelector } from "react-redux";

const MyList = () => {
  const user_data = useSelector((store) => store.user);
  const {isFetching,isError,data}=useGetMoviesDataQuery(
    {
      uid: user_data.data?.uid,
    },
    { skip: user_data.data?.uid ? false : true }
  );
  
  return (
    <div className="bg-black min-h-screen flex flex-col gap-3">
      <BrowseHeader childComponent={<HomeNavigate inGPTSearch={false}/>}/>
      <div className="relative">
        <h1 className="text-white md:text-2xl text-lg font-bold md:mx-8 md:mt-[10%] mx-2 mt-[20%]">
          My List
        </h1>
      {isFetching?( <div className="md:mx-2 my-[3%] w-[85%]">
            {[...Array(2)].map(() => (
              <ShimmerContentBlock
                title
                text
                cta
                thumbnailWidth={370}
                thumbnailHeight={470}
              />
            ))}
          </div>) : (<div className="flex flex-col">
            {data?.movies.map((movie)=>(
              <SearchMovieCard movie={movie} key={movie.id} isAdd={false} id={movie.id}/>
            ))}
          </div>)}
      </div>
    </div>
  );
};

export default MyList;
