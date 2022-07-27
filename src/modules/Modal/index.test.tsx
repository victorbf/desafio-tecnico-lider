import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ModalProvider } from '~/contexts/ModalContext';
import useModal from '~/hooks/useModal';
import Modal from '.';

vi.mock('~/hooks/useModal');
const useModalMocked = vi.mocked(useModal);

describe('Module: Modal', () => {
  it('should render component successfully', () => {
    useModalMocked.mockReturnValueOnce({
      modalTitle: 'Modal Title',
      modal: true,
      modalContent: <p>content test</p>,
    } as any);

    render(
      <ModalProvider>
        <Modal />
      </ModalProvider>,
    );

    const modalTitle = screen.getByText('Modal Title');
    const modalContent = screen.getByText('content test');

    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });

  it('should call onClose on button click', async () => {
    const onClose = vi.fn();

    useModalMocked.mockReturnValueOnce({
      modal: true,
      closeModal: onClose,
    } as any);

    render(
      <ModalProvider>
        <Modal />
      </ModalProvider>,
    );

    const closeModal = screen.getByTitle('fechar modal');
    await userEvent.click(closeModal);
    expect(onClose).toHaveBeenCalled();
  });

  it('should not render modal if modal is false', () => {
    useModalMocked.mockReturnValueOnce({
      modal: false,
      modalTitle: 'Modal Title',
    } as any);

    render(
      <ModalProvider>
        <Modal />
      </ModalProvider>,
    );

    const modalTitle = screen.queryByText('Modal Title');

    expect(modalTitle).not.toBeInTheDocument();
  });
});
