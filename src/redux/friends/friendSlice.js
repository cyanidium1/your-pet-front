const { createSlice } = require('@reduxjs/toolkit');
const { fetchFriends } = require('./friendOperation');
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const friendSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.loading = true;
      })
      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchFriends.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const friendReducer = friendSlice.reducer;
