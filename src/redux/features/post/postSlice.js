import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../api/constants";
import { fetchAllPosts } from "../../../api/posts";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", fetchAllPosts);

export const updatePost = createAsyncThunk("posts/updatePost", (post) => {
  return fetch(`${BASE_URL}/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .catch((error) => error.message);
});

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
