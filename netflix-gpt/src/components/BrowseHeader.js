import React from "react";
import Header from "./Header";
import UserIcon from "./UserIcon";

const BrowseHeader = ({ childComponent }) => {
  return (
    <div className="sticky z-[70] top-0 w-full">
      <Header />
      <div className="flex absolute md:w-[55%] items-center md:right-4 md:my-5 justify-end md:gap-3 my-3 right-0 w-[70%] gap-0">
        {childComponent}
        <div className="md:mr-[8%] mr-[6%]">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
