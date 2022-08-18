import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../../api/users";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../config/constants";
const initialState = {
  error: "",
  isLoggedIn: false,
};

export const login = createAsyncThunk("users/login", (user) => {
  return loginRequest(user)
    .then((response) => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(REFRESH_TOKEN, response.refreshToken);
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
});

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
