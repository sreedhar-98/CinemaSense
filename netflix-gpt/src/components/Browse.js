import { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UserIcon from "./UserIcon";

import SearchBar from "./SearchBar";
import Test from "./Test";

const Browse1 = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="sticky z-[70] top-0 w-full">
        <Header />
        <div className="flex absolute md:w-[55%] items-center md:right-4 md:my-5 justify-end md:gap-3 my-3 right-0 w-[70%] gap-0">
          <Test/>
          <div className="md:mr-[8%] mr-[6%]">
          <UserIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse1;
