import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {

  const VideoMovie={
        adult: false,
        backdrop_path: "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
        genre_ids: [28, 12, 14],
        id: 572802,
        original_language: "en",
        original_title: "Aquaman and the Lost Kingdom",
        overview:
          "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
        popularity: 2392.899,
        poster_path: "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        release_date: "2023-12-20",
        title: "Aquaman and the Lost Kingdom",
        video: false,
        vote_average: 6.992,
        vote_count: 1267,
      };
  

  const { original_title, overview,genre_ids } = VideoMovie;
  return (
    <div className="relative aspect-video">
      <VideoTitle original_title={original_title} overview={overview} genre_ids={genre_ids} />
      <VideoBackground/>
    </div>
  );
};

export default MainContainer;
