import React from "react";
import MovieList from "./MovieList";  
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const MoviesList = useSelector((store) => store.movies);
  if (!MovieList) return;
  const movies = MoviesList?.nowPlayingMovies;
  return (
    <div className="flex flex-col flex-shrink-0">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
