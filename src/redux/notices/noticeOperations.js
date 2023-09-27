import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const noticeInstance = axios.create({
  baseURL: 'https://your-pet-backend-nci6.onrender.com/api',
});

export const getAllNoticesThunk = createAsyncThunk(
  'notices/allNotices',
  async (category, { rejectedWithValue }) => {
    try {
      const { data } = await noticeInstance.get('/notices', {
        params: {
          category,
        },
      });
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
