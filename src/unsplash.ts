import axios from 'axios';

const YOUR_ACCESS_KEY = 'ZO62Fuy9rneRqaC9P6XwXKnjRN5OBu08skmS-uM-EYs';

axios.defaults.baseURL = 'https://api.unsplash.com/search';

type Urls = {
  small: string;
  regular: string;
};

type User = {
  name: string;
};

type Image = {
  id: string;
  urls: Urls;
  description: string;
  user: User;
};

interface UnsplashResponse {
  results: Image[];
  total_pages: number;
  [key: string]: unknown; // <-- Позволяет API возвращать любые другие данные
}

export const fetchImages = async (
  searchText: string,
  page: number
): Promise<Pick<UnsplashResponse, 'results' | 'total_pages'>> => {
  const response = await axios.get<
    Pick<UnsplashResponse, 'results' | 'total_pages'>
  >(
    `/photos/?client_id=${YOUR_ACCESS_KEY}&query=${searchText}&per_page=10&page=${page}`
  );
  return response.data;
};
