import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LIST_BASE_URL } from "./urls";

const list_api = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({
    baseUrl: LIST_BASE_URL,
  }),
  tagTypes: ["MOVIES"],
  endpoints: (build) => ({
    getMoviesData: build.query({
      query: (body) => ({
        method: "POST",
        url: "/get_movies",
        body: body,
      }),
      providesTags: ["MOVIES"],
    }),
    addMovie: build.mutation({
      query: (body) => ({
        url: "/add_data",
        method: "POST",
        body: body,
      }),
      async onQueryStarted({ uid, movie }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            list_api.util.updateQueryData('getMoviesData',{uid:uid},(draft)=>{

              draft['movies'].push(movie);

            })
          )
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
      invalidatesTags: ["MOVIES"],
    }),
  }),
});

export const {
  useGetMoviesDataQuery,
  useAddMovieMutation,
  useRemoveMovieMutation,
} = list_api;

export default list_api;
