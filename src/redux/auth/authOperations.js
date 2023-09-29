import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://your-pet-backend-nci6.onrender.com/',
});
const setAuthHeader = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const response = await authInstance.post('api/users/register', body);
      setAuthHeader(response.data.token);
      toast.success('Registration was successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await authInstance.post('api/users/login', body);
      setAuthHeader(response.data.token);
      toast.success('Login was successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error('Email or password is incorrect', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const { data } = error.response;
      return rejectWithValue(data);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const tokenValue = state.auth.token;
      if (!tokenValue) {
        return rejectWithValue();
      }
      setAuthHeader(tokenValue);
      const response = await authInstance.get('api/users/current');
      console.log(response.data);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authInstance.post('api/users/logout');

      toast.success('Logout was successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async () => {
    const response = await authInstance.get('api/users/google');
    return response.data;
  }
);
