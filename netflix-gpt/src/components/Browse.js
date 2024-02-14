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
        <div className="flex absolute w-[55%] items-center right-4 md:my-5 justify-end md:gap-3 my-3 ">
          <Test/>
          <div className="mr-[8%]">
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
