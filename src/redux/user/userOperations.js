import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const userInst = axios.create({
  baseURL: 'https://your-pet-backend-nci6.onrender.com/',
});

export const userUpdate = createAsyncThunk(
  'user/Update',
  async (user, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append('name', user.firstName);
      //   formData.append('photo', user.photo);
      formData.append('phone', user.phone);
      formData.append('birthday', user.birthday);
      formData.append('email', user.email);
      formData.append('city', user.city);

      const response = await userInst.patch(
        'api/users/edit-profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(222);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
