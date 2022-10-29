import axios from 'axios';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bb85da72485cd2efa68a1ef9ab108fb4';

export const fetchTrendingData = async () => {
  const data = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieById = async id => {
  const data = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchCreditsById = async id => {
  const data = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const fetchReviewsById = async id => {
  const data = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};

export const fetchMoviesByName = async (query = '') => {
  const data = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};
