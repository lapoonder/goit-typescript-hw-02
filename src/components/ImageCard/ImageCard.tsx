import { useModal } from '../../hooks/ModalContext';
import clsx from 'clsx';
import css from './ImageCard.module.css';

type Props = {
  imgUrl: string;
  imgDescription: string;
  bigImgUrl: string;
  autorName: string;
};

const ImageCard = ({ imgUrl, imgDescription, bigImgUrl, autorName }: Props) => {
  const { open, setBigImage, setAutor, setDescriptionImage } = useModal();

  const handleClick = () => {
    setDescriptionImage(imgDescription);
    setBigImage(bigImgUrl);
    setAutor(autorName);
    open();
  };

  return (
    <img
      src={imgUrl}
      alt={imgDescription}
      onClick={handleClick}
      className={clsx(css.image)}
    />
  );
};

export default ImageCard;
