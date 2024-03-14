import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const inpRef = useRef(null);

  useEffect(() => {
    //console.log("Inside UseEffect");
    const clickHandler = (event) => {
      if (!inpRef.current.contains(event.target)) handler();
    };
    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, [handler]);
  return inpRef;
};

export default useClickOutside;
