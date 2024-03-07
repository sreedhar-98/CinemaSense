import React, { forwardRef, memo, useCallback, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGetMoviesQuery } from "../utils/moviesApi";

const MovieList = memo(
  forwardRef(({ title, path, recommend, movieId }, ref) => {
    const [pageNo, setPageNo] = useState(1);

    const navRef = useRef();

    const observer = useRef();

    const { data, isFetching, isSuccess } = useGetMoviesQuery({
      page: pageNo,
      path: path,
      recommend: recommend,
      movie_id: movieId,
    });
    const scrollRef = useCallback(
      (node) => {
        if (isFetching) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && pageNo <= data?.total_pages) {
            setPageNo((prev) => prev + 1);
          }
        });

        if (node) observer.current.observe(node);
      },
      [isFetching, pageNo,data?.total_pages]
    );
    if (isSuccess) {
      if (data?.results.length < 5) return <div ref={ref}></div>;
    }
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
      <div className="relative w-11/12 h-[21rem] ml-4" ref={ref}>
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
              {data?.results?.map((movie, index) => {
                if (data?.results.length === index + 1)
                  return (
                    <MovieCard movie={movie} key={movie.id} ref={scrollRef} />
                  );
                else return <MovieCard movie={movie} key={movie.id} />;
              })}
              {isFetching &&
                Array.from({ length: 3 }).map((_, index) => (
                  <div className="animate-pulse flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg w-32 h-48"></div>
                ))}
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
  })
);

export default MovieList;
