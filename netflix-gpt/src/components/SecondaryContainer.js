import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  return (
    <div className="flex flex-col flex-shrink-0 md:-mt-40 z-[60] bg-black">
      <MovieList title={"Now Playing"} path={"now_playing"} />
      <MovieList title={"Popular"} path={"popular"} />
      <MovieList title={"Top Rated"} path={"top_rated"} />
      <MovieList title={"Upcoming"} path={"upcoming"} />
    </div>
  );
};

export default SecondaryContainer;
