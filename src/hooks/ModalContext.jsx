import React from 'react';
import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState();
  const [autor, setAutor] = useState();
  const [descriptionImage, setDescriptionImage] = useState();

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open,
        close,
        bigImage,
        setBigImage,
        autor,
        setAutor,
        descriptionImage,
        setDescriptionImage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
