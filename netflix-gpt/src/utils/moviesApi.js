import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseVideosURL, AUTH_TMDB } from "./urls";

const moviesApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "moviesApi",
    baseUrl: BaseVideosURL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${AUTH_TMDB}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (params) => ({
        url: `${params.path.toString()}?language=en-US/&page=${params.page}`,
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        const args = { ...queryArgs };
        if (args.page) {
          delete args.page;
        }
        return args;
      },
      //transformResponse:(response)=>{return response.results},
      merge: (CurrentState, incomingState) => {
        if (CurrentState.results) {
          CurrentState.page = incomingState?.page;
          CurrentState.results.push(...incomingState?.results);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
export default moviesApi;
