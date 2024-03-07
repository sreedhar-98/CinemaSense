import React, { useState } from "react";
import addIcon from "../utils/Svg/addIcon.svg";
import removeIcon from "../utils/Svg/removeIcon.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import { poster_Path } from "../utils/urls";
import {
  useAddLikeMutation,
  useAddMovieMutation,
  useLazyGetLikesDataQuery,
  useLazyGetMoviesDataQuery,
  useRemoveMovieMutation,
} from "../utils/list_api";
import { useSelector } from "react-redux";
import checkIcon from "../utils/Svg/checkmark.svg";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const SearchMovieCard = ({ movie, isAdd, id }) => {
  if (movie?.metadata) {
    movie = movie.metadata;
  }

  const [removeMovie] = useRemoveMovieMutation();
  const [addMovie] = useAddMovieMutation();
  const [addLike] = useAddLikeMutation();
  const [trigger_getmovies, get_movies_data] = useLazyGetMoviesDataQuery();
  const [trigger_getlikes, get_likes_data] = useLazyGetLikesDataQuery();
  const [liked, setLiked] = useState(false);
  const user_data = useSelector((store) => store.user.data);
  const uid = user_data?.uid;
  const {
    poster_path,
    genre_ids,
    vote_average,
    overview,
    original_title,
    release_date,
    original_language,
    backdrop_path,
  } = movie;

  const db_movie = {
    poster_path,
    genre_ids,
    id: id.toString(),
    vote_average: vote_average.toString(),
    overview,
    original_title,
    release_date,
    original_language,
    backdrop_path,
  };
  const addHandler = async () => {
    if (!isAdd) removeMovie({ uid: uid, movie_id: movie?.id });
    else {
      const { data, isSuccess } = await trigger_getmovies({ uid: uid }, true);
      if (isSuccess) {
        const isExists = data?.movies.some((m) => m?.id === id.toString());
        if (!isExists) {
          addMovie({ uid: uid, movie: db_movie });
        }
      }
    }
  };
  const likeHandler = async () => {
    const { data, isSuccess } = await trigger_getlikes({ uid: uid }, true);
    if (isSuccess) {
      const isExists = data?.movies.some((m) => m?.id === id.toString());
      if (!isExists) {
        addLike({
          uid: uid,
          movie: { id: id.toString(), name: original_title },
        });
        setLiked(true);
      }
    }
    else{
      console.log("Error");
    }
  };
  return (
    <div className="relative md:mx-2 my-[3%] w-[85%] border border-blue-700 rounded-lg">
      <div
        className="md:flex md:flex-row flex-col gap-4 md:mx-3 mx-2 items-center justify-between"
        id="description"
      >
        <img
          src={poster_Path + movie?.poster_path}
          alt="posterImage"
          className="md:w-[30%] md:h-72 w-40 h-45"
        ></img>

        <div className="flex flex-col gap-1 my-2 w-[70%]">
          <h1 className="text-white md:text-xl text-sm font-bold">
            {`${movie?.original_title} (${parseInt(movie?.release_date)})`}
          </h1>
          <div className="flex gap-1 text-white md:text-sm text-xs">
            <span className=""> {movie?.release_date} </span>
            <p className="text-wrap">⚪ {movie?.genre_ids}</p>
          </div>
          <div className="flex gap-4 text-white mt-6 items-center">
            <div className="w-36 md:w-36 flex gap-2 items-center">
              <CircularProgressbar
                value={parseInt(movie?.vote_average) * 10}
                text={`${parseInt(movie?.vote_average) * 10}%`}
              />
              <span className="md:text-sm text-xs">User Score</span>
            </div>
            <div className="group/icon relative flex flex-col gap-2 items-center ml-4">
              <img
                src={
                  get_movies_data?.isSuccess
                    ? checkIcon
                    : isAdd
                    ? addIcon
                    : removeIcon
                }
                alt="message-box"
                className="md:w-7 md:h-7 h-4 w-4"
                onClick={addHandler}
              ></img>
              <div className="absolute bg-[#aaaaaa] rounded-sm -top-6 w-36 text-center hidden group-hover/icon:block">
                <p className="text-black text-sm">
                  {get_movies_data?.isSuccess
                    ? "Added to List"
                    : isAdd && !get_movies_data?.isSuccess
                    ? "Add to My List"
                    : "Remove from My List"}
                </p>
              </div>
            </div>
            <div
              className="cursor-pointer hover:scale-125 ml-9"
              onClick={likeHandler}
            >
              <BsFillHandThumbsUpFill
                size={30}
                color={liked ? "blue" : "white"}
              />
            </div>
          </div>
          <div className="text-white text-lg mt-5 flex flex-col gap-2">
            <h1 className="font-bold">Overview</h1>
            <div className="w-[100%] ">
              <p className="md:text-base text-sm text-wrap">
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieCard;
