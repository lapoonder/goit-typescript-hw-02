import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  bigImage: string;
  setBigImage: (url: string) => void;
  autor: string;
  setAutor: (name: string) => void;
  descriptionImage: string;
  setDescriptionImage: (desc: string) => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal - Error!');
  }
  return context;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bigImage, setBigImage] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [descriptionImage, setDescriptionImage] = useState<string>('');

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
