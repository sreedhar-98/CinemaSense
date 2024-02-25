import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import GptResultsPage from "./GptResultsPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/gptSearch",
      element: <GptResultsPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/test",
      element: <ShimmerCard />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
