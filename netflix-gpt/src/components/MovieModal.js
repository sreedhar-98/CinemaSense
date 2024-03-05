import SearchMovieCard from "./SearchMovieCard";

const MovieModal = ({ open, movie, setOpen }) => {
    if (!open) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full z-[500]" onClick={setOpen}> 
        {/* Background overlay (responsible for blur) */}
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-30 blur "></div>
  
        {/* Modal content container */}
        <div className="fixed top-[20%] bg-black w-full z-10 flex items-center justify-center" onClick={(e)=>e.preventDefault()}> 
          <SearchMovieCard isAdd={true} movie={movie} id={movie.id} />
        </div>
      </div>
    );
  };

  export default MovieModal;