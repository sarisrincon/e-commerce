import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeBanner from './WelcomeBanner';
import { MemoryRouter } from 'react-router-dom';

describe('WelcomeBanner', () => {
  it('muestra el texto de bienvenida', () => {
    render(
      <MemoryRouter>
        <WelcomeBanner onClose={() => { }} />
      </MemoryRouter>);
    expect(screen.getByText(/Hola/i)).toBeInTheDocument();
    expect(screen.getByText(/Para realizar búsquedas/i)).toBeInTheDocument();
  });

  it('llama a onClose al hacer clic en el botón de cerrar', () => {
    const onClose = jest.fn();
    render(
      <MemoryRouter>
        <WelcomeBanner onClose={onClose} />
      </MemoryRouter>

    );
  });
});