import { render, screen } from '@testing-library/react';
import SearchInput from '.';

describe('Component: SearchInput', () => {
  it('should render component successfully', () => {
    render(<SearchInput placeholder='Search' />);

    const searchInput = screen.getByPlaceholderText('Search');

    expect(searchInput).toBeInTheDocument();
  });
});
