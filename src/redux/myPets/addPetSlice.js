import { createSlice, isAnyOf, createAction } from "@reduxjs/toolkit";
import { addPetStatus, updatePetInfo } from "./addPetOperations";

const initialState = {
  name: "",
  location: "",
  image: "",
  type: "",
  birthDate: "",
  gender: "",
  title: "",
  comments: "",
  status: "",
  id: "",
  isLoading: false,
  error: false,
};

export const addPetSlice = createSlice({
  name: "addPet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPetStatus.fulfilled, (state, { payload }) => {
        state.status = payload.status;
        state.id = payload.id;

        state.error = false;
        state.isLoading = false;
      })
      .addCase(updatePetInfo.fulfilled, (state, { payload }) => {
        state.breed = payload.breed;
        state.birthDate = payload.birthDate;
        state.title = payload.title;
        state.name = payload.name;

        state.error = false;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const addPetSliceReducer = addPetSlice.reducer;
