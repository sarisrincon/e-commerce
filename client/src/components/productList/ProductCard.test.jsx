import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './sections/ProductCard';
// este solo se convierte en 1 test con list prodcut
const mockItem = {
  id: '123',
  title: 'Producto Test',
  picture: 'http://test.com/img.jpg',
  price: { amount: 1500, currency: 'ARS' },
  free_shipping: true,
  installments: '12x $125',
  category: 'Electrónica'
};

describe('ProductCard', () => {
  it('renderiza los datos principales del producto', () => {
    render(
      <MemoryRouter>
        <ProductCard item={mockItem} query="celular" />
      </MemoryRouter>
    );
    expect(screen.getByText('Producto Test')).toBeInTheDocument();
    expect(screen.getByText('Electrónica')).toBeInTheDocument();
    expect(screen.getByText('$1,500')).toBeInTheDocument();
    expect(screen.getByText('ARS')).toBeInTheDocument();
    expect(screen.getByAltText('Imagen del producto Producto Test')).toBeInTheDocument();
  });

  it('muestra "Envío gratis" si free_shipping es true', () => {
    render(
      <MemoryRouter>
        <ProductCard item={mockItem} query="" />
      </MemoryRouter>
    );
    expect(screen.getByText('Envío gratis')).toBeInTheDocument();
  });

  it('no muestra "Envío gratis" si free_shipping es false', () => {
    render(
      <MemoryRouter>
        <ProductCard item={{ ...mockItem, free_shipping: false }} query="" />
      </MemoryRouter>
    );
    expect(screen.queryByText('Envío gratis')).not.toBeInTheDocument();
  });

  it('muestra las cuotas si installments existe', () => {
    render(
      <MemoryRouter>
        <ProductCard item={mockItem} query="" />
      </MemoryRouter>
    );
    expect(screen.getByText('12x $125')).toBeInTheDocument();
  });

  it('no muestra las cuotas si installments es null', () => {
    render(
      <MemoryRouter>
        <ProductCard item={{ ...mockItem, installments: null }} query="" />
      </MemoryRouter>
    );
    expect(screen.queryByText('12x $125')).not.toBeInTheDocument();
  });

  it('el enlace apunta a la ruta correcta', () => {
    render(
      <MemoryRouter>
        <ProductCard item={mockItem} query="celular" />
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/items/123');
  });
});