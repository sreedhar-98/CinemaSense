import { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UserIcon from "./UserIcon";

import SearchBar from "./SearchBar";



const Browse1 = () => {
  const [gptSearch, setGptSearch] = useState(false);
  return (
    <div className="bg-black min-h-screen">
      <div className="sticky z-[70] top-0 w-full">
        <Header />
        <div className="flex absolute md:right-16 right-1 justify-between md:mt-10 mt-6 items-center gap-3">
        <button className="bg-blue-500 border border-white px-6 rounded-lg py-2" onClick={()=>setGptSearch(prevState=>!prevState)}>{gptSearch? "Home" : "AI Search"}</button>
          <UserIcon />
          
        </div>
      </div>

      {gptSearch && <SearchBar/>}

      {!gptSearch && (
        <div className="flex flex-col">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
      
    </div>
  );
};

export default Browse1;
