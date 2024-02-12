import React, { useEffect } from "react";
import { netflixLogo } from "../utils/urls";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        //Signed in
        navigate("/browse");
      } else {
        //Signed out
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-full">
      <img
        src={netflixLogo}
        alt="Logo"
        className="w-32 md:w-40 md:mt-3 pl-1 pt-3 mt-4 mb-3"
      ></img>
    </div>
  );
};

export default Header;
