import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovies) return;
  const rand_ind = Math.floor(Math.random() * nowPlayingMovies.length);
  const VideoMovie = nowPlayingMovies[rand_ind];

  const { original_title, overview, id } = VideoMovie;
  return (
    <div className="relative aspect-video">
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
