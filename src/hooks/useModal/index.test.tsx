import { renderHook } from '@testing-library/react-hooks';
import useModal from '.';

describe('Hook: useModal', () => {
  it('should change modal on call handle modal', () => {
    const { result } = renderHook(useModal);

    result.current.handleModal('Modal');

    expect(result.current.modal).toBe(true);
  });

  it('should change modal value on close ', () => {
    const { result } = renderHook(useModal);
    result.current.handleModal('Modal');

    result.current.closeModal();
    expect(result.current.modal).toBe(false);
  });

  it('should add title', () => {
    const { result } = renderHook(useModal);

    result.current.handleModal('Text', 'Title');

    expect(result.current.modalContent).toBe('Text');
    expect(result.current.modalTitle).toBe('Title');
  });
});
