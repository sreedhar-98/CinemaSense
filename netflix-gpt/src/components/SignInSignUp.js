import React from "react";

const SIgnInSignUp = () => {
  return (
    <div className="absolute w-full md:p-12 md:bg-black md:opacity-95 md:rounded-md md:inset-0  md:w-[40%] md:mt-28 md:mb-44 md:mx-auto">
      <div className="flex flex-col w-full mt-24 md:my-auto">
        <div className="mb-4 ml-4">
          <span className="text-3xl font-bold text-white">Sign In</span>
        </div>
        {/* <div className="mb-4 px-6"> */}
        <input
          type="text"
          placeholder="Email or phone number"
          className="bg-[#333333] px-6 py-4 mt-4 mb-2 rounded-md w-11/12 mx-4"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="w-11/12 bg-[#333333] px-6 py-4 mx-4 mt-2 rounded-md"
        ></input>
        {/* </div> */}

        <button className="w-11/12 bg-red-700 text-center text-white text-xl px-6 py-3 mx-4 mt-10 mb-2 rounded-md">
          Sign In
        </button>
        <div className="flex place-items-center justify-between w-full">
          <div>
            <input type="checkbox" className="mr-1 ml-4"></input>
            <span className="text-sm text-[#b3b3b3]">Remember me</span>
          </div>
          <span className="text-sm text-[#b3b3b3] md:cursor-pointer md:hover:underline pt-1 mr-4">
            Need help?
          </span>
        </div>
        <div className="flex gap-1 mx-4 mt-6">
          <span className="text-gray-500">New to Netflix?</span>
          <span className="text-white font-medium md: cursor-pointer md:hover:underline">
            Sign up now
          </span>
        </div>
      </div>
    </div>
  );
};

export default SIgnInSignUp;
