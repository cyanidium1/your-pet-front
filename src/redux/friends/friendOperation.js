import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const friendInstance = axios.create({
  baseURL: 'https://your-pet-backend-nci6.onrender.com/',
});

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await friendInstance.get('api/friends');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
