import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul className={clsx(css.imageList)}>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard
              imgUrl={image.urls.small}
              imgDescription={image.description || 'photo'}
              bigImgUrl={image.urls.regular}
              autorName={image.user.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
