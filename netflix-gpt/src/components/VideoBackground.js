import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YouTubeBaseURL } from "../utils/urls";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const Trailer = useSelector((store) => store.movies?.TrailerVideo);
  return (
    <div className="absolute w-full">
      <iframe
      className="w-full h-full aspect-video"
        src={YouTubeBaseURL+Trailer?.key+"?si=2lD2buq7Qxq7cpzc&autoplay=1&amp;start=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
