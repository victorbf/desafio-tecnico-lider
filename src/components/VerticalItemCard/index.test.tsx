import { render, screen } from '@testing-library/react';
import VerticalItemCard from '.';

describe('Component: VerticalItemCard', () => {
  const defaultProps = {
    name: 'Maçã',
    imgUrl: '',
  };

  it('should render component successfully', () => {
    render(<VerticalItemCard {...defaultProps} />);

    const name = screen.getByText(defaultProps.name);
    const img = screen.getByRole('img');
    const quantity = screen.queryByText(/1/);

    expect(name).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(quantity).not.toBeInTheDocument();
  });

  it('should render quantity if quantity exists', () => {
    render(<VerticalItemCard {...defaultProps} quantity={1} />);

    const quantity = screen.getByText(/1/);
    expect(quantity).toBeInTheDocument();
  });
});
