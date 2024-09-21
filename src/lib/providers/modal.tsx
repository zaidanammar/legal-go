import React from 'react';

export type ModalContextType = {
  handleOpen: () => void;
  isModalOpen: boolean;
  handleClose: () => void;
};

const INITIAL_MODAL_CONTEXT: ModalContextType = {
  handleOpen: () => undefined,
  isModalOpen: false,
  handleClose: () => undefined,
};

export const ModalContext = React.createContext<ModalContextType>(
  INITIAL_MODAL_CONTEXT
);

export const useModal = () => {
  const modalContext = React.useContext(ModalContext);

  if (!modalContext) {
    throw new Error('useModal must be used within Modal');
  }

  return modalContext;
};

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        handleOpen,
        isModalOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
