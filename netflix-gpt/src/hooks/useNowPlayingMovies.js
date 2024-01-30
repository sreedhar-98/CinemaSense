import { useDispatch } from "react-redux";
import { API_options, nowPlayingURL } from "../utils/urls";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    try {
      const nowPlayingMovies = await fetch(nowPlayingURL, API_options);
      const nowPlayingMoviesjson = await nowPlayingMovies.json();
      dispatch(addNowPlayingMovies(nowPlayingMoviesjson.results));
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;