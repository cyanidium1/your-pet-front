import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};
const formStepSlice = createSlice({
  name: "formStep",
  initialState,
  reducers: {
    nextStep: (state, action) => {
      state.step += 1;
    },
    prevStep: (state, action) => {
      state.step -= 1;
    },
    resetSteps: (state, action) => {
      state.step = 1;
    },
  },
});

export const { nextStep, prevStep, resetSteps } = formStepSlice.actions;
export const formStepReducer = formStepSlice.reducer;
