import React, { useEffect } from "react";
import { netflixLogo } from "../utils/urls";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        //Signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //Signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute z-40 bg-gradient-to-b from-black w-full">
      <img
        src={netflixLogo}
        alt="Logo"
        className="w-32 md:w-40 md:mt-3 pl-1 pt-3 mt-4 mb-3"
      ></img>
    </div>
  );
};

export default Header;
