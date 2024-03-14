import { useEffect, useRef } from "react";
import SearchMovieCard from "./SearchMovieCard";

const MovieModal = ({ open, movie, setOpen }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);
  const modalRef = useRef(null);

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[500]">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 blur-3xl"></div>

      <div
        className="fixed top-[20%] bg-black w-full z-10 flex items-center justify-center"
        ref={modalRef}
      >
        <SearchMovieCard isAdd={true} movie={movie} id={movie.id} />
      </div>
    </div>
  );
};

export default MovieModal;
