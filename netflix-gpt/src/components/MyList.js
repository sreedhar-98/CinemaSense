import React from "react";
import { useGetMoviesDataQuery } from "../utils/list_api";
import SearchMovieCard from "./SearchMovieCard";
import { ShimmerContentBlock } from "react-shimmer-effects";
import BrowseHeader from "./BrowseHeader";
import HomeNavigate from "./HomeNavigate";

const MyList = () => {
  const { isError, isFetching, data } = useGetMoviesDataQuery({
    uid: "dw84WO7AuIfJLSZ87AH0p2gFk7u2",
  });
  return (
    <div className="bg-black min-h-screen flex flex-col gap-3">
      <BrowseHeader childComponent={<HomeNavigate inGPTSearch={false}/>}/>
      <div className="relative">
        <h1 className="text-white md:text-2xl text-lg font-bold md:mx-8 md:mt-[10%] mx-2 mt-[20%]">
          My List
        </h1>
        {data?.movies ? (
          <div className="flex flex-col">
            {data.movies.map((movie) => (
              <SearchMovieCard movie={movie} key={movie?.id} />
            ))}
          </div>
        ) : (
          <div className="md:mx-2 my-[3%] w-[85%]">
            {[...Array(2)].map(() => (
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

export default MyList;
