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

export const addNoticeToFavoriteThunk = createAsyncThunk(
  'notices/addNoticeToFavorite',
  async (id, { rejectedWithValue, dispatch }) => {
    try {
      const { data } = await authInstance.patch(
        `/api/notices/${id}/add-to-favorites`
      );

      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const removeNoticeToFavoriteThunk = createAsyncThunk(
  'notices/removeNoticeToFavorite',
  async ({ _id, thunk }, { rejectedWithValue, dispatch }) => {
    try {
      const { data } = await authInstance.patch(
        `/api/notices/${_id}/remove-from-favorites`
      );
      dispatch(thunk);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
