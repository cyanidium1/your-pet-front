import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllNoticesThunk,
  getMyAdsThunk,
  getMyFavoriteAdsThunk,
  addNoticeToFavoriteThunk,
  removeNoticeToFavoriteThunk,
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

// const handleToggleFavorite = (state, { payload }) => {
//   console.log(state.allNotices.notices);
//   // const ourCardIndex = state.allNotices.notices.findIndex(payload._id);
//   // state.allNotices.notices[ourCardIndex] = payload;
// };

export const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllNoticesThunk.pending, handlePending)
      // .addMatcher(
      //   isAnyOf(
      //     removeNoticeToFavoriteThunk.fulfilled,
      //     addNoticeToFavoriteThunk.fulfilled
      //   ),
      //   handleToggleFavorite
      // )
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
