import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';
import { fetchImages } from '../../unsplash';
import SearchBar from '../SearchBar/SearchBar';
import { MagnifyingGlass } from 'react-loader-spinner';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

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

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState<string>('');

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
    setImages([]); //очищаємо стан images перед новим запитом
    setTotalPages(0);
    setPage(1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage(nextPage);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setError(false); //щоб скинути помилку перед наступним запитом, на випадок, якщо вона була у попередньому запиті
        setLoading(true); // Встановлюємо індикатор в true перед запитом
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true); // Тут будемо обробляти помилку
      } finally {
        setLoading(false); // Встановлюємо індикатор в false після запиту
      }
    };
    query && search();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <div className="section">
        <div className={clsx('container', css.gallery)}>
          {Object.keys(images).length > 0 && <ImageGallery images={images} />}
          {totalPages > page && (
            <LoadMoreBtn page={page} onClick={handleNextPage}>
              Load more...
            </LoadMoreBtn>
          )}
          {loading && (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{ margin: 'auto', display: 'block' }}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          )}
        </div>
      </div>
      <ImageModal />
    </>
  );
}

export default App;
