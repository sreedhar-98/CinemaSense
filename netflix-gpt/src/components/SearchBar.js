import React, { useRef, useState } from "react";

const SearchBar = () => {
  const prompt = useRef();
  return (
    <div className="px-4 md:px-14 h-screen bg-black bg-opacity-40">
      <form
        className="pt-[30%] sm:pt-[20%] md:pt-[10%] px-2 md:px-10 flex gap-2 items-center w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={prompt}
          className="md:px-6 md:py-3 px-2 py-1 rounded-md flex-grow text-xs sm:text-sm md:text-lg"
          type="text"
          placeholder="What movie would you like to watch today?"
        />
        <button
          className="bg-red-500 md:px-6 md:py-3 px-2 py-1 text-white font-semibold rounded-lg text-xs sm:text-sm md:text-md lg:text-lg"
        >
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:w-6 md:h-6 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Search
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
