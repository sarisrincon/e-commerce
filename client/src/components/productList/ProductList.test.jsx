import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './sections/ProductCard';
import Pagination from '../../shared/components/pagination/Pagination';
import SearchBar from '../../shared/components/searchBar/SearchBar';
import * as reactRouterDom from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';


describe('Subcomponentes de ProductList', () => {
    const mockItem = {
        id: '1',
        title: 'Camiseta',
        price: {
            currency: 'USD',
            amount: 500,
            decimals: 0,
            regular_amount: 600
        },
        picture: 'img.jpg',
        condition: 'new',
        category: 'Electrónica',
        free_shipping: true,
        installments: '6x $100'
    };

    it('ProductCard renderiza el título y el precio', () => {
        render(
            <MemoryRouter>
                <ProductCard item={mockItem} query="notebook" />
            </MemoryRouter>
        );
        expect(screen.getByText('Camiseta')).toBeInTheDocument();
        expect(screen.getByText(/500/)).toBeInTheDocument();
    });

    it('Pagination muestra el número de página actual', () => {
        render(
            <Pagination totalPages={3} currentPage={2} onPageChange={() => { }} />
        );
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('SearchBar renderiza el input de búsqueda', () => {
        jest.spyOn(reactRouterDom, 'useLocation').mockReturnValue({ search: '' });
        render(
            <MemoryRouter>
                <SearchBar />
            </MemoryRouter>
        );
        expect(screen.getByPlaceholderText(/Buscar productos/i)).toBeInTheDocument();
    });
});
