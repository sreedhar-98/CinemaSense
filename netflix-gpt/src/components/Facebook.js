import React from "react";

const Facebook = () => {
  return (
    <div className="h-screen flex flex-col">
    <div className="bg-[#f0f2f5] h-3/4">
    <div className="pt-48 flex justify-center items-center flex-wrap">
      <div className="w-1/4 mx-14 flex flex-col items-start justify-start">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="Logo"
          className="w-2/3"
        ></img>
        <p className="text-3xl pl-7">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col bg-white pt-4 px-12 pb-2 rounded-lg w-1/4 relative">
        <input className="px-4 h-12 focus:outline-blue-300 border border-1 border-gray-200 rounded-lg" type="text" placeholder="Email address or phone number"></input>
        <input className="px-4 h-12 my-2 focus:outline-blue-300 border border-1 border-gray-200 rounded-lg" type="password" placeholder="Password"></input>
        <button className="bg-blue-600 text-white my-2 py-3 rounded-md font-bold text-xl">Log in</button>
        <span className="text-[#1877f2] text-center my-4 cursor-pointer hover:underline">Forgotten password?</span>
        <hr></hr>
        <button className="bg-[#42b72a] hover:bg-[#36a420] text-white py-3 px-2 rounded-md font-bold text-lg w-1/2 mx-auto my-6">Create New Account</button>
        <span className="absolute -bottom-14"><span className="font-bold cursor-pointer hover:underline">Create a Page</span> for a celebrity, brand or business.</span>
      </div>
      
    </div>
    </div>
    </div>
  );
};

export default Facebook;
