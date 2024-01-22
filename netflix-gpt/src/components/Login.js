import React from "react";
import Header from "./Header";
import SIgnInSignUp from "./SignInSignUp";

const Login = () => {
  return (
    <div className="relative bg-black h-screen w-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="bgimage"
        className="absolute w-full h-full object-cover md:block hidden opacity-80"
      ></img>
      <SIgnInSignUp />
    </div>
  );
};

export default Login;
