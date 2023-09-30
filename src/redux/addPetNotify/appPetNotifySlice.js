import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shouldNotificationShow: false,
};
const toggleNotifySlice = createSlice({
  name: 'showNotifyAddPet',
  initialState,
  reducers: {
    showNotify: (state, action) => {
      state.shouldNotificationShow = true;
    },
    hideNotify: (state, action) => {
      state.shouldNotificationShow = false;
    },
  },
});

export const { showNotify, hideNotify } = toggleNotifySlice.actions;
export const toggleNotifyReducer = toggleNotifySlice.reducer;
