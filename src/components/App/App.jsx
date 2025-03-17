import React from 'react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';
import { fetchImages } from '../../unsplash.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { MagnifyingGlass } from 'react-loader-spinner';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState();

  const handleSearch = searchText => {
    setQuery(searchText);
    setImages([]); //очищаємо стан images перед новим запитом
    setTotalPages(0);
    setPage(1);
  };

  const handleNextPage = nextPage => {
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
