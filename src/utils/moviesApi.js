import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseVideosURL } from "./urls";

const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseVideosURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (params) => ({
        url: !params.recommend?`${params.path.toString()}?language=en-US/&page=${params.page}`:`${params.movie_id}/recommendations?language=en-US/&page=${params.page}`,
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        const args = { ...queryArgs };
        if (args.page) {
          delete args.page;
        }
        return args;
      },
      merge: (CurrentState, incomingState) => {
        if (CurrentState.results) {
          CurrentState.page = incomingState?.page;
          CurrentState.results.push(...incomingState?.results);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page > previousArg?.page;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;

export const useGetMoviesState=moviesApi.endpoints.getMovies.useQueryState;
export default moviesApi;
