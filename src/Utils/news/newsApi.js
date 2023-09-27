import axios from "axios";

const instance = axios.create({
    baseURL: 'https://your-pet-backend-nci6.onrender.com/api',
  });

  export const getAllNews = async page => {
    const { data } = await instance.get(`/news?page=1`);
    return data;
  };
  
  export const getFilteredNews = async (title, page) => {
    const { data } = await instance.get(`/news?search=${title}&page=${page}`);
    return data;
  };