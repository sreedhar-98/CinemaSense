import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Facebook from "./Facebook";

import Test from "./Test";
import Testing from "./Testing";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "fb",
      element: <Testing />,
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
