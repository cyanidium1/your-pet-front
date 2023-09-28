import axios from "axios";

const instance = axios.create({
    baseURL: 'https://your-pet-backend-nci6.onrender.com/api',
  });

  export const getAllNews = async page => {
    const { data } = await instance.get(`/news?page=${page}`);
    return data;
  };
  
  export const getFilteredNews = async (query="", page=1, limit=6) => {
    const { data } = await instance.get(`/news?searchQuery=${query}&page=${page}&limit=${limit}`);
     return data;
  };
   
  

