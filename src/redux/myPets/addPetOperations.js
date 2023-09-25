import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://650e940454d18aabfe994535.mockapi.io";

export const addNewPet = createAsyncThunk(
  "addPet/newPet",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/myPets", {
        id: crypto.randomUUID(),
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePetInfo = createAsyncThunk(
  "addPet/updatePetInfo",
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/myPets/${pet.id}`, {
        ...pet,
      });
      console.log(pet);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
