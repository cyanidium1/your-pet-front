import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/authOperations';

export const getAllNoticesThunk = createAsyncThunk(
  'notices/allNotices',
  async ({ category, searchQuery }, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices', {
        params: {
          category,
          searchQuery,
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
  async ({ searchQuery = null }, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices/user-notices', {
        params: {
          searchQuery,
        },
      });
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getMyFavoriteAdsThunk = createAsyncThunk(
  'notices/favoriteAds',
  async ({ searchQuery }, { rejectedWithValue }) => {
    try {
      const { data } = await authInstance.get('/api/notices/favorites', {
        params: {
          searchQuery,
        },
      });
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

export const deleteNoticeThunk = createAsyncThunk(
  'notices/deleteNotice',
  async ({ _id, thunk }, { rejectedWithValue, dispatch }) => {
    try {
      const { data } = await authInstance.delete(`/api/notices/${_id}`);

      dispatch(thunk);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
