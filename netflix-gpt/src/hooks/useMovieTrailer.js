import { useDispatch } from "react-redux";
import { API_options, BaseVideosURL } from "../utils/urls";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const geMovieVideos = async () => {
    try {
      const url = `${BaseVideosURL}${id}/videos`;
      const VideosData = await fetch(url, API_options);
      const VideosDataJSON = await VideosData.json();
      const TrailerList = VideosDataJSON.results.filter(
        (video) => video.type === "Trailer"
      );
      const Trailer = TrailerList.length
        ? TrailerList[0]
        : VideosDataJSON.results[0];
      dispatch(addTrailerVideo(Trailer));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    geMovieVideos();
  }, []);
};

export default useMovieTrailer;
