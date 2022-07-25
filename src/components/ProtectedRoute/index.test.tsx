import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '.';

describe('Component: PrivateRoute', () => {
  it('should redirect if user is not authenticated', () => {
    render(
      <BrowserRouter>
        <ProtectedRoute authenticationPath='/login' outlet={<div>Test</div>} />
      </BrowserRouter>,
    );

    const divElement = screen.queryByText('Test');

    expect(divElement).not.toBeInTheDocument();
  });

  it('should render page if user is authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');

    render(
      <BrowserRouter>
        <ProtectedRoute authenticationPath='/login' outlet={<div>Test</div>} />
      </BrowserRouter>,
    );

    const divElement = screen.getByText('Test');

    expect(divElement).toBeInTheDocument();
  });
});
