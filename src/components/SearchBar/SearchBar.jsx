import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useId } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './SearchBar.module.css';

const notify = () => toast('Please enter your text to search images!');

function SearchForm({ onSubmit }) {
  const inputFieldId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const searchText = form.elements.searchText.value;
    if (searchText.trim() === '') {
      notify();
      return;
    }
    onSubmit(searchText);
    form.reset();
  };

  return (
    <header className={clsx(css.header)}>
      <form onSubmit={handleSubmit} className={clsx(css.searchForm)}>
        <input
          type="text"
          name="searchText"
          id={inputFieldId}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster
        containerStyle={{
          top: 60,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          className: ``,
          style: {
            border: '1px solid red',
            padding: '16px',
            color: '#713200',
          },
        }}
      />
    </header>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
