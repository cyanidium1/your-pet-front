import { createSlice } from '@reduxjs/toolkit';

import { userUpdate } from './userOperations';

const initialState = {
  photo: '',
  firstName: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userUpdate.pending, state => {
        // state.loading = true;
        state;
      })
      .addCase(userUpdate.fulfilled, (state, { payload }) => {
        state.firstName = payload.firstName;
        state.email = payload.email;
        state.birthday = payload.birthday;
        state.phone = payload.phone;
        state.avataor = payload.photo;
      })
      .addCase(userUpdate.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
