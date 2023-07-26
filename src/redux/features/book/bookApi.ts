import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetCommentQuery,
  useGetBooksQuery,
  usePostCommentMutation,
  useSingleBookQuery,
} = bookApi;
