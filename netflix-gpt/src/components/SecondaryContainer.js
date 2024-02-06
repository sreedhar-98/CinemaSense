import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <MovieList/>
      <MovieList/>
    </div>
  );
};

export default SecondaryContainer;
