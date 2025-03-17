import { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useId } from 'react';
import clsx from 'clsx';
import css from './SearchBar.module.css';

type Props = {
  onSubmit: (searchText: string) => void;
};

const notify = () => toast('Please enter your text to search images!');

function SearchForm({ onSubmit }: Props) {
  const inputFieldId = useId();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchText = (
      form.elements.namedItem('searchText') as HTMLInputElement
    )?.value;
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

export default SearchForm;
