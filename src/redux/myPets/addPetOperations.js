import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPetInstance = axios.create({
  baseURL: 'https://your-pet-backend-nci6.onrender.com/',
});

export const addNewPet = createAsyncThunk(
  'addPet/newPet',
  async (pet, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append('name', pet.name);
      formData.append('petImage', pet.file);
      formData.append('type', pet.type);
      formData.append('dateOfBirth', pet.date);
      formData.append('comments', pet.comments);

      const response = await addPetInstance.post('api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPetNotice = createAsyncThunk(
  'addPet/newPetNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append('name', pet.name);
      formData.append('location', pet.location);
      formData.append('file', pet.file);
      formData.append('type', pet.type);
      formData.append('date', pet.date);
      formData.append('sex', pet.sex);
      formData.append('title', pet.title);
      if (pet.comments) {
        formData.append('comments', pet.comments);
      }
      formData.append('category', pet.category);
      if (pet.price) {
        formData.append('price', pet.price);
      }
      console.log(formData);

      const response = await addPetInstance.post('api/notices', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'addPet/deletePet',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await addPetInstance.delete(`api/pets/${pet.id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
