import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPostsRequest, updatePostRequest } from "../../../api/posts";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  fetchAllPostsRequest
);

export const updatePost = createAsyncThunk("posts/updatePost", (post) =>
  updatePostRequest(post)
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return { ...state, loading: false, posts: action.payload };
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      return { posts: [], loading: false, error: action.payload };
    });
    builder.addCase(updatePost.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      return { posts: [], loading: false, error: action.payload };
    });
  },
});

export default postsSlice.reducer;
