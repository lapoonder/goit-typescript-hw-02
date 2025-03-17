import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from '../../hooks/ModalContext.jsx';
import clsx from 'clsx';
import css from './ImageCard.module.css';

const ImageCard = ({ imgUrl, imgDescription, bigImgUrl, autorName }) => {
  const {
    isOpen,
    open,
    close,
    bigImage,
    setBigImage,
    autor,
    setAutor,
    descriptionImage,
    setDescriptionImage,
  } = useModal();

  const handleClick = () => {
    setDescriptionImage(imgDescription);
    setBigImage(bigImgUrl);
    setAutor(autorName);
    open();
  };

  return (
    <>
      <img
        src={imgUrl}
        alt={imgDescription}
        onClick={handleClick}
        className={clsx(css.image)}
      />
    </>
  );
};

ImageCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  bigImgUrl: PropTypes.string.isRequired,
  autorName: PropTypes.string.isRequired,
  bigImage: PropTypes.string,
  autor: PropTypes.string,
  setAutor: PropTypes.func,
  descriptionImage: PropTypes.string,
  isOpen: PropTypes.bool,
  open: PropTypes.func,
  close: PropTypes.func,
  setBigImage: PropTypes.func,
  setDescriptionImage: PropTypes.func,
};

export default ImageCard;
