import React, { useCallback, useRef, useState } from "react";
import MovieList from "./MovieList";
import { useGetLikesDataQuery } from "../utils/list_api";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const user_data = useSelector((store) => store.user);
  const { data, isFetching, isError } = useGetLikesDataQuery(
    {
      uid: user_data.data?.uid,
    },
    { skip: user_data.data?.uid ? false : true }
  );
  const recommended=data?.movies;
  const [selectedIndex,setSelectedIndex]=useState(1);
  const [displayedMovies,setDisplayedMovies]=useState([]);
  const observer = useRef();
  const scrollRef = useCallback(
    (node) => {
      if (isFetching || isError) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && selectedIndex<recommended?.length) {
          setDisplayedMovies(prev=>[...prev,recommended[selectedIndex]]);
          setSelectedIndex(prev=>prev+1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching,isError,recommended,selectedIndex]
  );
 
  return (
    <div className="flex flex-col flex-shrink-0 md:-mt-40 z-[60] bg-black">
      <MovieList title={"Now Playing"} path={"now_playing"} recommend={false} />
      <MovieList title={"Popular"} path={"popular"} recommend={false} />
      <MovieList title={"Top Rated"} path={"top_rated"} recommend={false} />
      <MovieList title={"Upcoming"} path={"upcoming"} recommend={false} ref={scrollRef}/>
      {displayedMovies.map((movie)=>(
        <MovieList title={`Because you liked ${movie?.name}`} path={""} recommend={true} movieId={movie?.id} ref={scrollRef}/>
      ))}
    </div>
  );
};

export default SecondaryContainer;
