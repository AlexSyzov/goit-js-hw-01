import axios from "axios";

const settings = {
  API_KEY: "19013681-b3e57e495a7f99e090e3c058f",
  perPage: 12,
};

const fetchImagesWithQuery = async (query, page) => {
  const { API_KEY, perPage } = settings;

  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  const data = response.data;

  return { data, perPage };
};

const service = {
  fetchImagesWithQuery,
};

export default service;
