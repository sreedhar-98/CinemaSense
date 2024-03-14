import React from "react";
import Header from "./Header";
import SIgnInSignUp from "./SignInSignUp";
import { bgImage } from "../utils/urls";


const Login = () => {

  return (
    <div className="relative h-screen bg-black w-full">
      <Header />
      <img
        src={bgImage}
        alt="bgimage"
        className="w-full h-screen object-cover md:block hidden opacity-60"
      ></img>
      <SIgnInSignUp />
    </div>
  );
};

export default Login;
