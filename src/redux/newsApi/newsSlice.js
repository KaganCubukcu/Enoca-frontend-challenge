import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsSlice = createApi({
  reducerPath: "newsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/top-headlines",
  }),
  endpoints: (builder) => ({
    getNewsHome: builder.query({
      query: () =>
        `?country=tr&category=general&apiKey=e29abe99c41f4dfb92863f94efcacc8b`,
    }),

    getNewsCategory: builder.query({
      query: (args) => {
        const { selectedCountry, selectedCategory } = args;
        return {
          url: `?country=${selectedCountry}&category=${selectedCategory}&apiKey=e29abe99c41f4dfb92863f94efcacc8b`,
        };
      },
    }),
  }),
});

export const { useGetNewsHomeQuery, useGetNewsCategoryQuery } = newsSlice;
