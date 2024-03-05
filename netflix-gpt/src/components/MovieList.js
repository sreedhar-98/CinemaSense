import React, { useCallback, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGetMoviesQuery } from "../utils/moviesApi";

const MovieList = ({ title, path }) => {
  const [pageNo, setPageNo] = useState(1);

  const navRef = useRef();

  const observer = useRef();

  const { data, isFetching } = useGetMoviesQuery({
    page: pageNo,
    path: path,
  });

  const scrollRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNo < 4) {
          setPageNo((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, pageNo]
  );

  const slide = (direction) => {
    if (direction === "left") {
      if (navRef.current) {
        navRef.current.scrollLeft -= 500;
        return navRef.current.scrollLeft;
      } else return 0;
    } else {
      if (navRef.current) {
        navRef.current.scrollLeft += 500;
        return navRef.current.scrollLeft;
      } else return 0;
    }
  };

  return (
    <div className="relative w-11/12 h-[21rem] ml-4">
      <h1 className="mx-4 text-xl font-bold my-2 text-white">{title}</h1>
      <div className="flex gap-3 items-center h-full">
        {
          <div className="hover:scale-110 cursor-pointer">
            <MdChevronLeft
              size={50}
              color="white"
              onClick={() => slide("left")}
            />
          </div>
        }
        <div
          id="scrollable"
          className="h-full flex overflow-x-scroll p-2 scroll whitespace-nowrap scroll-smooth overscroll-auto [&::-webkit-scrollbar]:hidden"
          ref={navRef}
        >
          <div className="relative gap-2 flex flex-shrink-0">
            {/* {isFetching && <div className="w-32 h-36 bg-gray-600"></div>} */}
            {data?.results?.map((movie, index) => {
              if (data?.results.length === index + 1)
                return (
                  <MovieCard movie={movie} key={movie.id} ref={scrollRef} />
                );
              else return <MovieCard movie={movie} key={movie.id}/>;
            })}
          </div>
        </div>

        <div className="hover:scale-110 cursor-pointer">
          <MdChevronRight
            size={50}
            color="white"
            onClick={() => slide("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
