import { createSlice, isAnyOf, createAction } from '@reduxjs/toolkit';
import { getAllNoticesThunk } from './noticeOperations.js';

const initialState = {
  allNotices: [],
  isLoading: false,
};

const handleAllNotices = (state, { payload }) => {
  state.allNotices = payload;
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllNoticesThunk.fulfilled, handleAllNotices);
    builder.addCase(getAllNoticesThunk.pending, handlePending);
  },
});

export const noticesReducer = noticesSlice.reducer;
