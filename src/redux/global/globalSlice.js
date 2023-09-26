import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddAdverstimentOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  isModalEditAdverstimentOpen: false,
  editAdverstiment: null,
  isModalDeleteAdverstimentOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddAdverstiment(state) {
      state.isModalAddAdverstimentOpen = true;
    },
    closeModalAddAdverstiment(state) {
      state.isModalAddAdverstimentOpen = false;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    unsetIsLoading(state) {
      state.isLoading = false;
    },
    openModalEditAdverstiment(state) {
      state.isModalEditAdverstimentOpen = true;
    },
    closeModalEditAdverstiment(state) {
      state.isModalEditAdverstimentOpen = false;
    },
    setUpdatedAdverstiment: (state, { payload }) => {
      state.editAdverstiment = payload;
    },
    openModalDeleteAdverstiment(state) {
      state.isModalDeleteAdverstimentOpen = true;
    },
    closeModalDeleteAdverstiment(state) {
      state.isModalDeleteAdverstimentOpen = false;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  openModalAddAdverstiment,
  closeModalAddAdverstiment,
  openModalLogout,
  closeModalLogout,
  setIsLoading,
  unsetIsLoading,
  openModalEditAdverstiment,
  closeModalEditAdverstiment,
  setUpdatedAdverstiment,
  openModalDeleteAdverstiment,
  closeModalDeleteAdverstiment,
} = globalSlice.actions;