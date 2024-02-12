import React from "react";
import { YouTubeBaseURL } from "../utils/urls";

const VideoBackground = () => {
  const Trailer = {
    iso_639_1: "en",
    iso_3166_1: "US",
    name: "Escape from Deserter World",
    key: "41NUykFTZpQ",
    site: "YouTube",
    size: 1080,
    type: "Behind the Scenes",
    official: true,
    published_at: "2024-01-27T15:00:05.000Z",
    id: "65b730280fb17f017b34308f",
  };
  return (
    <div className="absolute w-full">
      <iframe
        className="w-full h-full aspect-video"
        src={
          YouTubeBaseURL +
          Trailer?.key +
          "?si=2lD2buq7Qxq7cpzc&autoplay=1&amp&controls=0;start=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
