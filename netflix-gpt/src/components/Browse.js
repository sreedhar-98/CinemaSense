import { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UserIcon from "./UserIcon";

const Browse1 = () => {
  const [gptSearch,setGptSearch] = useState(false);
  return (
    <div className="bg-black min-h-screen">
      <>
      <div className="sticky z-[60] top-0">
        <Header />
        <div className="flex justify-end">
          <button className="absolute bg-blue-600 md:px-6 md:py-4 px-4 py-2 rounded-lg border border-white md:mr-48 mr-24 md:mt-6 mt-8 text-white" 
          onClick={()=>setGptSearch(prevState=> !prevState)}>GPT Search</button>
          <UserIcon />
        </div>
      </div>
      </>
      {!gptSearch && (<div className="flex flex-col">
        <MainContainer />
        <SecondaryContainer />
      </div>)}
    </div>
  );
};

export default Browse1;
