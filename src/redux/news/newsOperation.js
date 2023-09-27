import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNews, getFilteredNews } from 'Utils/news/newsApi';

export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async (page, thunkAPI) => {
    try {
      const data = await getAllNews(page);
      console.log(data)
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
export const fetchFilteredNews = createAsyncThunk(
  'news/filteredNews',
  async ({ title, page }, thunkAPI) => {
    try {
      const data = await getFilteredNews(title, page);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);