import clsx from 'clsx';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

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

type Props = {
  images: Image[];
};

const ImageGallery = ({ images }: Props) => {
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

export default ImageGallery;
