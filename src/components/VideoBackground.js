import React from "react";
import { YouTubeBaseURL } from "../utils/urls";

const VideoBackground = () => {
  const Trailer =   {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Now Playing",
    "key": "PoF4B_xPVlg",
    "site": "YouTube",
    "size": 1080,
    "type": "Teaser",
    "official": true,
    "published_at": "2023-12-22T17:25:13.000Z",
    "id": "658734232dffd85c8f44ddf0"
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
