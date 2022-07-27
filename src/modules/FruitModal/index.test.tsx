import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FruitModal from '.';

describe('Module: FruitModal', () => {
  const defaultProps = {
    name: 'Maçã',
    imgUrl: '',
    buttonTitle: 'Adicionar',
    defaultValue: 1,
    onSubmit: () => {},
  };

  const inputPlaceholderText = `Quantidade de ${defaultProps.name}s`;

  it('should accept only number on input', async () => {
    render(<FruitModal {...defaultProps} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);

    await userEvent.type(input, 'Hello');

    expect(input).toHaveAttribute('value', '1');
  });

  it('should render error if value is 0', async () => {
    render(<FruitModal {...defaultProps} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);

    await userEvent.clear(input);
    await userEvent.type(input, '0');

    const errorText = screen.getByText('Insira valor válido!');
    expect(errorText).toBeInTheDocument();
  });

  it('should render error if value is empty', async () => {
    render(<FruitModal {...defaultProps} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);

    await userEvent.clear(input);
    const errorText = screen.getByText('Insira valor válido!');

    expect(errorText).toBeInTheDocument();
  });

  it('should disable button if value is 0', async () => {
    render(<FruitModal {...defaultProps} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);

    await userEvent.clear(input);
    await userEvent.type(input, '0');

    const modalButton = screen.getByRole('button', { name: defaultProps.buttonTitle });
    expect(modalButton).toHaveAttribute('disabled');
  });

  it('should disable button if value is empty', async () => {
    render(<FruitModal {...defaultProps} />);
    const input = screen.getByPlaceholderText(inputPlaceholderText);

    await userEvent.clear(input);

    const modalButton = screen.getByRole('button', { name: defaultProps.buttonTitle });
    expect(modalButton).toHaveAttribute('disabled');
  });
});
