import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalApproveActionOpen: false,
  isModalAttentionOpen: false,
  isModalCongratsOpen: false,
  isModalDeleteAdverstimentOpen: false,
  isModalPetCardDetailsOpen: false,
  isFilterModalOpen: false,
  // isLoading: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalApproveAction(state) {
      state.isModalApproveActionOpen = true;
    },
    closeModalApproveAction(state) {
      state.isModalApproveActionOpen = false;
    },
    openModalAttention(state) {
      state.isModalAttentionOpen = true;
    },
    closeModalAttention(state) {
      state.isModalAttentionOpen = false;
    },
    openModalCongrats(state) {
      state.isModalCongratsOpen = true;
    },
    closeModalCongrats(state) {
      state.isModalCongratsOpen = false;
    },
    openModalDeleteAdverstiment(state) {
      state.isModalDeleteAdverstimentOpen = true;
    },
    closeModalDeleteAdverstiment(state) {
      state.isModalDeleteAdverstimentOpen = false;
    },
    openModalPetCardDetails(state) {
      state.isModalPetCardDetailsOpen = true;
    },
    closeModalPetCardDetails(state) {
      state.isModalPetCardDetailsOpen = false;
    },
    filterModal(state) {
      state.isFilterModalOpen = !state.isFilterModalOpen;
    },
    closeFilterModal(state) {
      state.isFilterModalOpen = false;
    },
    // setIsLoading(state) {
    //   state.isLoading = true;
    // },
    // unsetIsLoading(state) {
    //   state.isLoading = false;
    // },
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  openModalApproveAction,
  closeModalApproveAction,
  openModalAttention,
  closeModalAttention,
  openModalCongrats,
  closeModalCongrats,
  openModalDeleteAdverstiment,
  closeModalDeleteAdverstiment,
  openModalPetCardDetails,
  closeModalPetCardDetails,
  filterModal,
  closeFilterModal,
} = globalSlice.actions;
