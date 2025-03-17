import { createSlice } from "@reduxjs/toolkit";
import { createBlogs, getBlogs } from "./api";

const initialState = {
  Blogs: [],
  isLoading: false,
  error: null,
};

const Blogslice = createSlice({
  name: "Blogs",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Blogs.push(action.payload);
      })
      .addCase(createBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default Blogslice.reducer;
