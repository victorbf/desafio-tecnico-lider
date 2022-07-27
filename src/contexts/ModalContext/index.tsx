import { createContext, PropsWithChildren, ReactElement } from 'react';
import useModal from '~/hooks/useModal';

export type ModalContextParams = {
  modal: boolean;
  handleModal: (content?: ReactElement | string, title?: string) => void;
  modalContent: ReactElement | string;
  modalTitle: string;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextParams>({
  modal: false,
  modalContent: '',
  modalTitle: '',
  handleModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { modal, handleModal, modalContent, modalTitle, closeModal } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent, modalTitle, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
