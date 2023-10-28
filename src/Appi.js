import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3001";

export const api = createApi({
  reducerPath: "api", // Provide a unique reducer path
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllWithoutLimit: builder.query({
      query: () => "/products", // Specify the endpoint URL
    }),
  }),
});

export const { useGetAllWithoutLimitQuery } = api;
