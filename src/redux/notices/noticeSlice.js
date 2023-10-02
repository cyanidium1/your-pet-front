import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
  addNoticeToFavoriteThunk,
  removeNoticeToFavoriteThunk,
  getSelectedNoticeThunk
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
      )
      .addCase(getSelectedNoticeThunk.fulfilled, handleNoticeById);
  },
});

export const noticesReducer = noticesSlice.reducer;
