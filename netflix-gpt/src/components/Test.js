import React from "react";
import { useGetMoviesQuery } from "../utils/moviesApi";

const Test = () => {
  const { data, isFetching } = useGetMoviesQuery({
    path: "now_playing",
    page: 1,
  });

  // console.log(data);

  return <div></div>;
};

export default Test;
