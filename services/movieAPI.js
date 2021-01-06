import axios from "axios";
const API_KEY = "bb0a149304db2d054e912403b986db46";

const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );

  const trending = response.data.results;

  return trending;
};

const getMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );

  const movies = response.data.results;

  return movies;
};

const getMovieDetails = async (movieID) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );

  const movieDetails = response.data;

  return movieDetails;
};

const getMovieCredits = async (movieID) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`
    );

    const movieCredits = response.data.cast;

    return movieCredits;
  } catch (error) {
    console.log(error);
  }
};

const getMovieReviews = async (movieID) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`
    );

    const movieReviews = response.data.results;

    return movieReviews;
  } catch (error) {
    console.log(error);
  }
};

const movieAPI = {
  getTrending,
  getMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default movieAPI;
