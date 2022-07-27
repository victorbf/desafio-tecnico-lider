import { render, screen } from '@testing-library/react';
import Item from '.';

describe('Component: Item', () => {
  const defaultProps = {
    name: 'Maçã',
    description:
      'A maçã é uma boa fonte de vitaminas B1, B2, Niacina e sais minerais, como Fósforo e Ferro.',
    imgUrl: '',
    quantity: 1,
    isOnCart: false,
    onClick: () => {},
  };

  it('should render component successfully', () => {
    render(<Item {...defaultProps} />);

    const name = screen.getByText(defaultProps.name);
    const description = screen.getByText(defaultProps.description);
    const img = screen.getByRole('img');

    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it('should render quantity if isOnCart is true', () => {
    render(<Item {...defaultProps} isOnCart />);

    const quantity = screen.getByText('(1)');
    expect(quantity).toBeInTheDocument();
  });
});
