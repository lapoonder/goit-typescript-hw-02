import { ReactNode } from 'react';
import clsx from 'clsx';
import css from './LoadMoreBtn.module.css';

type Props = {
  children: ReactNode;
  page: number;
  onClick: (nextPage: number) => void;
};

const LoadMoreBtn = ({ children, page, onClick }: Props) => {
  const handleClick = () => onClick(page + 1);
  return (
    <button
      type="button"
      className={clsx(css.loadMoreBtn)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default LoadMoreBtn;
