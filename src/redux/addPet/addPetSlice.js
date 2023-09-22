import { createSlice, isAnyOf, createAction } from "@reduxjs/toolkit";
import { register, login, logOut, refreshUser } from "./authOperations";

const initialState = {
  name: "",
  location: "",
  image: "",
  type: "",
  birthDate: "",
  gender: "male",
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "addPet",
  initialState,
  extraReducers: (builder) => {},
});
export const authReducer = authSlice.reducer;
