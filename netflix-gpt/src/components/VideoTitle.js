import React from "react";

const VideoTitle = ({ original_title, overview, poster_path }) => {
  return (
    <div className="sm:flex flex-col absolute mt-[10%] hidden sm:mt-[20%] md:mt-[30%] ml-[10%] w-[50%] md:w-[90%] gap-1 md:gap-2 z-50">
      <div className="flex flex-col gap-1 md:gap-2 rounded-lg bg-gradient-to-r from-black  w-[40%] px-4 md:px-10 group duration-1000 hover:scale-125 hover:-translate-y-4">
        <h1 className="text-white md:text-xl lg:text-3xl font-bold uppercase pt-2">
          {original_title}
        </h1>
        <p className="text-white text-[10px] font-semibold pb-4 hidden group-hover:block">
          {overview}
        </p>
      </div>
      <div className="md:flex gap-2 md:gap-4 hidden">
        <button className="bg-black text-xs md:text-[16px] hover:text-black duration-300 hover:bg-white px-1 md:px-3 md:py-1 text-white font-semibold rounded-md">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            Play
          </div>
        </button>
        <button className="bg-black/50 text-xs md:text-[16px] hover:bg-black/70 px-1 md:px-3 md:py-1 text-white font-semibold rounded-md">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
