import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/authOperations';

export const getAllNoticesThunk = createAsyncThunk(
  'notices/allNotices',
  async (category, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices', {
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

export const getMyAdsThunk = createAsyncThunk(
  'notices/myAds',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices/user-notices');
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getMyFavoriteAdsThunk = createAsyncThunk(
  'notices/favoriteAds',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices/favorites');
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
