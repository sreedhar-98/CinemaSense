import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GptResultsPage from "./GptResultsPage";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Protected from "./Protected";
import MyList from "./MyList";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/gptSearch",
      element: (
        <Protected>
          <GptResultsPage />
        </Protected>
      ),
    },
    {
      path: "/browse",
      element: (
        <Protected>
          <Browse />
        </Protected>
      ),
    },
    {
      path: "/test",
      element: (
        <Protected>
          <MyList />
        </Protected>
      ),
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log(user);
      if (user) {
        //Signed in
        const { uid, email, displayName, accessToken } = user;
        dispatch(
          addUser({
            isLoading: false,
            data: { uid, email, displayName, accessToken },
          })
        );
      } else {
        //Signed out
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
