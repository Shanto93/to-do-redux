import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => {
        //3rd and best approach to filter data based on priority
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          // url: `/tasks?priority=${priority}`,   //First approach to filter priority data
          url: "/tasks",
          method: "GET",
          params: { priority: priority }, //This is 2nd approach to filtera data based on priority
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/tasks",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/tasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateStatus: builder.mutation({
      query: (options) => {
        console.log("Inside Base API: ", options);
        return {
          url: `/tasks/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateStatusMutation,
  useDeleteTodoMutation,
} = baseApi;
