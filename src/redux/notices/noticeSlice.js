import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
} from './noticeOperations.js';

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
    builder
      .addCase(getAllNoticesThunk.pending, handlePending)
      .addMatcher(
        isAnyOf(
          getAllNoticesThunk.fulfilled,
          getMyAdsThunk.fulfilled,
          getMyFavoriteAdsThunk.fulfilled
        ),
        handleAllNotices
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
