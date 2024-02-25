import React, { useEffect } from "react";
import { netflixLogo } from "../utils/urls";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { clearMovies } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      console.log("Called");
      if (user) {
        //Signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        
      } else {
        //Signed out
        navigate("/");
        dispatch(removeUser());
        dispatch(clearMovies());
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
        className="w-32 md:w-40  pl-1 pt-3  mb-3 mt-2"
      ></img>
    </div>
  );
};

export default Header;
