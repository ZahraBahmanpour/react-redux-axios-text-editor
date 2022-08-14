import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./post/postSlice";
import tabsSlice from "./tab/tabsSlice";

export default configureStore({
  reducer: {
    tabs: tabsSlice,
    posts: postsSlice,
  },
});
