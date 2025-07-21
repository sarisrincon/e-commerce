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

  it('muestra el banner de bienvenida si es la primera visita', () => {
    render(<SearchProduct />);
    expect(screen.getByTestId('welcome-banner')).toBeInTheDocument();
  });

  it('no muestra el banner si ya se visitó antes', () => {
    localStorage.setItem('hasVisited', 'true');
    render(<SearchProduct />);
    expect(screen.queryByTestId('welcome-banner')).not.toBeInTheDocument();
  });

  it('oculta el banner al hacer clic en cerrar', () => {
    render(<SearchProduct />);
    fireEvent.click(screen.getByText('Cerrar'));
    expect(screen.queryByTestId('welcome-banner')).not.toBeInTheDocument();
  });
});