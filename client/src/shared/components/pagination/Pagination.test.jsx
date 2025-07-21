import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { MemoryRouter } from 'react-router-dom';
describe('Pagination', () => {
  it('no renderiza nada si totalPages es 1 o menos', () => {
    render(<Pagination totalPages={1} currentPage={1} onPageChange={() => {}} />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('renderiza el número correcto de botones', () => {
    render(
      <MemoryRouter>
        <Pagination totalPages={3} currentPage={1} onPageChange={() => { }} />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4); // 3 páginas + Siguiente
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Siguiente ›')).toBeInTheDocument();
  });

  it('resalta el botón de la página actual', () => {
    render(<Pagination totalPages={3} currentPage={2} onPageChange={() => {}} />);
    const activeButton = screen.getByText('2');
    expect(activeButton).toHaveClass('active');
  });

  it('llama a onPageChange con el número correcto', () => {
    const onPageChange = jest.fn();
    render(<Pagination totalPages={3} currentPage={1} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
})