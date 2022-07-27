import { render, screen } from '@testing-library/react';
import Image from '.';

describe('Component: Image', () => {
  it('should render component succesfully', () => {
    const defaultProps = {
      src: 'image.png',
      alt: 'imagem',
    };
    render(<Image {...defaultProps} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', defaultProps.src);
    expect(image).toHaveAttribute('alt', defaultProps.alt);
  });
});
