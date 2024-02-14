import React, { useCallback,useState } from "react";
import useClickOutside from "../utils/Hooks/useClickOutside";

const Test = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const outsideClickHandler = useCallback(() => setIsExpanded(false), []);
  const refNode = useClickOutside(outsideClickHandler);

  return (
    <div className="relative md:w-[60%] flex md:gap-2 justify-end w-[90%] gap-0" ref={refNode}>
      <input
        className={`text-white bg-black border border-blue-500 rounded-lg md:px-6 py-2 transition-opacity duration-[1000ms] md:w-[70%] px-3 w-[80%] ${
          isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:mx-2 my-2 mx-0`}
        placeholder="AI Search"
      ></input>
      <button
        className="bg-blue-500 rounded-lg p-2  border-white border-2 md:mx-2 md:my-2 text-xs md:text-base ml-2 "
        onClick={() => setIsExpanded(true)}
      >
        {isExpanded ? "Search" : "GPT Search"}
      </button>
    </div>
  );
};

export default Test;
