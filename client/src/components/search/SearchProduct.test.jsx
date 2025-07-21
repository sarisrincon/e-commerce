import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchProduct from './SearchProduct';

jest.mock('../../shared/components/searchBar/SearchBar', () => () => <div data-testid="search-bar" />);
jest.mock('../../shared/components/welcomeBanner/WelcomeBanner', () => ({ onClose }) => (
  <div data-testid="welcome-banner">
    Bienvenido!
    <button onClick={onClose}>Cerrar</button>
  </div>
));

describe('SearchProduct', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Displays the welcome banner on first visit', () => {
    render(<SearchProduct />);
    expect(screen.getByTestId('welcome-banner')).toBeInTheDocument();
  });

  it('Does not display the banner if already visited', () => {
    localStorage.setItem('hasVisited', 'true');
    render(<SearchProduct />);
    expect(screen.queryByTestId('welcome-banner')).not.toBeInTheDocument();
  });

  it('Hides the banner when close is clicked', () => {
    render(<SearchProduct />);
    fireEvent.click(screen.getByText('Cerrar'));
    expect(screen.queryByTestId('welcome-banner')).not.toBeInTheDocument();
  });
});