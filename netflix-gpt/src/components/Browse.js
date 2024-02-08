import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UserIcon from "./UserIcon";

const Browse1 = () => {
  useNowPlayingMovies();
  return (
    <div className="bg-black">
      <div className="sticky z-[60] top-0">
        <Header />
        <div className="flex justify-end">
          <UserIcon />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse1;
