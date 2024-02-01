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
  console.log(VideoMovie);

  const { original_title, overview, id, genre_ids } = VideoMovie;
  return (
    <div className="relative aspect-video">
      <VideoTitle original_title={original_title} overview={overview} genre_ids={genre_ids} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
