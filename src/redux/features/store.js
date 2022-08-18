import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./post/postSlice";
import tabsSlice from "./tab/tabsSlice";
import usersSlice from "./user/usersSlice";

export default configureStore({
  reducer: {
    tabs: tabsSlice,
    posts: postsSlice,
    users: usersSlice,
  },
});
