import { render, screen } from '@testing-library/react';
import App from './App';

it('should render test', () => {
  render(<App />);
  const test = screen.getByText(/React/);
  expect(test).toBeInTheDocument();
});
