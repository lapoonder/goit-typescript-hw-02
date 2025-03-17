import axios from 'axios';

// const YOUR_ACCESS_KEY = import.meta.env.VITE_API_KEY;

const YOUR_ACCESS_KEY = 'ZO62Fuy9rneRqaC9P6XwXKnjRN5OBu08skmS-uM-EYs';

axios.defaults.baseURL = 'https://api.unsplash.com/search';

export const fetchImages = async (searchText, page) => {
  const response = await axios.get(
    `/photos/?client_id=${YOUR_ACCESS_KEY}&query=${searchText}&per_page=10&page=${page}`
  );
  return response.data;
};
