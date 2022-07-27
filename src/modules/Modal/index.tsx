import { X } from 'phosphor-react';
import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalContext';
import {
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBase,
} from './style';

const Modal = () => {
  const { modalContent, closeModal, modal, modalTitle } = useContext(ModalContext);

  if (modal) {
    return (
      <ModalBase>
        <ModalOverlay />
        <ModalContainer>
          <ModalHeader>
            {modalTitle}
            <ModalCloseButton type='button' title='fechar modal' onClick={() => closeModal()}>
              <X size={20} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalContent>{modalContent}</ModalContent>
        </ModalContainer>
      </ModalBase>
    );
  }
  return null;
};

export default Modal;
