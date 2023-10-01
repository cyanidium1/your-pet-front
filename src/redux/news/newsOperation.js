import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from "redux/auth/authOperations";


const { data } = await authInstance.get('/api/news')


export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async ({page, searchQuery, limit}, thunkAPI) => {
    try {
      const { data } = await authInstance.get('/api/news',     
        { params: {
          searchQuery, 
          page,
          limit 
            },
          });
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

