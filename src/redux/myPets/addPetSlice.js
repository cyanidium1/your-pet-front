import { createSlice, isAnyOf, createAction } from "@reduxjs/toolkit";
import { addNewPet, deletePet, updatePetInfo } from "./addPetOperations";

const initialState = {
  name: "",
  location: "",
  photo: "",
  type: "",
  birthDate: "",
  sex: "",
  title: "",
  comments: "",
  status: "",
  id: "",
};

export const addPetSlice = createSlice({
  name: "addPet",
  initialState,
  reducers: {
    resetState: (state) => initialState,
    addPetStatus: (state, { payload }) => {
      state.status = payload;
    },
    addPetPersonalInfo: (state, { payload }) => {
      state.birthDate = payload.birthDate;
      state.title = payload.title;
      state.type = payload.type;
      state.name = payload.name;
    },
    addPetMoreInfo: (state, { payload }) => {
      state.price = payload.price;
      state.location = payload.location;
      state.comments = payload.comments;
      state.sex = payload.sex;
      state.photo = payload.photo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewPet.fulfilled, (state, { payload }) => {
      state = payload;
    });
  },
});
export const { resetState, addPetStatus, addPetMoreInfo, addPetPersonalInfo } =
  addPetSlice.actions;
export const addPetSliceReducer = addPetSlice.reducer;
