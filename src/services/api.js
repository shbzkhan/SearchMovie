// src/services/api.js
import axios from 'axios';

const API_KEY = '13ad14ba';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      apikey: API_KEY
    }
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      i: id,
      apikey: API_KEY
    }
  });
  return response.data;
};

