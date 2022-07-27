import { render, screen } from '@testing-library/react';
import EmptyState from '.';

describe('Component: EmptyState', () => {
  it('should render component successfully', () => {
    const defaultProps = {
      text: 'Empty State',
    };

    render(<EmptyState {...defaultProps} />);

    const text = screen.getByText(defaultProps.text);
    expect(text).toBeInTheDocument();
  });
});
