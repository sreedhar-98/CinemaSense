import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const list_api = createApi({
  reducerPath: "list_api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_AWS_API_URL,
  }),
  endpoints: (build) => ({
    getMoviesData: build.query({
      query: (body) => ({
        method: "POST",
        url: "/get_movies",
        body: body,
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        return;
      },
    }),
    createUser:build.query({
      query:(body)=> ({
        method:"POST",
        url:"/create_user",
        body:body
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        return;
      },
    }),
    getAiMovies: build.query({
      query: (prompt) => ({
        method: "GET",
        url: `/get_aimovies?prompt=${prompt}`,
      }),
    }),
    getLikesData: build.query({
      query: (body) => ({
        method: "POST",
        url: "/get_likedmovies",
        body: body,
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        return;
      },
    }),
    addMovie: build.mutation({
      query: (body) => ({
        url: "/add_data",
        method: "POST",
        body: body,
      }),
      async onQueryStarted({ movie }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            list_api.util.updateQueryData(
              "getMoviesData",
              undefined,
              (draft) => {
                draft["movies"].push(movie);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addLike: build.mutation({
      query: (body) => ({
        url: "/add_like",
        method: "POST",
        body: body,
      }),
      async onQueryStarted({ movie }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            list_api.util.updateQueryData(
              "getLikesData",
              undefined,
              (draft) => {
                draft["movies"].push(movie);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    removeMovie: build.mutation({
      query: (body) => ({
        url: "/remove_movie",
        method: "PATCH",
        body: body,
      }),
      async onQueryStarted({ movie_id }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            list_api.util.updateQueryData(
              "getMoviesData",
              undefined,
              (draft) => {
                const filtered_movies = draft["movies"].filter(
                  (movie) => movie?.id !== movie_id
                );
                draft["movies"] = filtered_movies;
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetMoviesDataQuery,
  useGetAiMoviesQuery,
  useLazyGetMoviesDataQuery,
  useLazyCreateUserQuery,
  useAddMovieMutation,
  useRemoveMovieMutation,
  useAddLikeMutation,
  useLazyGetLikesDataQuery,
  useGetLikesDataQuery,
} = list_api;

export default list_api;
