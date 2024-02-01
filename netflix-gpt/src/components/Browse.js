import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import UserIcon from "./UserIcon";


const Browse1 = () => {
  useNowPlayingMovies();
  return (
    <div className="">
      <div className="sticky z-50 top-0">
        <Header />
        <div className="flex justify-end">
          <UserIcon />
        </div>
      </div>
     <MainContainer/>
    </div>
  );
};

export default Browse1;
