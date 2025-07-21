import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProductDetailHeader from './sections/ProductDetailHeader';
import ProductMediaGallery from './sections/ProductMediaGallery';
import ProductInformation from './sections/ProductInformation';
import ProductDescription from './sections/ProductDescription';

describe('Subcomponentes de ProductDetail', () => {
  const mockProduct = {
  id: '123',
  title: 'Test Product',
  category_path_from_root: ['Cat1', 'Cat2'],
  pictures: [{ url: 'test.jpg' }],
  description: 'Test description',
  price: {
    currency: 'USD',
    amount: 1000,
    decimals: 0,
    regular_amount: 1200
  },
  installments: '12x $100'
  };

  it('ProductDetailHeader renderiza correctamente', () => {
    render(
      <MemoryRouter>
        <ProductDetailHeader
          categoryPath={mockProduct.category_path_from_root}
          productId={mockProduct.id}
          fromQuery={"celular"}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(/Cat1/)).toBeInTheDocument();
    expect(screen.getByText(/Cat2/)).toBeInTheDocument();
  });

  it('ProductMediaGallery renderiza la imagen y el título', () => {
    render(
      <ProductMediaGallery
        picture={mockProduct.pictures[0]}
        title={mockProduct.title}
      />
    );
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
  });

  it('ProductInformation renderiza la información del producto', () => {
    render(<ProductInformation product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('ProductDescription renderiza la descripción', () => {
    render(<ProductDescription description={mockProduct.description} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
