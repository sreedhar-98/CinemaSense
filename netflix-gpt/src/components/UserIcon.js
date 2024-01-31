import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { userIcons } from "../utils/urls";
import ChevronUp from "../utils/Svg/ChevronUp.svg";

const UserIcon = () => {
  const [chevron, setChevron] = useState(false);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div
      className="absolute md:mr-32 mr-8 ml-4 group duration-200 z-40 mt-10"
      onMouseEnter={() => setChevron(true)}
      onMouseLeave={() => setChevron(false)}
    >
      <div className="flex">
        <img src={userIcons} alt="userLogo"></img>
        {chevron ? (
          <img
            src={ChevronUp}
            alt="ChevronUp"
            className="transform rotate-180 transition-transform duration-300 ease-in-out hidden md:block"
          ></img>
        ) : (
          <img
            src={ChevronUp}
            alt="ChevronUp"
            className="transform rotate-0 transition-transform duration-300 ease-in-out hidden md:block"
          ></img>
        )}
      </div>
      <div className="absolute hidden group-hover:block -left-5">
        <p className="text-red-200 -mb-2 ml-5 border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffebee"
            viewBox="0 0 24 24"
            strokeWidth={0}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </p>
        <div className="w-16 md:w-32 sm:w-24 bg-red-100 rounded-xl">
          <ul className="flex flex-col items-center justify-between list-none text-xs sm:text-sm">
            <li className="md:p-2 p-1 text-red-500 font-bold border-b border-red-400 cursor-pointer hover:scale-105 hover:text-red-600">
              Account
            </li>
            <li className="md:p-2 p-1 text-red-500 font-bold border-b border-red-400 cursor-pointer hover:scale-105 hover:text-red-600">
              Settings
            </li>
            <li
              className="md:p-2 p-1 text-red-500 font-bold cursor-pointer hover:scale-105 hover:text-red-600"
              onClick={handleSignout}
            >
              Sign out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
