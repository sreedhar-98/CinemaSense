import React from "react";
import MovieList from "./MovieList";
import { useGetLikesDataQuery } from "../utils/list_api";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const user_data = useSelector((store) => store.user);
  const { data, isFetching, isSuccess, isError } = useGetLikesDataQuery(
    {
      uid: user_data.data?.uid,
    },
    { skip: user_data.data?.uid ? false : true }
  );
  return (
    <div className="flex flex-col flex-shrink-0 md:-mt-40 z-[60] bg-black">
      <MovieList title={"Now Playing"} path={"now_playing"} recommend={false} />
      <MovieList title={"Popular"} path={"popular"} recommend={false} />
      <MovieList title={"Top Rated"} path={"top_rated"} recommend={false} />
      <MovieList title={"Upcoming"} path={"upcoming"} recommend={false} />
      {isSuccess && <MovieList title={`Because you liked ${data?.movies[5]?.name}`} path={""} recommend={true} movieId={data?.movies[5]?.id}/> }
    </div>
  );
};

export default SecondaryContainer;
