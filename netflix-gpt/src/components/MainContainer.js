import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!nowPlayingMovies) return;

  const VideoMovie=nowPlayingMovies[0];

  const {original_title,overview,poster_path} = VideoMovie;
  return (
    <div className='relative'>
         <VideoTitle original_title={original_title} overview={overview} poster_path={poster_path}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer