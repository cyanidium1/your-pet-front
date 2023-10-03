import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
  addNoticeToFavoriteThunk,
  removeNoticeToFavoriteThunk,
  getSelectedNoticeThunk,
} from './noticeOperations.js';

const initialState = {
  allNotices: [],
  selectedNotice: null,
  isLoading: false,
};

const handleAllNotices = (state, { payload }) => {
  state.allNotices = payload;
  state.isLoading = false;
};

const handleNoticeById = (state, action) => {
  state.selectedNotice = action.payload;
  state.isLoading = false;
};

const handlePending = state => {
  state.isLoading = true;
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    addSelectedId: (state, { payload }) => {
      state.selectedNotice = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllNoticesThunk.pending, handlePending)
      .addCase(getSelectedNoticeThunk.fulfilled, handleNoticeById)
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
export const { addSelectedId } = noticesSlice.actions;
