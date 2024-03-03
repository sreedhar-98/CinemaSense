import React, { forwardRef, memo, useState } from "react";
import star from "../utils/Svg/star.svg";
import ChevronUp from "../utils/Svg/ChevronUp.svg";
import addIcon from "../utils/Svg/addIcon.svg";
import Genres from "../utils/Genres.json";
import { posterURL } from "../utils/urls";
import { useAddMovieMutation, useGetMoviesDataQuery } from "../utils/list_api";
import { useSelector } from "react-redux";

const MovieCard = memo(
  forwardRef(({ movie }, ref) => {
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
    const user_data = useSelector((store) => store.user.data);
    const uid = user_data?.uid;
    const genres_list = Genres.genres;
    const genres = genre_ids.map((id) => {
      let genre = genres_list.find((item) => item.id === id);
      return genre?.name;
    });
    const db_movie = {
      poster_path,
      genre_ids: genres.join(", "),
      id: movie.id.toString(),
      vote_average: movie.vote_average.toString(),
      overview,
      original_title,
      release_date,
      original_language,
      backdrop_path,
    };
    const url = posterURL + poster_path;
    const [addMovie, status_data] = useAddMovieMutation();
    const {isFetching,isError,data}=useGetMoviesDataQuery(
      {
        uid: user_data.data?.uid,
      },
      { skip: user_data.data?.uid ? false : true }
    );

    console.log(data);

    const addMovieHandler = () => {
      addMovie({ uid: uid, movie: db_movie });
    };

    return (
      <div className="w-32" ref={ref}>
        <div className="relative group/card bg-black flex flex-col gap-1 hover:scale-110 duration-200 rounded-md  hover:z-50 overflow-hidden flex-shrink-0">
          <img src={url} alt="Img" className="object-cover w-full"></img>

          <div
            className={`absolute w-full ${
              status_data?.isSuccess ? "bg-green-600" : "bg-red-600"
            } text-white text-base mt-3 ${
              status_data.isUninitialized || status_data?.isLoading
                ? "hidden"
                : "visible"
            }`}
          >
            <span className="px-1">
              {status_data?.isSuccess ? "Added to List" : "Error! Try Again"}
            </span>
          </div>
          <div className="relative hidden group-hover/card:block bg-slate-800 w-full">
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex gap-1 mx-2 my-2 flex-wrap mb-2">
                <img src={star} alt="starlogo" className="w-4 h-4"></img>
                <span className="text-xs  text-white">
                  {Math.round(vote_average * 10) / 10}
                </span>
              </div>
              <div className="group/icon relative flex flex-col gap-2 items-center border rounded-full border-[#808080] hover:border-white">
                <img
                  src={addIcon}
                  alt="message-box"
                  className="w-5 h-5"
                  onClick={addMovieHandler}
                ></img>
                <div className="absolute bg-[#aaaaaa] rounded-sm -top-6 w-28 text-center hidden group-hover/icon:block">
                  <p className="text-black text-sm">Add to My List</p>
                </div>
              </div>
              <div className="group/moreinfo relative flex flex-col gap-2 items-center ml-auto mr-2 border rounded-full border-[#808080] hover:border-white">
                <img
                  src={ChevronUp}
                  alt="ChevronUpIcon"
                  className="w-5 h-5 rotate-180"
                ></img>
                <div className="absolute bg-[#aaaaaa] rounded-sm -top-6 mr-8 text-center hidden group-hover/moreinfo:block">
                  <p className="text-black text-sm">More Info</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-white text-sm mx-2">
              {genres.map((genre) => {
                return <p key={genre}> {genre}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default MovieCard;
