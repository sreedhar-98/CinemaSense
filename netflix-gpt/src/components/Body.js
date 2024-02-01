import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Facebook from "./Facebook";

import Test from "./Test";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "fb",
      element: <Facebook />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
