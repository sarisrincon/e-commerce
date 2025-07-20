import { render, screen, waitFor } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import { fetchProductDetail } from '../../api/products';
import { useParams, useLocation } from 'react-router';

jest.mock('../../api/products', () => ({
    fetchProductDetail: jest.fn(),
}));

describe('ProductDetail', () => {
    const mockProduct = {
        id: '123',
        title: 'Producto prueba',
        pictures: [{ url: 'img.jpg' }],
        description: 'Descripción de prueba',
        category_path_from_root: [{ name: 'Categoría' }],
    };

    beforeEach(() => {
        useParams.mockReturnValue({ id: '123' });
        useLocation.mockReturnValue({ state: { fromQuery: 'busqueda' } });
        jest.clearAllMocks();
    });

    it('muestra los esqueletos mientras se carga el producto', async () => {
        fetchProductDetail.mockImplementation(() => new Promise(() => { }));
        render(<ProductDetail />);
        expect(screen.getAllByRole('generic').length).toBeGreaterThan(0);
    });

    it('muestra error si la API falla', async () => {
        fetchProductDetail.mockRejectedValue(new Error('Error'));
        render(<ProductDetail />);
        await waitFor(() => {
            expect(screen.getByText(/no se pudo cargar el producto/i)).toBeInTheDocument();
        });
    });

    it('renderiza correctamente con datos del producto', async () => {
        fetchProductDetail.mockResolvedValue({ item: mockProduct });
        render(<ProductDetail />);
        await waitFor(() => {
            expect(screen.getByText('Producto prueba')).toBeInTheDocument();

        });

        await waitFor(() => {

            expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
        });
    });
});
