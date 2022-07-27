import { ReactElement, useState } from 'react';

export type ModalContent = ReactElement | string;

export default () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>('');
  const [modalTitle, setModalTitle] = useState<string>('');

  const handleModal = (content?: ModalContent, title?: string) => {
    setModal(true);
    if (content) {
      setModalTitle(title || '');
      setModalContent(content);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, handleModal, modalContent, modalTitle, closeModal };
};
