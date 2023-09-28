import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNews, getFilteredNews } from 'Utils/news/newsApi';

export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async (page, thunkAPI) => {
    try {
      const data = await getAllNews(page);
   
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
export const fetchFilteredNews = createAsyncThunk(
  'news/filteredNews',
  async (query, page, limit, thunkAPI) => {
    try {
      const data = await getFilteredNews(query, page, limit);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

