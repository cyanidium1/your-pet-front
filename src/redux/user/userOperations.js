import { authInstance } from 'redux/auth/authOperations';

import { createAsyncThunk } from '@reduxjs/toolkit';

// export const userInst = axios.create({
//   baseURL: 'https://your-pet-backend-nci6.onrender.com/',
// });

export const userUpdate = createAsyncThunk(
  'user/Update',
  async (user, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      console.log('Thunk', user);
      formData.append('name', user.firstName);
      formData.append('avatar', user.photo);
      formData.append('phone', user.phone);
      // formData.append('birthday', user.birthday);
      formData.append('birthday', '01-01-2022');
      formData.append('email', user.email);
      formData.append('city', user.city);

      const response = await authInstance.patch(
        'api/users/edit-profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
