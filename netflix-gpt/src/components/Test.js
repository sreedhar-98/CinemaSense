import React, { useCallback,useState } from "react";
import useClickOutside from "../utils/Hooks/useClickOutside";

const Test = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const outsideClickHandler = useCallback(() => setIsExpanded(false), []);
  const refNode = useClickOutside(outsideClickHandler);

  return (
    <div className="relative md:w-[60%] flex gap-2 justify-end w-1/2" ref={refNode}>
      <input
        className={`text-white bg-black border border-blue-500 rounded-lg px-6 py-2 transition-opacity duration-[1000ms] w-[70%] ${
          isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } mx-2 my-2`}
        placeholder="AI Search"
      ></input>
      <button
        className="bg-blue-500 rounded-lg p-2  border-white border-2 mx-2 my-2"
        onClick={() => setIsExpanded(true)}
      >
        {isExpanded ? "Search" : "AI Search"}
      </button>
    </div>
  );
};

export default Test;
