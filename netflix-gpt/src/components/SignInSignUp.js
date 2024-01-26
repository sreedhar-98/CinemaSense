import React, { useRef, useState } from "react";
import validate from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import errorLogo from "../utils/ErrorLogo.svg";

const SIgnInSignUp = () => {
  const [isSignin, setisSignin] = useState(true);
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [signupError, setSignupError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = validate(email.current.value, password.current.value);
    if (message === 1) setemailError("Invalid Email Id");
    else if (message === 2) setpasswordError("Please Enter a valid Password");
    else {
      setemailError("");
      setpasswordError("");
    }
    if (message === 3) {
      if (!isSignin) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSignupError(errorCode);
            console.log(errorMessage);
          });
      }
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute flex flex-col w-full mt-24 md:my-auto md:h-screen md:p-12 md:bg-black/60 md:rounded-md md:inset-0 md:w-2/4 md:mx-auto md:mt-8"
    >
      {/* <div className="absolute flex flex-col w-full mt-24 md:w-[414px] md:h-screen md:pt-[60px] md:pb-[40px] md:px-[68px] md:bg-black/60 md:rounded-md md:inset-0  md:mx-auto md:mt-8"> */}
      <div className="mb-4 ml-4">
        <span className="text-3xl font-bold text-white">
          {!isSignin ? "Sign up" : "Sign In"}
        </span>
      </div>
      {!isSignin && signupError !== null && (
        <div className="flex items-center justify-between w-10/12 px-4 py-4 mt-2 mb-4 bg-[#d89d31] mx-4">
          <img src={errorLogo} alt="LogoError" className="mr-4"></img>
          {signupError === "auth/email-already-in-use" && (
            <p className="text-lg">
              You are already registered. Sign in or reset your password
            </p>
          )}
        </div>
      )}
      {/* <div className="mb-4 px-6"> */}
      {!isSignin && (
        <input
          ref={name}
          type="text"
          placeholder="Name"
          className="bg-[#333] w-10/12 px-6 py-4 mt-4 mb-2 rounded-md mx-4 text-white"
        ></input>
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email or phone number"
        className="bg-[#333] w-10/12 px-6 py-4 mt-2 mb-2 rounded-md mx-4 text-white"
      ></input>
      {emailError.length !== 0 && (
        <span className="text-base text-orange-500 mx-4">{emailError}</span>
      )}
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-10/12 bg-[#333333] px-6 py-4 mx-4 mt-2 rounded-md text-white"
      ></input>
      {passwordError.length !== 0 && (
        <span className="text-base text-orange-500 my-1 mx-4">
          {passwordError}
        </span>
      )}
      {/* </div> */}

      <button
        onClick={handleButtonClick}
        className="w-10/12 bg-red-600 text-center text-white text-xl px-6 py-3 mx-4 mt-10 mb-2 rounded-md"
      >
        {!isSignin ? "Sign up" : "Sign In"}
      </button>
      {isSignin && (
        <div className="flex place-items-center justify-between w-10/12">
          <div>
            <input type="checkbox" className="mr-1 ml-4"></input>
            <span className="text-sm text-[#b3b3b3]">Remember me</span>
          </div>
          <span className="text-sm text-[#b3b3b3] md:cursor-pointer md:hover:underline pt-1">
            Need help?
          </span>
        </div>
      )}
      <div className="flex gap-1 mx-4 mt-6">
        <span className="text-gray-500">
          {isSignin ? "New to Netflix ?" : "Already Registered ?"}
        </span>
        <span
          className="text-white font-medium md: cursor-pointer md:hover:underline"
          onClick={() => (isSignin ? setisSignin(false) : setisSignin(true))}
        >
          {isSignin ? "Sign up" : "Sign In"}
        </span>
      </div>
    </form>
  );
};

export default SIgnInSignUp;
