import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import postsApi from "../../api/posts";
import tabsSlice from "./tab/tabsSlice";
import usersSlice from "./user/usersSlice";

const store = configureStore({
  reducer: {
    tabs: tabsSlice,
    [postsApi.reducerPath]: postsApi.reducer,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
