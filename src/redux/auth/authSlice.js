import { createSlice, isAnyOf, createAction } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperations";
const resetStateAction = createAction("auth/resetState");

const initialState = {
  user: null,
  token: "",
  isAuth: false,
  isRefresher: false,
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    
  },
});
export const authReducer = authSlice.reducer;
export const resetAuthState = resetStateAction;
