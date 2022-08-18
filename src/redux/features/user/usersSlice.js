import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../../api/users";
const initialState = {
  error: "",
  isLoggedIn: false,
};

export const login = createAsyncThunk("users/login", (user) =>
  loginRequest(user)
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, isLoggedIn: true, error: "" };
    });
    builder.addCase(login.rejected, (state, action) => {
      return {
        error: action.error.message,
        isLoggedIn: false,
      };
    });
  },
});

export default usersSlice.reducer;
