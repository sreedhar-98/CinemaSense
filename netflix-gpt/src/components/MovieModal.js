import React from "react";
import SearchMovieCard from "./SearchMovieCard";

const MovieModal = ({open,movie,setOpen}) => {
  if (!open) return null;
  return (
    <div className="bg-black/50 w-[100%] h-[80%] fixed flex items-center justify-center z-[500]" onClick={setOpen}>
        <div className="fixed top-[20%] bg-black w-[100%]">
        <SearchMovieCard isAdd={true} movie={movie} id={movie.id} />
        </div>
      
    </div>
  );
};

export default MovieModal;
