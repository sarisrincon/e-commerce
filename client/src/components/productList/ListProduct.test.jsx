import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


// Mocks
/*jest.mock('../../hooks/useProductSearch', () => jest.fn());
jest.mock('../../shared/components/searchBar/SearchBar', () => () => <div data-testid="search-bar" />);
jest.mock('./ProductCard', () => ({ item }) => <li>{item.title}</li>);
jest.mock('../../shared/components/pagination/Pagination', () => ({ totalPages, currentPage, onPageChange }) => (
  <div>
    <button onClick={() => onPageChange(currentPage + 1)} data-testid="next-page">Next</button>
    <span data-testid="page">{currentPage}</span>
  </div>
));

const useProductSearch = require('../../hooks/useProductSearch');

const mockProducts = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: `Producto ${i + 1}`,
}));

function setup({ loading = false, error = null, products = mockProducts } = {}) {
  useProductSearch.mockReturnValue({ loading, error, products });
  window.history.pushState({}, '', '/items?search=foo');
  return render(<ProductList />);
}

describe('ProductList', () => {
  afterEach(() => jest.clearAllMocks());

  it('muestra el mensaje de carga', () => {
    setup({ loading: true });
    expect(screen.getByText(/Cargando productos/i)).toBeInTheDocument();
  });

  it('muestra el mensaje de error', () => {
    setup({ error: 'Error de red' });
    expect(screen.getByText(/Error de red/i)).toBeInTheDocument();
  });

  it('renderiza productos paginados', () => {
    setup();
    // Solo los primeros 5 productos en la primera página
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(`Producto ${i}`)).toBeInTheDocument();
    }
    // Los productos de la segunda página no deben estar
    expect(screen.queryByText('Producto 6')).not.toBeInTheDocument();
  });

  it('cambia de página al hacer clic en Next', () => {
    setup();
    fireEvent.click(screen.getByTestId('next-page'));
    // Ahora deben aparecer los productos 6 y 7
    expect(screen.getByText('Producto 6')).toBeInTheDocument();
    expect(screen.getByText('Producto 7')).toBeInTheDocument();
    // Los productos de la primera página ya no deben estar
    expect(screen.queryByText('Producto 1')).not.toBeInTheDocument();
  });
});*/