import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

// Mock de useNavigate y useLocation
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
  };
});

describe('SearchBar', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
  });

  it('muestra el valor por defecto del input si hay search en la URL', () => {
    useLocation.mockReturnValue({ search: '?search=celular' });
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/Buscar productos/i)).toHaveValue('celular');
  });

  it('actualiza el valor del input al escribir', () => {
    useLocation.mockReturnValue({ search: '' });
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Buscar productos/i);
    fireEvent.change(input, { target: { value: 'notebook' } });
    expect(input).toHaveValue('notebook');
  });

  it('navega a la ruta correcta al enviar el formulario', () => {
    useLocation.mockReturnValue({ search: '' });
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Buscar productos/i);
    fireEvent.change(input, { target: { value: 'tv' } });
    fireEvent.submit(input.closest('form'));
    expect(mockNavigate).toHaveBeenCalledWith('/items?search=tv');
  });

  it('no navega si el input está vacío', () => {
    useLocation.mockReturnValue({ search: '' });
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Buscar productos/i);
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(input.closest('form'));
    expect(mockNavigate).not.toHaveBeenCalled();
});
})