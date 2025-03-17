import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import clsx from 'clsx';
import css from './ImageModal.module.css';
import { useModal } from '../../hooks/ModalContext.jsx';

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.85)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
};

Modal.setAppElement('#root');

const ImageModal = () => {
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

  if (!isOpen) return null;

  function closeModal() {
    close();
    setDescriptionImage('');
    setBigImage('');
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={clsx(css.headerModal)}>
          <h2>
            {descriptionImage}
            <span>Autor: {autor}</span>
          </h2>
          <button onClick={closeModal}>x</button>
        </div>
        <div>
          <img src={bigImage} alt={descriptionImage} />
        </div>
      </Modal>
    </>
  );
};

ImageModal.propTypes = {
  bigImage: PropTypes.string,
  descriptionImage: PropTypes.string,
  isOpen: PropTypes.bool,
  autor: PropTypes.string,
  setAutor: PropTypes.func,
  open: PropTypes.func,
  close: PropTypes.func,
  setBigImage: PropTypes.func,
  setDescriptionImage: PropTypes.func,
};

export default ImageModal;
