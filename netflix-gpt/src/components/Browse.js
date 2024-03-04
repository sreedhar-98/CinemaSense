import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import PromptInput from "./PromptInput";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {
  return (
    <div className="bg-black min-h-screen">
     <BrowseHeader childComponent={<PromptInput/>} />
      <div className="flex flex-col">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
